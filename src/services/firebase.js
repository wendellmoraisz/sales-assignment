import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import apiKeys from "../../apiKeys";

const firebaseConfig = {
    apiKey: apiKeys.apiKey,
    authDomain: apiKeys.authDomain,
    projectId: apiKeys.projectId,
    storageBucket: apiKeys.storageBucket,
    messagingSenderId: apiKeys.messagingSenderId,
    appId: apiKeys.appId,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, app, db };