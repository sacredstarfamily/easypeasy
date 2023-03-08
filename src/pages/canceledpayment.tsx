import React from "react";
import type { NextPage } from "next";
import Link from "next/link";
import styles from 'solana/styles/Home.module.css'
const CanceledPayment: NextPage = () => {
    return(
        <div>
            <center>
            <p>User Canceled Payment</p>
            <Link className={styles.link} href="/">go back home</Link>
            </center>
        </div>
    );
}
export default CanceledPayment;