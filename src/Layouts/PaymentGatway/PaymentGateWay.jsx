import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";
import useAuthProvider from "../../Hooks/AuthProviderHooks/useAuthProvider";
import paymentPriceArr from "../../Hooks/PaymentPrice/paymentPrice";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT);

const PaymentGateWay = () => {
  const { user } = useAuthProvider();
  const totalPrice = paymentPriceArr();
  return (
    <div className=" w-[95%] mx-auto mt-5 h-screen ">
      <div className=" h-[400px] lg:w-[50%] mx-auto bg-base-200 p-7 rounded-lg ">
        <div className="mb-5">
          <h2 className="text-2xl font-bold text-center mb-3 ">
            Finalize Your Purchase Securely
          </h2>
          <p>
            {" "}
            <span className="text-xl font-semibold mb-2 ">Name:</span>{" "}
            <span className="text-blue-600 text-[18px] ">
              {user?.displayName}
            </span>{" "}
          </p>
          <p>
            {" "}
            <span className="text-xl font-semibold mb-2 ">Email:</span>{" "}
            <span className="text-blue-600 text-[18px] ">{user?.email}</span>{" "}
          </p>
          <p>
            {" "}
            <span className="text-xl font-semibold mb-2 ">
              Total Amount:
            </span>{" "}
            <span className="text-yellow-600 text-[18px] ">{totalPrice ? totalPrice : 0}</span>{" "}
          </p>
        </div>
        <div className="mt-3">
          <Elements stripe={stripePromise}>
            <CheckOutForm key={1}></CheckOutForm>
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default PaymentGateWay;
