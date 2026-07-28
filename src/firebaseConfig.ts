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
  apiKey: clean(import.meta.env.VITE_FIREBASE_API_KEY) || "AIzaSyDA48qBpdZtqfyM8apoFqcZkEVNwbIoXTQ",
  authDomain: clean(import.meta.env.VITE_FIREBASE_AUTH_DOMAIN) || "mymental-health-a6aff.firebaseapp.com",
  projectId: projectId || "mymental-health-a6aff",
  storageBucket: clean(import.meta.env.VITE_FIREBASE_STORAGE_BUCKET) || "mymental-health-a6aff.firebasestorage.app",
  messagingSenderId: clean(import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID) || "460615736676",
  appId: clean(import.meta.env.VITE_FIREBASE_APP_ID) || "1:460615736676:web:f78b879d50804e009b6e71"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

console.log("Firebase initialized:", firebaseConfig.projectId);
