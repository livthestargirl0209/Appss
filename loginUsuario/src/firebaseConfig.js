import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBWni6MPVAlzeC0POefoyN0OWAGgMRxI14",
  authDomain: "rpwp-16d79.firebaseapp.com",
  projectId: "rpwp-16d79",
  storageBucket: "rpwp-16d79.appspot.com",
  messagingSenderId: "580460553230",
  appId: "1:580460553230:web:0bff80cf72dfb1a91b485f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 