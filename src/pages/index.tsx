import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from 'solana/styles/Home.module.css'
import NavBar from './components/navbar'
import { useEffect } from 'react'
import {initializeApp} from 'firebase/app';
import {getAnalytics}from 'firebase/analytics';

import Link from 'next/link'
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer
} from "@paypal/react-paypal-js";
import { PayPalScriptOptions } from "@paypal/paypal-js/types/script-options";
import { PayPalButtonsComponent } from "@paypal/paypal-js/types/components/buttons";

const inter = Inter({ subsets: ['latin'] })
import React from 'react'
import { ReactDOM } from 'react'

 
export default function Home() {
  const paypalScriptOptions: PayPalScriptOptions = {
    "client-id":
      "AdytsnuuQr8Ywn8oN1gbheEBaWJg688s0__2LiDIeWojycWBnbtfAUWUPVQhSCLQuPxO7Z1e9Mx0V9eE",
    currency: "USD",
    intent: "subscription",
   
  };
  const firebaseConfig = {
    apiKey: "AIzaSyA3SXtiznC9W2Vr9U7mFWTDpXXEV5Sy8NI",
    authDomain: "easypeasy-5371a.firebaseapp.com",
    projectId: "easypeasy-5371a",
    storageBucket: "easypeasy-5371a.appspot.com",
    messagingSenderId: "545813621027",
    appId: "1:545813621027:web:741b015f67f8acba07c496",
    measurementId: "G-C92WEW7DW1"
  };
  const addPayPal = ()=>{
    const script = document.createElement("script");
    script.src = "https://www.paypal.com/sdk/js?client-id=AdytsnuuQr8Ywn8oN1gbheEBaWJg688s0__2LiDIeWojycWBnbtfAUWUPVQhSCLQuPxO7Z1e9Mx0V9eE&enable-funding=venmo&currency=USD&vault=true&intent=subscription";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);
  }
  if (typeof window !== 'undefined') {
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    addPayPal()
    console.log('You are on the browser,You are good to go')
    } else {
    console.log('You are on the server,Cannot execute')
   }
  
  useEffect(()=>{
    addPayPal()
  },[]);
  return (
    
    <>
      <Head>
        <title>Easy Peasy</title>
        <meta name="description" content="Find all your DIY pdfs and resource" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/pdfimg.png" />
      </Head>
      <picture><img src="/topbg.png" alt="topNavBackground"className={styles.topbackground}/></picture>
        <NavBar/>
      <main className={styles.main}>
        
      
        <div className={styles.description}>
         
          <div>
            <a
              href="/blog"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/wordlogo.png"
                alt="easypeasy Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>
       
        <div className={styles.center}>
       
          <Image
            className={styles.logo}
            src="/wordlogo2.png"
            alt="easypeasy Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/pdfimg.png"
              alt="13"
              width={40}
              height={41}
              priority
            />
          </div>
        </div>
        <div id="signupDiv"className={styles.signupDiv}>
          
          <button className={styles.closeBtn}onClick={()=>{document.getElementById("signupDiv")!.style.display="none"}}>X</button>
          <div>
         <center>
  <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
    <input type="hidden" name="cmd" value="_s-xclick"/>
    <input type="hidden" name="hosted_button_id" value="XHV3R67TG5Y3S"/>
   <table>
    <tbody>
    <tr><td><input type="hidden" name="on0" value="subscription options"/>subscription options</td></tr>
    <tr><td><select name="os0">
	   <option value="Basic">Basic : $10.00 USD - monthly</option>
	   <option value="Premium">Premium : $15.00 USD - monthly</option>
	   <option value="Platinum">Platinum : $20.00 USD - monthly</option>
   </select></td></tr>
   </tbody>
   </table>
    <input type="hidden" name="currency_code" value="USD"/>
   <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_subscribeCC_LG.gif"  name="submit" alt="PayPal - The safer, easier way to pay online!"/>
   <picture><img alt="" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/></picture>
  </form>
</center>
</div>

         </div>
        <div className={styles.grid}>
       
          <a
            href="/blog"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Blog <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Read popular blog posts from do-it-yourselfers
            </p>
          </a>

          <a
            href="/howto"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Learn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Templates <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Awesome <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
          <PayPalScriptProvider
			options={{
				"client-id": "AdytsnuuQr8Ywn8oN1gbheEBaWJg688s0__2LiDIeWojycWBnbtfAUWUPVQhSCLQuPxO7Z1e9Mx0V9eE",
				components: "buttons",
				intent: "subscription",
				vault: true,
			}}
		>
        
          </PayPalScriptProvider>
        </div>
      
      </main>
     
    </>
   
  )
}
