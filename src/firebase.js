import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCs9wSAu6xmrQkhHUoNl0EIF8Nh3E6_b8s",
  authDomain: "cp-senior-project.firebaseapp.com",
  projectId: "cp-senior-project",
  storageBucket: "cp-senior-project.appspot.com",
  messagingSenderId: "954099578526",
  appId: "1:954099578526:web:15969bb81fd0da533e2d8f",
  measurementId: "G-TWD1WD0Q6Y"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const storage = getStorage(app);