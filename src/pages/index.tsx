import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from 'solana/styles/Home.module.css'
import NavBar from './components/navbar'
import { PayPalButton } from 'react-paypal-button-v2'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Easy Peasy</title>
        <meta name="description" content="Find all your DIY pdfs and resource" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <picture><img src="/topbg.png" alt="topNavBackground"className={styles.topbackground}/></picture>
        <NavBar/>
      <main className={styles.main}>
        
      
        <div className={styles.description}>
         
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
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
          
          <button className={styles.closeBtn}>X</button>
          <center>
         <p>Sign Up</p>
         <input type="text" placeholder='your email' />
         <br />
         <input type="password" placeholder="choose password"name="password" id="password" />
         <br />
         <input type="password" placeholder="repeat password"name="repeatpass" id="repeatpass" />
         </center>
         <center>
         <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="XHV3R67TG5Y3S"/>
<table>
<tr><td><input type="hidden" name="on0" value="subscription options"/>subscription options</td></tr><tr><td><select name="os0">
	<option value="Basic">Basic : $10.00 USD - monthly</option>
	<option value="Premium">Premium : $15.00 USD - monthly</option>
	<option value="Platinum">Platinum : $20.00 USD - monthly</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="USD"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_subscribeCC_LG.gif"  name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<picture><img alt="" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/></picture>
</form>
</center>


         </div>
        <div className={styles.grid}>
       
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Docs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
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
              Deploy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div>
      
      </main>
     
    </>
  )
}
