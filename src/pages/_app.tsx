import 'solana/styles/globals.css'
import type { AppProps } from 'next/app'
import {initializeApp} from 'firebase/app';
import {getAnalytics}from 'firebase/analytics';
import { useEffect } from 'react';
import React from 'react';
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
  const addPayPal = ()=>{
    const script = document.createElement("script");
    script.src = "https://www.paypal.com/sdk/js?client-id=AZ9NtAD_X73bUhwVTNKmr1VpzogjcKCiNe3xXIJpzo7lERcu9HorvdfcpBx2Akwmi36SjL4Ynb3h5SOa&enable-funding=venmo&currency=USD&vault=true&intent=subscription";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);
  }
  useEffect(()=>{
    addPayPal()
  },[]);
  return <Component {...pageProps} />
}
