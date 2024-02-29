import { UserCredential, createUserWithEmailAndPassword, onAuthStateChanged,signInWithEmailAndPassword, signOut, User, GoogleAuthProvider, signInWithCredential, AuthCredential } from "firebase/auth";
import { auth, db } from '../../firebaseConfig';
import { getDoc, doc, setDoc, QueryDocumentSnapshot } from "firebase/firestore";
import { AdditionalUserData, AuthUserDocumentData, UserSnapshotData } from "../types/auth";

export const createAuthUserWithEmailAndPassword = async (email: string, password: string): Promise<UserCredential> => {
  return await createUserWithEmailAndPassword(auth, email, password);  
}

export const createUserDocumentFromAuth = async (userAuth: AuthUserDocumentData, additionalData: AdditionalUserData): Promise<void> => {
  const { nickname, email, avatarUrl, uid } = userAuth;

  const userDocRef = doc(db, 'users', uid);

  const createdAt = new Date();

  try {
    await setDoc(userDocRef, { nickname, email, createdAt, avatarUrl, ...additionalData })
  } catch (error) {
    throw new Error(error as string);
  }
}

export const getUserSnapshot = async (uid: string): Promise<QueryDocumentSnapshot<UserSnapshotData> | void> => {
  const userDocRef = doc(db, 'users', uid);
  const userSnapshot = await getDoc(userDocRef);

  return userSnapshot as QueryDocumentSnapshot<UserSnapshotData>;
}

export const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
};
export const signOutUser = async () => await signOut(auth);

export const generateGoogleCredentials = (idToken: string) => GoogleAuthProvider.credential(idToken);

export const signInWithExternalCredentials = (credential: AuthCredential) => signInWithCredential(auth, credential);
 
export const signInAuthUserWithEmailAndPassword = async (email: string, password: string) => {
  return await signInWithEmailAndPassword(auth, email, password);
}