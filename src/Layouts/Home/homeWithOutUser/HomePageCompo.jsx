import { useState } from "react";
import { FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { FaSquareFacebook, FaSquareInstagram } from "react-icons/fa6";
import paymentPriceArr from "../../../Hooks/PaymentPrice/paymentPrice";
import { useNavigate } from "react-router-dom";

const HomePageCompo = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    e.target.reset();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    e.target.reset();
  };

  //   handle subscribtion section
  const handleSubscribtion = (price) => {
    paymentPriceArr(price);
    navigate("/joinAnHRManager");
  };

  return (
    <div>
      {/* about sections */}
      <section className="font-Poppins">
        {/* about section */}
        <div className="bg-gray-100 py-16 px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-blue-600 mb-4">
                About assetTrackr Asset Management
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Welcome to assetTrackr Asset Management, your solution for
                streamlined asset tracking and management. At assetTrackr, we
                understand the challenges faced by HR managers in keeping track
                of company assets efficiently. Our web application is designed
                to simplify this process, making it easy for businesses of all
                sizes to manage their assets effectively. With assetTrackr, HR
                managers can effortlessly track the usage and status of both
                returnable and non-returnable assets, ensuring optimal
                utilization and minimizing loss. Discover how assetTrackr can
                empower your business to take control of its assets and
                streamline operations.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-center items-center">
                <img
                  src="https://images.unsplash.com/photo-1532103054090-3491f1a05d0d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Returnable Assets"
                  className="w-48 h-48 object-cover rounded-full mb-6"
                />
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  Returnable Assets
                </h3>
                <p className="text-gray-600 text-center">
                  Manage returnable assets like laptops, keyboards, chairs, and
                  more.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-center items-center">
                <img
                  src="https://plus.unsplash.com/premium_photo-1681488450591-9f09bfe97ac7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Non-Returnable Assets"
                  className="w-48 h-48 object-cover rounded-full mb-6"
                />
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  Non-Returnable Assets
                </h3>
                <p className="text-gray-600 text-center">
                  Track non-returnable assets like pens, paper, diaries, and
                  more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* features section */}
      <section>
        <div className="bg-white py-16 px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-600 mb-10">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-100 shadow-md rounded-lg">
                <img
                  src="https://img.freepik.com/free-vector/post-service-tracking-abstract-concept-illustration_335657-3945.jpg?w=740&t=st=1718163757~exp=1718164357~hmac=4a6f7473d3b4e2d9c2ca32abba754fc1f821017d49c7059b64d188d0a2a93c41"
                  alt="Feature 1"
                  className="mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Asset Tracking
                </h3>
                <p className="text-gray-600">
                  Easily track the usage and status of all company assets in
                  real-time.
                </p>
              </div>
              <div className="p-6 bg-gray-100 shadow-md rounded-lg">
                <img
                  src="https://img.freepik.com/free-vector/usability-testing-concept-illustration_114360-1878.jpg?t=st=1718163876~exp=1718167476~hmac=33cd917a41ff5ae7f593117feb9244b90186624de348979d03571f6f95ebdbb7&w=740"
                  alt="Feature 2"
                  className="mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  User Management
                </h3>
                <p className="text-gray-600">
                  Manage user roles and permissions with ease to ensure secure
                  access.
                </p>
              </div>
              <div className="p-6 bg-gray-100 shadow-md rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1599658880436-c61792e70672?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Feature 3"
                  className="mx-auto w-full h-[310px] object-cover mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Detailed Reporting
                </h3>
                <p className="text-gray-600">
                  Generate detailed reports on asset usage, maintenance, and
                  more.
                </p>
              </div>
              <div className="p-6 bg-gray-100 shadow-md rounded-lg">
                <div className="w-full h-[310px] mb-4 ">
                  <img
                    src="https://i0.wp.com/www.globaltrademag.com/wp-content/uploads/2022/04/shutterstock_585073000-scaled.jpg?fit=2560%2C1706&ssl=1"
                    alt="Feature 4"
                    className="mx-auto w-full h-full object-cover "
                  />
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Inventory Management
                </h3>
                <p className="text-gray-600">
                  Keep track of inventory levels and get notified when stocks
                  are low.
                </p>
              </div>
              <div className="p-6 bg-gray-100 shadow-md rounded-lg">
                <div className="w-full h-[310px] mb-4 ">
                  <img
                    src="https://www.fieldinsight.com/wp-content/uploads/2022/04/114-Equipment-Maintenance-Scheduling-Guide.png"
                    alt="Feature 5"
                    className="mx-auto w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Maintenance Scheduling
                </h3>
                <p className="text-gray-600">
                  Schedule and track maintenance tasks to ensure asset
                  longevity.
                </p>
              </div>
              <div className="p-6 bg-gray-100 shadow-md rounded-lg">
                <div className="w-full h-[310px] mb-4 ">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS85BR19t0WcTb_SYLrk_lzWB1ILrpeUsIXoA&s"
                    alt="Feature 5"
                    className="mx-auto w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Alerts & Notifications
                </h3>
                <p className="text-gray-600">
                  Receive alerts and notifications for important updates and
                  tasks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* subscribtions section */}
      <div className="bg-blue-50 py-16 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-700 mb-12">Our Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-blue-400">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Basic
              </h3>
              <p className="text-gray-600 mb-4">Up to 5 employees</p>
              <div className="flex justify-center mb-6">
                <span className="text-3xl font-bold text-blue-700">$5</span>
                <span className="text-lg text-gray-600">/month</span>
              </div>
              <ul className="text-left mb-6">
                <li className="text-gray-700 mb-2">✓ Asset tracking</li>
                <li className="text-gray-700 mb-2">✓ User management</li>
                <li className="text-gray-700">✓ Basic reports</li>
              </ul>
              <button onClick={() => handleSubscribtion(5)} className="mt-4 w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500">
                Choose Plan
              </button>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-blue-600">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Standard
              </h3>
              <p className="text-gray-600 mb-4">Up to 10 employees</p>
              <div className="flex justify-center mb-6">
                <span className="text-3xl font-bold text-blue-700">$8</span>
                <span className="text-lg text-gray-600">/month</span>
              </div>
              <ul className="text-left mb-6">
                <li className="text-gray-700 mb-2">✓ Asset tracking</li>
                <li className="text-gray-700 mb-2">✓ User management</li>
                <li className="text-gray-700 mb-2">✓ Detailed reports</li>
                <li className="text-gray-700">✓ Inventory management</li>
              </ul>
              <button onClick={() => handleSubscribtion(10)} className="mt-4 w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500">
                Choose Plan
              </button>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-blue-800">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Premium
              </h3>
              <p className="text-gray-600 mb-4">Up to 20 employees</p>
              <div className="flex justify-center mb-6">
                <span className="text-3xl font-bold text-blue-700">$15</span>
                <span className="text-lg text-gray-600">/month</span>
              </div>
              <ul className="text-left mb-6">
                <li className="text-gray-700 mb-2">✓ Asset tracking</li>
                <li className="text-gray-700 mb-2">✓ User management</li>
                <li className="text-gray-700 mb-2">✓ Detailed reports</li>
                <li className="text-gray-700 mb-2">✓ Inventory management</li>
                <li className="text-gray-700">✓ Priority support</li>
              </ul>
              <button onClick={() => handleSubscribtion(15)} className="mt-4 w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500">
                Choose Plan
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* testimonial section */}
      <div className="bg-gray-50 py-20 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-16">
            What Our Clients Say
          </h2>
          <div className="flex flex-wrap justify-center gap-12">
            <div className="max-w-xs bg-white p-8 rounded-lg shadow-xl transform transition duration-500 hover:scale-105">
              <div className="flex items-center mb-6">
                <img
                  src="/images/client1.jpg"
                  alt="Client 1"
                  className="w-14 h-14 rounded-full mr-4"
                />
                <div className="text-left">
                  <p className="text-xl font-semibold text-gray-900">
                    John Doe
                  </p>
                  <p className="text-sm text-gray-500">HR Manager, ABC Corp</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                XYZ Asset Management has revolutionized the way we track and
                manage our company assets. The detailed reporting and
                easy-to-use interface have saved us countless hours.
              </p>
            </div>
            <div className="max-w-xs bg-white p-8 rounded-lg shadow-xl transform transition duration-500 hover:scale-105">
              <div className="flex items-center mb-6">
                <img
                  src="/images/client2.jpg"
                  alt="Client 2"
                  className="w-14 h-14 rounded-full mr-4"
                />
                <div className="text-left">
                  <p className="text-xl font-semibold text-gray-900">
                    Jane Smith
                  </p>
                  <p className="text-sm text-gray-500">
                    Operations Manager, XYZ Ltd
                  </p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                The user management and inventory features are top-notch. Our
                team can now focus on more strategic tasks instead of worrying
                about asset tracking.
              </p>
            </div>
            <div className="max-w-xs bg-white p-8 rounded-lg shadow-xl transform transition duration-500 hover:scale-105">
              <div className="flex items-center mb-6">
                <img
                  src="/images/client3.jpg"
                  alt="Client 3"
                  className="w-14 h-14 rounded-full mr-4"
                />
                <div className="text-left">
                  <p className="text-xl font-semibold text-gray-900">
                    Michael Brown
                  </p>
                  <p className="text-sm text-gray-500">CTO, Tech Solutions</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                The best asset management software we have ever used. The
                maintenance scheduling feature ensures that our equipment is
                always in top condition.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* contack us section */}
      <div className="bg-white py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">
            Get in Touch
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-1 text-left text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-left mb-1 text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-left mb-1 text-gray-700"
              >
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-left mb-1 text-gray-700"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                rows="5"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full p-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* footer section */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">Contact Us</h4>
              <p>123 Street Name</p>
              <p>City, State, ZIP</p>
              <p>info@example.com</p>
              <p>(123) 456-7890</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white">
                  <FaSquareFacebook className="text-3xl text-blue-500 "></FaSquareFacebook>
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <FaTwitterSquare className="text-3xl text-green-500 "></FaTwitterSquare>
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <FaSquareInstagram className="text-3xl"></FaSquareInstagram>
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <FaLinkedin className="text-3xl"></FaLinkedin>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Quick Links</h4>
              <ul>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr className="border-gray-700 my-8" />
          <p className="text-center text-gray-400">
            &copy; 2024 assetTrackr. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePageCompo;
