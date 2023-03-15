import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { PayPalScriptOptions } from "@paypal/paypal-js/types/script-options";
import { useEffect } from "react";
import {
	usePayPalScriptReducer
} from "@paypal/react-paypal-js";
const debug = true;

const initialState = {
  amount: "10.00",
  orderID: "",
  onApproveMessage: "",
  onErrorMessage: ""
};
const paypalScriptOptions: PayPalScriptOptions = {
    "client-id":
      "AdytsnuuQr8Ywn8oN1gbheEBaWJg688s0__2LiDIeWojycWBnbtfAUWUPVQhSCLQuPxO7Z1e9Mx0V9eE",
   intent:"subscription",
   vault:true
   
   
  };
  const ButtonWrapper = ({ type }:any) => {
	const [{ options }, dispatch] = usePayPalScriptReducer();

	useEffect(() => {
        dispatch({
            type: "resetOptions",
            value: {
                ...options,
                intent: "subscription",
            },
        });
    }, [type]);

	return (<PayPalButtons
		createSubscription={(data, actions) => {
			return actions.subscription
				.create({
					plan_id: "P-8GY40287F3510912VMQHWOVQ",
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
export default class PaypalComponent extends React.Component<{}, typeof initialState>{
    
    constructor(props: any) {
        super(props);
        this.state = initialState;
    
        this.onChange = this.onChange.bind(this);
        this.createOrder = this.createOrder.bind(this);
        this.onApprove = this.onApprove.bind(this);
        this.onError = this.onError.bind(this);
        this.onClick = this.onClick.bind(this);
      }
      onChange(event: React.ChangeEvent<HTMLSelectElement>) {
        this.setState({
          amount: event.target.value,
          orderID: "",
          onApproveMessage: "",
          onErrorMessage: ""
        });
      }
      createOrder(data: Record<string, unknown>, actions: any) {
        if (debug) console.log("Creating order for amount", this.state.amount);
        return actions.order
          .create({
            purchase_units: [
              {
                amount: {
                  value: this.state.amount
                }
              }
            ]
          })
          .then((orderID: any) => {
            this.setState({ orderID: orderID });
            return orderID;
          });
      }
    
      onApprove(data: any, actions: any) {
        let app = this;
        return actions.order.capture().then(function (details: any) {
          app.setState({
            onApproveMessage: `Transaction completed by ${details.payer.name.given_name}!`
          });
        });
      }
    
      onError(err: Record<string, unknown>) {
        this.setState({
          onErrorMessage: err.toString()
        });
      }
    
      onClick() {
        if (debug) console.log("When clicked, amount was", this.state.amount);
      }
      render() {
        return (
          <div style={{ minHeight: "300px" }}>
            <table className="table" style={{ maxWidth: "400px" }}>
              <tbody>
                <tr>
                  <th>
                    <label htmlFor="amount">Order Amount: </label>
                  </th>
                  <td>
                    <select onChange={this.onChange} name="amount" id="amount">
                      <option value="10.00">$10.00</option>
                      <option value="15.00">$15.00</option>
                      <option value="20.00">$20.00</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <th>Order ID:</th>
                  <td>{this.state.orderID ? this.state.orderID : "unknown"}</td>
                </tr>
                <tr>
                  <th>On Approve Message: </th>
                  <td data-testid="message">{this.state.onApproveMessage}</td>
                </tr>
                <tr>
                  <th>On Error Message: </th>
                  <td data-testid="error">{this.state.onErrorMessage}</td>
                </tr>
              </tbody>
            </table>
            <PayPalScriptProvider options={{
				"client-id": "AdytsnuuQr8Ywn8oN1gbheEBaWJg688s0__2LiDIeWojycWBnbtfAUWUPVQhSCLQuPxO7Z1e9Mx0V9eE",
				components: "buttons",
				intent: "subscription",
				vault: true,
			}}>
                <ButtonWrapper type="subscription"/>
            
            </PayPalScriptProvider>
          </div>
        );
      }
}