// import React, { Fragment, useEffect, useRef } from "react";
// import CheckoutSteps from "../Cart/CheckoutSteps";
// import { useSelector, useDispatch } from "react-redux";
// import MetaData from "../layout/MetaData";
// import { Typography } from "@mui/material";
// import { useAlert } from "react-alert";
// // import {
// //   CardNumberElement,
// //   CardCvcElement,
// //   CardExpiryElement,
// //   useStripe,
// //   useElements,
// // } from "@stripe/react-stripe-js";

// import axios from "axios";
// import "./payment.css";
// import CreditCardIcon from "@mui/icons-material/CreditCard";
// import EventIcon from "@mui/icons-material/Event";
// import VpnKeyIcon from "@mui/icons-material/VpnKey";
// import { useNavigate } from "react-router-dom";
// import { createOrder, clearErrors } from "../../actions/orderAction";

// const Payment = () => {
//     const navigate = useNavigate
//   const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));

//   const dispatch = useDispatch();
//   const alert = useAlert();
// //   const stripe = useStripe();
// //   const elements = useElements();
//   const payBtn = useRef(null);

//   const { shippingInfo, cartItems } = useSelector((state) => state.cart);
//   const { user } = useSelector((state) => state.user);
//   const { error } = useSelector((state) => state.newOrder);

//   const paymentData = {
//     amount: Math.round(orderInfo.totalPrice * 100),
//   };

//   const order = {
//     shippingInfo,
//     orderItems: cartItems,
//     itemsPrice: orderInfo.subtotal,
//     taxPrice: orderInfo.tax,
//     shippingPrice: orderInfo.shippingCharges,
//     totalPrice: orderInfo.totalPrice,
//   };
// //   const orderInfo = JSON.parse(sessionStorage.getItem('orderInfo'));
// //   if (orderInfo) {
// //       order.itemsPrice = orderInfo.itemsPrice
// //       order.shippingPrice = orderInfo.shippingPrice
// //       order.taxPrice = orderInfo.taxPrice
// //       order.totalPrice = orderInfo.totalPrice
// //   }

//   const submitHandler = async (e) => {
//     e.preventDefault();

//     payBtn.current.disabled = true;
//     let res;

//     try {
//     //   const config = {
//     //     headers: {
//     //       "Content-Type": "application/json",
//     //     },
//     //   };
//     //   const { data } = await axios.post(
//     //     "/api/v1/payment/process",
//     //     paymentData,
//     //     config
//     //   );

//     //   const client_secret = data.client_secret;

//     //   if (!stripe || !elements) return;

//     //   const result = await stripe.confirmCardPayment(client_secret, {
//     //     payment_method: {
//     //       card: elements.getElement(CardNumberElement),
//     //       billing_details: {
//     //         name: user.name,
//     //         email: user.email,
//     //         address: {
//     //           line1: shippingInfo.address,
//     //           city: shippingInfo.city,
//     //           postal_code: shippingInfo.zipCode,
//     //           country: shippingInfo.country,
//     //         },
//     //       },
//     //     },
//     //   });

//     //   if (result.error) {
//     //     console.log("Error")
//         // payBtn.current.disabled = false;

//         // alert.error(result.error.message);
//     //   } else {
//     //     if (result.paymentIntent.status === "succeeded") {
//     //       order.paymentInfo = {
//     //         id: result.paymentIntent.id,
//     //         status: result.paymentIntent.status,
//     //       };
//         const result={};
//           dispatch(createOrder(order));

//           navigate("/success");
//         // } else {
//         //   alert.error("There's some issue while processing payment ");
//         // }
//     //   }
//     } catch (error) {
//       payBtn.current.disabled = false;
//       alert.error(error.response.data.message);
//     }
//   };

//   useEffect(() => {
//     if (error) {
//       alert.error(error);
//       dispatch(clearErrors());
//     }
//   }, [dispatch, error, alert]);

//   return (
//     <Fragment>
//       <MetaData title="Payment" />
//       <CheckoutSteps activeStep={2} />
//       <div className="paymentContainer">
//         <form className="paymentForm" onSubmit={(e) => submitHandler(e)}>
//           <Typography>Card Info</Typography>
//           <div>
//             <CreditCardIcon />
//             {/* <CardNumberElement className="paymentInput" /> */}
//           </div>
//           <div>
//             <EventIcon />
//             {/* <CardExpiryElement className="paymentInput" /> */}
//           </div>
//           <div>
//             <VpnKeyIcon />
//             {/* <CardCvcElement className="paymentInput" /> */}
//           </div>

