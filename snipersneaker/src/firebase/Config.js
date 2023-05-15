import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FB_API_KEY,
  authDomain: import.meta.env.VITE_FB_AUTH_DO,
  projectId: import.meta.env.VITE_FB_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FB_STORAGE_BUC,
  messagingSenderId: import.meta.env.VITE_FB_MES,
  appId: import.meta.env.VITE_FB_APP_ID
};


const app = initializeApp(firebaseConfig);