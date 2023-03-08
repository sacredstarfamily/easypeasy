import React from "react";
import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
const PaymentSuccess: NextPage = () => {
    const router = useRouter();
   const token = router.query.token;
   if(token){
    return(
      
    <div>
        
        <Link href="/">home</Link>
    </div>
    );
   }else{
    return(
        <div>
            <center>
            <p>something wrong</p>
            </center>
        </div>
    )
   }
}
export default PaymentSuccess;