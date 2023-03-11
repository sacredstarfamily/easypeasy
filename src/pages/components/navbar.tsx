import React, { useEffect, useState } from "react";
import styles from 'solana/styles/Home.module.css';

const NavBar = ()  => {
    const showSignUp = ()=>{
    if(isSignUp){
        setIsSignUp(false);
    }else{
        setIsSignUp(true);
    }
    }
const [isSignUp, setIsSignUp] = useState(false);
useEffect(()=>{
    if (isSignUp){
        document.getElementById("signupDiv")!.style.display="block";
    }else{
        document.getElementById("signupDiv")!.style.display="none";
    }
},[isSignUp])
    return(
 <>
<div className={styles.nav}>
<h1>Easy Peasy | PDFs</h1>
<div className={styles.profileNav}>
    <button className={styles.signupBtn} onClick={()=>{showSignUp()}}>sign up</button>
    <button className={styles.loginBtn}>login</button>
</div>
</div>
        
</>
    );
}
export default NavBar;