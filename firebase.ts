import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAeD-QEHAr5dij5jjTq3KnpQdAJTvz1im0",
  authDomain: "dropbox-clone-a9e5d.firebaseapp.com",
  projectId: "dropbox-clone-a9e5d",
  storageBucket: "dropbox-clone-a9e5d.appspot.com",
  messagingSenderId: "187143445814",
  appId: "1:187143445814:web:0ca33146405349210d6797",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
