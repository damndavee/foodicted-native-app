import * as SecureStore from "expo-secure-store";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth, getCurrentUser, getUserSnapshot, signInAuthUserWithEmailAndPassword, signOutUser } from "../../services/firebase";
import { createAppSlice } from "../utils";
import { AuthUserInputData, AuthUserDocumentData, AdditionalUserData, UserSnapshotData, Credentials } from "../../types/auth";
import { createAsyncThunk } from "@reduxjs/toolkit";

export interface AuthenticationState {
    authMessage: string;
    errorMessage: any;
    isLoading: boolean;
    currentUser: UserSnapshotData 
};

export type AuthenticationReducers = {};

export type AuthenticationSelectors = {
    selectAuthMessage: (state: AuthenticationState) => string;
    selectCurrentUser: (state: AuthenticationState) => UserSnapshotData;
};

const slice = createAppSlice({
    initialState: {
        authMessage: '',
        errorMessage: '',
        currentUser: {},
        isLoading: false,
    } as AuthenticationState,
    name: 'authenticationReducer',
    reducers: (create) => ({
        setCurrentUser: create.reducer<UserSnapshotData>((state, action) => {
            state.currentUser = action.payload;
        }),
        signInWithEmailThunk: create.asyncThunk(
            async (credentials: Credentials) => signInAuthUserWithEmailAndPassword(credentials.email, credentials.password),
            {
                fulfilled: (state, action) => {
                    console.log("action: ", action);
                    console.log("SUCCESS");
                },
                pending: (state) => {
                    state.authMessage = 'Logging in...';
                    state.isLoading = true;
                },
                rejected: (state, action) => {
                    console.log("REJECTED - ERROR (signInWithEmailThunk): ", action);
                    state.isLoading = false;
                    state.errorMessage = action.payload;
                }
            }
        ),
        createUserWithDocumentThunk: create.asyncThunk(
            async (userInputData: AuthUserInputData, { dispatch }) => {
                const { email, password } = userInputData;
                
                const { user } = await createAuthUserWithEmailAndPassword(email as string, password as string);
                
                dispatch(createUserDocumentThunk({...userInputData, uid: user.uid}));
            },
            {
                pending: (state) => {
                    state.authMessage = 'Setting up Account data...';
                    state.isLoading = true;
                },
                rejected: (state, action) => {
                    // TODO: map error code to error message
                    console.log("REJECTED - ERROR (createUserWithDocument): ", action);
                    state.isLoading = false;
                    state.errorMessage = action.payload;
                },
            }
        ),
        createUserDocumentThunk: create.asyncThunk(
            async (userData: AuthUserDocumentData, { dispatch }) => {
                const additionalData: AdditionalUserData = {
                    showBiometrics: true, 
                    showOnboarding: true, 
                    showTermsAndConditions: true, 
                    biometricEnabled: false, 
                    notificationEnabled: false
                };

                await createUserDocumentFromAuth(userData, additionalData).then(() => {
                    dispatch(signInAfterSignupThunk(userData.uid));
                });
            },
            {
                pending: (state) => {
                    state.isLoading = true;
                    state.authMessage = 'Creating user...';
                },
                rejected: (state, action) => {
                    // TODO: map error code to error message
                    console.log("REJECTED - ERROR (createUserDocument): ", action);
                    state.isLoading = false;
                    state.errorMessage = action.payload;
                },
            }
        ),
        signInAfterSignupThunk: create.asyncThunk(
            async (uid: string, { dispatch, fulfillWithValue }) => {
                const userSnapshot = await getUserSnapshot(uid);

                if(userSnapshot) {
                    dispatch(setCurrentUser(userSnapshot.data()));
                }
            },
            {
                fulfilled: (state) => {
                    state.authMessage = 'Successfully logged in!';
                },
                pending: (state) => {
                    state.isLoading = true;
                    state.authMessage = 'Logging in...';
                },
                rejected: (state, action) => {
                    // TODO: map error code to error message
                    console.log("REJECTED - ERROR (signInAfterSignup): ", action);
                    state.isLoading = false;
                    state.errorMessage = action.payload;
                },
            }
        ),
        checkUserSessionThunk: create.asyncThunk(
            async () => await getCurrentUser(),
            {
                rejected: (state, action) => {
                    // TODO: map error code to error message
                    console.log("REJECTED - ERROR (checkUserSession): ", action);
                    state.isLoading = false;
                    state.errorMessage = action.payload;
                },
            }
        ),
        signOutThunk: create.asyncThunk(
            async () => signOutUser()
        )
    }),
    selectors: {
        selectAuthMessage: (state) => state.authMessage,
        selectCurrentUser: (state) => state.currentUser
    } as AuthenticationSelectors
});

export const { signInWithEmailThunk, setCurrentUser, createUserWithDocumentThunk, createUserDocumentThunk, signInAfterSignupThunk, checkUserSessionThunk, signOutThunk } = slice.actions;
export const { selectAuthMessage, selectCurrentUser } = slice.selectors;
export default slice.reducer;