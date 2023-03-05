import 'solana/styles/globals.css'
import type { AppProps } from 'next/app'
import {initializeApp} from 'firebase/app';
import {getAnalytics}from 'firebase/analytics';
const firebaseConfig = {
  apiKey: "AIzaSyA3SXtiznC9W2Vr9U7mFWTDpXXEV5Sy8NI",
  authDomain: "easypeasy-5371a.firebaseapp.com",
  projectId: "easypeasy-5371a",
  storageBucket: "easypeasy-5371a.appspot.com",
  messagingSenderId: "545813621027",
  appId: "1:545813621027:web:741b015f67f8acba07c496",
  measurementId: "G-C92WEW7DW1"
};

if (typeof window !== 'undefined') {
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  console.log('You are on the browser,You are good to go')
  } else {
  console.log('You are on the server,Cannot execute')
 }
export default function App({ Component, pageProps }: AppProps) {
  
  return <Component {...pageProps} />
}
