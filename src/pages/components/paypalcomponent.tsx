import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { PayPalScriptOptions } from "@paypal/paypal-js/types/script-options";
import { useEffect } from "react";
import {
	usePayPalScriptReducer
} from "@paypal/react-paypal-js";
export const ButtonWrapper = ({ type }:any) => {
	const [{ options }, dispatch] = usePayPalScriptReducer();

	

	return (<PayPalButtons
		createSubscription={(data, actions) => {
			return actions.subscription
				.create({
					plan_id: "P-36D63407UL4725930MQHWNQA",
                   
                    
				})
				.then((orderId) => {
					// Your code here after create the order
					return orderId;
				});
		}}
		style={{
			label: "subscribe",
		}}
	/>);
}
