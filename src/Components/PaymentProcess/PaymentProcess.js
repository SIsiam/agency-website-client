// import React from 'react';
// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
// import { CardElement } from '@stripe/react-stripe-js';
// import SimpleForm from './SimpleForm.js';
// const stripePromise = loadStripe('pk_test_51Ie7BGIOPSpFkbvWjGNmipKMVZ3YZbgmbWRUUa6AeAHvHT7fjNY5Zc4mTRcK0rM5bFLDcql5HnEMd01oresLntr800nPOQq6ir');


// const PaymentProcess = ({ handlePayment }) => {
//     return (
//         <Elements stripe={stripePromise}>
//             {/* <MyCheckoutForm /> */}
//             {/* <CardElement
//                 options={{
//                     style: {
//                         base: {
//                             fontSize: '16px',
//                             color: '#424770',
//                             '::placeholder': {
//                                 color: '#aab7c4',
//                             },
//                         },
//                         invalid: {
//                             color: '#9e2146',
//                         },
//                     },
//                 }}
//             /> */}
//             <SimpleForm handlePayment={handlePayment}></SimpleForm>

//         </Elements>
//     );
// };

// export default PaymentProcess;

import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
// import { CardElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleForm from './SimpleForm.js';

const stripePromise = loadStripe('pk_test_51Ie7BGIOPSpFkbvWjGNmipKMVZ3YZbgmbWRUUa6AeAHvHT7fjNY5Zc4mTRcK0rM5bFLDcql5HnEMd01oresLntr800nPOQq6ir');


const PaymentProcess = ({ handlePayment }) => {
    return (
        <div>
            <Elements stripe={stripePromise}>
                <SimpleForm handlePayment={handlePayment} />
            </Elements>
        </div>
    );
};

export default PaymentProcess;