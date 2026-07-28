declare module "firebase/app" {
  import { FirebaseApp, FirebaseOptions } from "@firebase/app";
  export function initializeApp(options: FirebaseOptions, name?: string): FirebaseApp;
  export * from "@firebase/app";
}
declare module "firebase/firestore" {
  import { Firestore } from "@firebase/firestore-types";
  export function getFirestore(app?: any): Firestore;
  export * from "@firebase/firestore-types";
}
declare module "firebase/auth" {
  import { Auth } from "@firebase/auth-types";
  export function getAuth(app?: any): Auth;
  export * from "@firebase/auth-types";
}
