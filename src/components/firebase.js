import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyCyFPrq4c7FtYSntpkFqOCXeE1Bl03SzEA',
  authDomain: 'colective-iscool.firebaseapp.com',
  projectId: 'colective-iscool',
  storageBucket: 'colective-iscool.appspot.com',
  messagingSenderId: '423977582808',
  appId: '1:423977582808:web:4a2df0105bb6502d35d7ad',
};

const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;
