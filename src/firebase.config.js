import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBnmIsSoIz7QvrGs7xZ2u4df5T6Qd0Pt2c',
  authDomain: 'house-marketplace-app-5d6fa.firebaseapp.com',
  projectId: 'house-marketplace-app-5d6fa',
  storageBucket: 'house-marketplace-app-5d6fa.appspot.com',
  messagingSenderId: '940869854195',
  appId: '1:940869854195:web:7b7674625744c6b1ae2886',
};

initializeApp(firebaseConfig);
export const db = getFirestore();
