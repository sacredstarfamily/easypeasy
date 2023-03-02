import React from "react";
import styles from 'solana/styles/Home.module.css';
const NavBar = ()  => {
    return(
<div className={styles.nav}>
<h1>Easy Peasy | PDFs</h1>
<div className={styles.profileNav}>
    <p>sign up</p>
    <p>login</p>
</div>
</div>
    );
}
export default NavBar;