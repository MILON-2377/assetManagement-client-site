import { useNavigate } from "react-router-dom";
import paymentPriceArr from "../../../Hooks/PaymentPrice/paymentPrice";

const PackagesPage = () => {

    const navigate = useNavigate();

    const handlePayment = (price) => {
        // console.log(price);
        paymentPriceArr(price);
        navigate("/payment");
    }

  return (
    <div className="grid grid-cols-2 mt-12 lg:grid-cols-3 gap-5 px-5 w-[95%] mx-auto font-Poppins ">
      <div className="card w-full bg-slate-700 text-primary-content">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold  ">Basic Package</h2>
          <h2 className="card-title">Maximum 5 Employees</h2>
          <h2 className="card-title">$5 per month</h2>
          <ul className="px-3 list-item bg-slate-50 text-black py-3 rounded-md ">
            <li>Affordable option for small teams</li>
            <li>Essential features included</li>
            <li>Easy upgrade available</li>
          </ul>

          <div className="card-actions justify-end">
            <button onClick= {() => handlePayment(5)} className="btn">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="card w-full bg-slate-700 text-primary-content">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold  ">Standard Package</h2>
          <h2 className="card-title">Maximum 10 Employees</h2>
          <h2 className="card-title">$8 per month</h2>
          <ul className="px-3 list-item bg-slate-50 text-black py-3 rounded-md ">
            <li>eal for growing teams</li>
            <li>Includes advanced features</li>
            <li>Enhanced support</li>
          </ul>

          <div className="card-actions justify-end">
            <button onClick= {() => handlePayment(8)} className="btn">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="card w-full bg-slate-700 text-primary-content">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold  ">Premium Package</h2>
          <h2 className="card-title">Maximum 20 Employees</h2>
          <h2 className="card-title">$15 per month</h2>
          <ul className="px-3 list-item bg-slate-50 text-black py-3 rounded-md ">
            <li>Best value for larger teams</li>
            <li>All features unlocked</li>
            <li>Priority support</li>
          </ul>

          <div className="card-actions justify-end">
            <button onClick= {() => handlePayment(20)} className="btn">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackagesPage;
