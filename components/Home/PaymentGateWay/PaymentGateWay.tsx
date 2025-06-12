import React from "react";

const PaymentGateWay = () => {
  return <button>Pay</button>;
};

export default PaymentGateWay;

// RazorPay Payment gateway Integration without backend. "Bug Ninza" youtube channel
//without backend we achieve to trigger api call using  NextRequest, NextResponse  in 'next/server'

// STEP: 1 - create a fonlder under app directory app -> create a folder(folder name is api/create-order) then under this folder create a page routeModule.ts
// eg(app -> Folder(api/create-order) -> Page(route.ts))

// STEP:2 - npm i razorpay

// STEP:3 - create a .env.local file under the root directory (ie, means outside the app directory ) then store these details in the below format
// RAZORPAY_KEY_ID=rzp_test_xKPuc1eXmL54Jn
// RAZORPAY_SECRET_KEY=SHsW1RDh6I2Mpjalh99rYBwN
// NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_xKPuc1eXmL54Jn

// STEP: 4 - write this code under routeModule.ts
// import { NextRequest, NextResponse } from "next/server";
// import Razorpay from "razorpay";
// const razorpay = new Razorpay({
//   key_id: process.env.RAZORPAY_KEY_ID,
//   key_secret: process.env.RAZORPAY_SECRET_KEY,
// });

//  // this function handle post request

// export async function POST(request: NextRequest) {
//   try {
//     const body = await request.json();  //here we receive the body then convert json format
//     const amount = body.amount;     //here we receive amount from body     "body: JSON.stringify({ amount: feeAmount }),"this code is cpming from

//     if (!amount || typeof amount !== "number") {
//       return NextResponse.json({ error: "Invalid amount" }, { status: 400 });
//     }
//     const order = await razorpay.orders.create({
//       amount: amount * 100, // ₹100
//       currency: "INR",
//       receipt: "receipt_" + Math.random().toString(36).substring(7),
//     });
//     return NextResponse.json({ orderId: order.id }, { status: 200 });
//   } catch (error) {
//     console.error(
//       "Error creating order:",
//       error instanceof Error ? error.message : error
//     );
//     return NextResponse.json(
//       { error: "Error creating order" },
//       { status: 500 }
//     );
//   }
// }

//// STEP:5 - In 'Pay Now' button page.tsx code
// 'use client'  //must give this other wise the payment proceedure not works in client side
// import Script from 'next/script'
// import axios from 'axios'
// import { errorMonitor } from 'node:events'

////typescript declaretion By default, TypeScript knows the standard properties on the window object (like window.location, window.alert, etc.), but it doesn't know about third-party scripts (like Razorpay, Stripe, etc.) that might be dynamically added via <script> tags.If you try to access window.Razorpay without declaring it, TypeScript will throw an error:
// declare global { //in type script declare  global part is specific, it ensure that the razorpay objectis recognized in our window object
//   interface Window {
//     Razorpay: any;
//   }
// }

// const PaymentGateWay = () => {
// const [isProcessing, setIsProcessing] = useState(false)
// const handlePaymet = async (fee:any) => {
//     console.log(feeAmount, "feeamount")
//   setIsProcessing(true)

//   try{
//     //crate order
//       const response = await fetch('/api/create-order', {   //this is the 1st API call this call goto the function POST from api/create-order -> route.ts page
//       method: 'POST',
//       headers: {'Content-Type': 'application/json',},
//       body: JSON.stringify({ amount: feeAmount }), });  // here we pass body, body include the amount as json convert to string then pass to function POST
//       const data = await response.json();
//     //initialize razorpay

//     const options = {
//       key:process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
//       // amount: AMOUNT * 100, //static
//       amount: feeAmount * 100,
//       currency:"INR",
//       name:"test school",
//       description:"school fee",
//       order_id: data.orderId,
//       handler: function (response: any){
//         console.log("Payment Successfull", response)

//       },
//       prefill:{
//         name:"test name",
//         email:"test@gmail.com",
//         phone:"99999999"
//       },
//       theme: {
//         color:"#03d3d4"
//       },
//     }
//       const rzpl = new window.Razorpay(options);
//       rzpl.open();
//     console.log(data, "datazzz")
//   }catch(error) {
//     console.error("Payment Fails", error)

//   }finally{
//     setIsProcessing(false)
//   }
// }

//   return (
//     <div>
//     <Script src="https://checkout.razorpay.com/v1/checkout.js" />

//                 <button onClick={() => handlePaymet(fee=100)} className="bg-[#33db65] text-[13px] w-[100px] text-white rounded-[30px] p-2">
//               PAY NOW
//             </button>

//     </div>
//   )
// }

// export default PaymentGateWay




////payment Gateway code with backend api using reactquery and axios (refer schola parent app payment file)
// ("use client");
// import Script from "next/script";
// import axios from "axios";
// import { errorMonitor } from "node:events";

// declare global {
//   interface Window {
//     Razorpay: any;
//   }
// }

// const Payments = () => {
//   const schola_base_url = getBaseUrl();

//   const initiateOrder = async ({ studentid, amount }: any) => {
//     //studentid, amount get useMutation(intiateOrder)
//     const url = `${schola_base_url}api/RazorPayment/InitiateOrder?studentid=${studentid}&amount=${amount}`;
//     // const url = getBaseUrl() + "api/RazorPayment/InitiateOrder?studentid=" +studentid +  '&amount=' +amount;

//     const response = await fetch(url, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     if (!response) {
//       throw new Error("Failed to initiate Razorpay order");
//     }

//     return response.json();
//   };

//   const paymentRequest = useMutation(initiateOrder, {
//     //here get studentid and amount from button PAY NOW paymentRequest.mutate, then pass directly it to initiateOrderbut we cant see these two parameter but  initiateOrder contain these two parameter(look above)
//     onSuccess: (response: any) => {
//       console.log(response, "Razorpay Order Response");
//       // You can open Razorpay checkout here
//       const options = {
//         key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
//         amount: response?.totalAmount,
//         currency: response?.currency,
//         name: response.customerName,
//         description: "Fee Payment",
//         order_id: response?.orderId,
//         handler: function (paymentResponse: any) {
//           // Handle payment success (send paymentResponse.razorpay_payment_id etc. to backend to verify)
//           console.log("Payment Success:", paymentResponse);
//           const values = {
//             ...paymentResponse,
//             razorpay_order_id:
//               paymentResponse?.razorpay_order_id || response?.orderId,
//             pg_OrderId: response?.pg_OrderId,
//           };
//           axios
//             .post(`${schola_base_url}api/RazorPayment/PaymentRequest`, values)
//             .then(() => {
//               alert("Payment successful and verified!");
//             })
//             .catch(() => {
//               alert("Payment verification failed.");
//             });
//         },

//         prefill: {
//           name: response?.customerName, // Optional
//           mobile: response?.mobile, // Optional
//         },
//         theme: {
//           color: "#03d3d4",
//         },
//       };
//       const rzp = new window.Razorpay(options);
//       rzp.open();
//     },
//     onError: (error: any) => {
//       alert("Payment initiation failed: " + error.message);
//     },
//   });

//   return (
//     <div className="fee-payment-main-container">
//       <Script src="https://checkout.razorpay.com/v1/checkout.js" />
//       <div className="w-full h-[100vh]">
//         <button
//           onClick={() =>
//             paymentRequest.mutate({ studentid: studentId, amount: fee })
//           }
//           className="bg-[#33db65] text-[13px] w-[100px] text-white rounded-[30px] p-2"
//         >
//           PAY NOW
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Payments;
