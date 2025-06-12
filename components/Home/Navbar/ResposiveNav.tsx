'use client';
import React, { useState } from 'react'
import MobileNav from './MobileNav'
import Nav from './Nav'


const ResposiveNav = () => {
  const [showNav, setShowNav] = useState(false)
  const handleNavShow = () => setShowNav(true)
  const handleNavClose = () => setShowNav(false)
  return (
    <div>
        <Nav openNav={handleNavShow}/>
        <MobileNav showNav={showNav} closeNav={handleNavClose}/>
    </div>
  )
}

export default ResposiveNav






// import { NextRequest, NextResponse } from "next/server"
// import Razorpay from "razorpay"


// const razorpay = new Razorpay({
//     key_id:process.env.RAZORPAY_KEY_ID!,
//     key_secret:process.env.RAZORPAY_SECRET_KEY!,
// })

// export async function POST(request:NextRequest) {
//     try {
//         const order =  await razorpay.orders.create({
//             amount: 100 * 100,
//             currency:"INR",
//             receipt:'receipt_' + Math.random().toString(36).substring(7),
//         })
//         return NextResponse.json({orderId:order.id},{status:200})

//     } catch(error){
//         console.log('Error creating order', error)
//         return NextResponse.json({error: "Error creating order"}, {status:500})
//     }
    
// }



// payment
// import Script from 'next/script'


// declare global {
//   interface Window {
//     Razorpay: any;
//   }
// }
// const AMOUNT =100;
// const [isProcessing, setIsProcessing] = useState(false)
// const handlePaymet = async () => {
//   setIsProcessing(true)
   
//   try{
//     //crate order
//     const response = await fetch('/api/create-order', {method:"POST"})
//     const data = await response.json();
//     //initialize razorpay

//     const options = {
//       key:process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
//       amount: AMOUNT * 100,
//       currency:"INR",
//       name:"test school",
//       description:"school fees",
//       order_id:data.orderId,
//       handler:function(response: any){
//         console.log("Payment Successfull")

//       },
//       prefill:{
//         name:"test name",
//         email:"test@gmail.com",
//         phone:"99999999"
//       },
//       theme: {
//         color:"#3399cc"
//       },
//     }
//     const rzpl = new window.Razorpay(options)
//     rzpl.open()
//   }catch(error) {
//     console.error("Payment Fails", error)

//   }finally{
//     setIsProcessing(false)
//   }
// }