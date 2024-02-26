import { FirebaseApp, FirebaseOptions, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeAuth, getReactNativePersistence, Auth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyCsm77dc5jyUPu9Z2VKENKIaKHKbv178FI",
  authDomain: "foodicted-native-app.firebaseapp.com",
  projectId: "foodicted-native-app",
  storageBucket: "foodicted-native-app.appspot.com",
  messagingSenderId: "29441069260",
  appId: "1:29441069260:web:5d14d878fdb5cfadab3269",
  measurementId: "G-MV8C6N3DYJ",
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);

export const auth: Auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const analytics = getAnalytics(app);
export const db = getFirestore(app);