//           <input
//             type="submit"
//             value={`Pay - ৳${orderInfo && orderInfo.totalPrice}`}
//             ref={payBtn}
//             className="paymentFormBtn"
//           />
//         </form>
//       </div>
//     </Fragment>
//   );
// };

// export default Payment;

import React, { Fragment, useEffect } from 'react'

import MetaData from '../layout/MetaData'
import CheckoutSteps from './CheckoutSteps'

import { useAlert } from 'react-alert'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
// import cartItems
import { createOrder, clearErrors } from '../../actions/orderAction'

// import { useStripe, useElements, CardNumberElement, CardExpiryElement, CardCvcElement } from '@stripe/react-stripe-js'

import axios from 'axios'


const Payment = () => {

    const navigate = useNavigate();
    // const { user } = useSelector(state => state.auth)

    const alert = useAlert();
    const { error } = useSelector(state => state.newOrder)
    const { cartItems, shippingInfo } = useSelector(state => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {

        if (error) {
            alert.error(error)
            dispatch(clearErrors())
        }

    }, [dispatch, alert, error])

    const order = {
        orderItems: cartItems,
        shippingInfo
    }

    const orderInfo = JSON.parse(sessionStorage.getItem('orderInfo'));
    if (orderInfo) {
        order.itemsPrice = orderInfo.itemsPrice
        order.shippingPrice = orderInfo.shippingPrice
        order.taxPrice = orderInfo.taxPrice
        order.totalPrice = orderInfo.totalPrice
    }

    const paymentData = {
        amount: Math.round(orderInfo.totalPrice * 100)
    }


    const submitHandler = async (e) => {
        e.preventDefault();

        document.querySelector('#pay_btn').disabled = true;

        let res;
        try {

            // const config = {
            //     headers: {
            //         'Content-Type': 'application/json'
            //     }
            // }

            // res = await axios.post('/api/v1/payment/process', paymentData, config)

            // const clientSecret = res.data.client_secret;

            // console.log(clientSecret);

            // if (!stripe || !elements) {
            //     return;
            // }

            const result = {
                // payment_method: {
                //     // card: elements.getElement(CardNumberElement),
                //     billing_details: {
                //         name: user.name,
                //         email: user.email
                //     }
                // }
            };

            // if (result.error) {
            //     alert.error(result.error.message);
            //     document.querySelector('#pay_btn').disabled = false;
            // } else {

            // The payment is processed or not
            // if (result.paymentIntent.status === 'succeeded') {

            //     order.paymentInfo = {
            //         id: result.paymentIntent.id,
            //         status: result.paymentIntent.status
            //     }

            //     dispatch(createOrder(order))

            //     navigate('/success')
            // } else {
            //     alert.error('There is some issue while payment processing')
            // }

            dispatch(createOrder(order))

            navigate('/success')

        }
        catch (error) {
            document.querySelector('#pay_btn').disabled = false;
            alert.error(error.response.data.message)
        }
    }

    return (
        <Fragment>
            <MetaData title={'Payment'} />

            <CheckoutSteps activeStep={2} />

            <div className="row wrapper">
                <div className="col-10 col-lg-5">
                    <form className="shadow-lg" onSubmit={submitHandler}>
                        {/* <h1 className="mb-4">Card Info</h1>
                        <div className="form-group">
                            <label htmlFor="card_num_field">Card Number</label>
                            <CardNumberElement
                                type="text"
                                id="card_num_field"
                                className="form-control"
                                options={options}
                            />
                        </div> */}

                        {/* <div className="form-group">
                            <label htmlFor="card_exp_field">Card Expiry</label>
                            <CardExpiryElement
                                type="text"
                                id="card_exp_field"
                                className="form-control"
                                options={options}
                            />
                        </div> */}

                        {/* <div className="form-group">
                            <label htmlFor="card_cvc_field">Card CVC</label>
                            <CardCvcElement
                                type="text"
                                id="card_cvc_field"
                                className="form-control"
                                options={options}
                            />
                        </div> */}


                        <button
                            id="pay_btn"
                            type="submit"
                            className="btn btn-block py-3"
                        >
                            Pay {` - ${orderInfo && orderInfo.totalPrice}`}
                        </button>

                    </form>
                </div>
            </div>

        </Fragment>
    )
}

export default Payment