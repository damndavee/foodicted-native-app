import * as GoogleAuth from "expo-auth-session/providers/google";
import * as FacebookAuth from "expo-auth-session/providers/facebook";

import { Prompt } from 'expo-auth-session';

const useAuth = () => {
    
    const [requestGoogle, responseGoogle, promptAsyncGoogle] = GoogleAuth.useAuthRequest({
        androidClientId: process.env.ANDROID_ID,
        iosClientId: process.env.IOS_ID,
        webClientId: process.env.WEB_ID,
    });

    const [requestFb, responseFb, promptAsyncFb] = FacebookAuth.useAuthRequest({});

    const signInWithGoogle = async () => promptAsyncGoogle();

    const signInWithFacebook = () => {};

    const signInWithApple = () => {};

    return { signInWithGoogle };
};

export default useAuth;