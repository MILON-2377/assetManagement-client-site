import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/AxiousSecureApi/useAxiosSecure";
import useAuthProvider from "../../Hooks/AuthProviderHooks/useAuthProvider";
import Swal from "sweetalert2";
import paymentPriceArr from "../../Hooks/PaymentPrice/paymentPrice";
import { useNavigate } from "react-router-dom";
import makeUsersEmployee from "../../Hooks/UsersDataLoadApi/makeUsersEmployee";
import useMakeUsersToEmployee from "../../Hooks/UsersDataLoadApi/useMakeUsersToEmployee";

const CheckOutForm = () => {
  const { user } = useAuthProvider();
  const [error, setError] = useState();
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSEcure = useAxiosSecure();
  const navigate = useNavigate();
  const makeHRmanagerPayment = useMakeUsersToEmployee();

  // const [card] = useCard

  const price = paymentPriceArr();

  const userPaymentUpdate = {
    email: user?.email,
  };

  if(price === 5){
    userPaymentUpdate.limit = 5
  }else if(price === 8){
    userPaymentUpdate.limit = 10
  }else if(price === 20){
    userPaymentUpdate.limit = 20
  }

  useEffect(() => {
    axiosSEcure.post("/createIntend", { price }).then((res) => {
      // console.log(res.data.clientSecret)
      setClientSecret(res.data.clientSecret);
    });
  }, [axiosSEcure, price]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (!card) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("payemnt eroor ", error);
      setError(error.message);
    } else {
      console.log("paymentMethod", paymentMethod);

      
      // payment update
      makeUsersEmployee(userPaymentUpdate);

      makeHRmanagerPayment()
        .then(() => {
          navigate("/");
          Swal.fire({
            title: `Hello ${user?.displayName}!`,
            text: "Welcome to our asset managemanet webiste!",
            icon: "success",
          });
        })
        .catch((error) => {
          console.log(error);
        });

      setError("");
    }

    const { error: confirmError, paymentIntent } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user.email,
            name: user?.displayName || "anonymouse",
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
      setError(confirmError);
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        alert("Payment sucessfull");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        type="submit"
        disabled={!stripe || !clientSecret}
        className="btn bg-black text-white mt-5 w-full my-4"
      >
        Pay
      </button>
      <div>
        <p className="text-xl text-red-500 font-Poppins ">{error}</p>
      </div>
    </form>
  );
};

export default CheckOutForm;
