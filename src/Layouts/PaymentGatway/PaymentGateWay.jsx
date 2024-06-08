import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";



const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT);

const PaymentGateWay = () => {
    return (
        <div>
            <div>
                <Elements stripe={stripePromise}>
                     <CheckOutForm></CheckOutForm>
                </Elements>
            </div>
        </div>
    );
};

export default PaymentGateWay;