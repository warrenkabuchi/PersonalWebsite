import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

console.log("Debug: Loaded Configuration");
console.log("Project ID:", firebaseConfig.projectId);
console.log("Auth Domain:", firebaseConfig.authDomain);
console.log("API Key Present:", !!firebaseConfig.apiKey);

const app = initializeApp(firebaseConfig);
const db = getFirestore(app, "travelblogs");

async function testConnection() {
    try {
        console.log("Attempting to fetch posts...");
        const querySnapshot = await getDocs(collection(db, "posts"));
        console.log("Success! Found " + querySnapshot.size + " documents.");
    } catch (e: any) {
        console.error("Connection failed!");
        console.error("Error Code:", e.code);
        console.error("Error Message:", e.message);
    }
}

testConnection();
