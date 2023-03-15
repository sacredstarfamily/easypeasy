import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { PayPalScriptOptions } from "@paypal/paypal-js/types/script-options";
import { useEffect } from "react";
import {
	usePayPalScriptReducer
} from "@paypal/react-paypal-js";
export const ButtonWrapper = ({ type }:any) => {
	const [{ options }, dispatch] = usePayPalScriptReducer();

	useEffect(() => {
        dispatch({
            type: "resetOptions",
            value: {
                ...options,
                intent: "subscription",
            },
        });
        
    }, [type, dispatch, options]);

	return (<PayPalButtons
		createSubscription={(data, actions) => {
			return actions.subscription
				.create({
					plan_id: "P-36D63407UL4725930MQHWNQA",
                   
                    plan:{billing_scheme:[{"pricing_scheme":{"value":"15"}}]}
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
