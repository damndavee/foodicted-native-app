import { UserCredential } from "firebase/auth";

export type ResponseAuthUserData = Promise<UserCredential>;

export type AuthUserDocumentData = {
    email: string;
    nickname: string;
    password: string;
    confirmPassword: string;
    avatarUrl: string;
    uid: string;
}

export type Credentials = {
    email: string;
    password: string;
}

type AdditionalDataKeys = 'showBiometrics' | 'showOnboarding' | 'showTermsAndConditions' | 'biometricEnabled' | 'notificationEnabled';

export type AdditionalUserData = Record<AdditionalDataKeys, boolean>;

export type UserSnapshotData = AuthUserDocumentData & AdditionalUserData;

export type AuthUserInputData = Omit<AuthUserDocumentData, "uid">;