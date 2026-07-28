import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const clean = (value?: string): string | undefined => {
  if (!value) return undefined;
  return value.trim().replace(/^["']|["']$/g, "");
};

const apiKey = clean(import.meta.env.VITE_FIREBASE_API_KEY);
const projectId = clean(import.meta.env.VITE_FIREBASE_PROJECT_ID);

if (!apiKey) {
  console.warn("VITE_FIREBASE_API_KEY not set — Firestore writes unavailable.");
}

const firebaseConfig = {
  apiKey: apiKey || "",
  authDomain: clean(import.meta.env.VITE_FIREBASE_AUTH_DOMAIN) || "mmhfsp.firebaseapp.com",
  projectId: projectId || "mmhfsp",
  storageBucket: clean(import.meta.env.VITE_FIREBASE_STORAGE_BUCKET) || `${projectId || "mmhfsp"}.firebasestorage.app`,
  messagingSenderId: clean(import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID) || "",
  appId: clean(import.meta.env.VITE_FIREBASE_APP_ID) || ""
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

console.log("Firebase initialized:", firebaseConfig.projectId);
