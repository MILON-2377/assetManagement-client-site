import { useEffect } from "react";
import useAuthProvider from "../../Hooks/AuthProviderHooks/useAuthProvider";
import useUserDataLoadingApi from "../../Hooks/UsersDataLoadApi/useUserDataLoadingApi";
import Banner from "./Banner/Banner";
import AllPendingAssetRequest from "./Components/AllPendingAssetRequest";

const Home = () => {
  const { user } = useAuthProvider();
  const [userData, refetch] = useUserDataLoadingApi();

  const { Manager } = userData;

  useEffect(() => {
    refetch();
  }, [user]);

  return (
    <div>
      {/* banner section */}
      <Banner></Banner>

      <section>
        {user && Manager ? (
          <>
            <AllPendingAssetRequest></AllPendingAssetRequest>
          </>
        ) : user ? (
          <></>
        ) : (
          <>
            <div>
              {/* about sections */}
              <section className="font-Poppins">
                <div className=" hero shadow-2xl px-5 to-base-200 w-[80%] mx-auto mt-16 rounded-lg flex items-center gap-5 lg:h-[400px]">
                  <div className="">
                    <h1 className="text-5xl font-bold">About Us!</h1>
                    <p className="py-6">
                      At XYZ, our mission is to provide businesses with a
                      powerful and intuitive tool that streamlines asset
                      management processes, enhances productivity, and reduces
                      administrative overhead. We aim to deliver a seamless
                      experience that helps companies keep track of their
                      valuable resources and ensure they are being used
                      effectively and responsibly.
                    </p>
                  </div>
                  <div className="card shrink-0 w-full max-w-sm shadow-2xl p-4 grid gap-2 border-yellow-100 bg-base-200"></div>
                </div>

                {/* about section what we offers */}
                <section className="text-black">
                  <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                    <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                      <div>
                        <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-black">
                          What We Offer
                        </h3>
                        <p className="mt-3 text-lg ">
                          Our Asset Management System is a comprehensive
                          platform that offers a range of features tailored to
                          meet the needs of businesses of all sizes. Here’s what
                          you can expect
                        </p>
                        <div className="mt-12 space-y-12">
                          <div className="flex">
                            <div className="flex-shrink-0">
                              <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-400 text-gray-900">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  className="w-7 h-7"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 13l4 4L19 7"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                            <div className="ml-4">
                              <h4 className="text-lg font-medium leading-6 text-black">
                                User-Friendly Interface
                              </h4>
                              <p className="mt-2 text-black">
                                Our intuitive interface makes it easy for HR
                                Managers and other users to navigate and manage
                                assets without extensive training.
                              </p>
                            </div>
                          </div>
                          <div className="flex">
                            <div className="flex-shrink-0">
                              <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-400 text-gray-900">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  className="w-7 h-7"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 13l4 4L19 7"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                            <div className="ml-4">
                              <h4 className="text-lg font-medium leading-6 text-black">
                                Asset Tracking
                              </h4>
                              <p className="mt-2 text-black">
                                Easily track and manage both returnable and
                                non-returnable assets. Know exactly where each
                                item is, who is using it, and when it is due for
                                return or replacement.
                              </p>
                            </div>
                          </div>
                          <div className="flex">
                            <div className="flex-shrink-0">
                              <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-400 text-gray-900">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  className="w-7 h-7"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 13l4 4L19 7"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                            <div className="ml-4">
                              <h4 className="text-lg font-medium leading-6 text-black">
                                Detailed Reporting
                              </h4>
                              <p className="mt-2 text-black">
                                Generate comprehensive reports to analyze asset
                                usage patterns, identify potential issues, and
                                make informed decisions.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="mt-12 space-y-12">
                          <div className="flex">
                            <div className="flex-shrink-0">
                              <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-400 text-gray-900">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  className="w-7 h-7"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 13l4 4L19 7"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                            <div className="ml-4">
                              <h4 className="text-lg font-medium leading-6 text-black">
                                User-Friendly Interface
                              </h4>
                              <p className="mt-2 text-black">
                                Our intuitive interface makes it easy for HR
                                Managers and other users to navigate and manage
                                assets without extensive training.
                              </p>
                            </div>
                          </div>
                          <div className="flex">
                            <div className="flex-shrink-0">
                              <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-400 text-gray-900">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  className="w-7 h-7"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 13l4 4L19 7"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                            <div className="ml-4">
                              <h4 className="text-lg font-medium leading-6 text-black">
                                Real-Time Updates
                              </h4>
                              <p className="mt-2 text-black">
                                Get real-time updates on asset status and
                                availability, ensuring that your inventory is
                                always up-to-date.
                              </p>
                            </div>
                          </div>
                          <div className="flex">
                            <div className="flex-shrink-0">
                              <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-400 text-gray-900">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  className="w-7 h-7"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 13l4 4L19 7"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                            <div className="ml-4">
                              <h4 className="text-lg font-medium leading-6 text-black">
                                Detailed Reporting
                              </h4>
                              <p className="mt-2 text-black">
                                Generate comprehensive reports to analyze asset
                                usage patterns, identify potential issues, and
                                make informed decisions.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div aria-hidden="true" className="mt-10 lg:mt-0">
                        <img
                          src="https://source.unsplash.com/random/360x480"
                          alt=""
                          className="mx-auto rounded-lg shadow-lg bg-gray-500"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                        <div className="lg:col-start-2">
                          <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-black">
                            Customizable Alerts
                          </h3>
                          <p className="mt-3 text-lg text-black">
                            Set up alerts and notifications for asset check-ins,
                            check-outs, and maintenance schedules to keep
                            everything running smoothly.
                          </p>
                          <div className="mt-12 space-y-12">
                            <div className="flex">
                              <div className="flex-shrink-0">
                                <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-400 text-gray-900">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="w-7 h-7"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M5 13l4 4L19 7"
                                    ></path>
                                  </svg>
                                </div>
                              </div>
                              <div className="ml-4">
                                <h4 className="text-lg font-medium leading-6 text-black">
                                  Secure and Reliable
                                </h4>
                                <p className="mt-2 text-black">
                                  We prioritize the security of your data with
                                  robust measures to protect sensitive
                                  information and ensure reliable performance.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                          <img
                            src="https://source.unsplash.com/random/361x481"
                            alt=""
                            className="mx-auto rounded-lg shadow-lg bg-gray-500"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </section>

              {/* packages sections */}
              <section className="my-12 w-[90%] mx-auto ">
                <h2 className="text-3xl font-bold text-center mb-8">
                  Our Packages
                </h2>
                <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {/* Basic Package Card */}
                  <div className="border rounded-lg shadow-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">
                      Basic Package
                    </h3>
                    <p className="text-gray-700 mb-2">Maximum 5 employees</p>
                    <p className="text-gray-800 font-bold mb-4">$5/month</p>
                    <ul className="list-disc list-inside mb-4">
                      <li className="text-gray-600">
                        Asset tracking for up to 5 employees
                      </li>
                      <li className="text-gray-600">Basic reporting</li>
                      <li className="text-gray-600">Email support</li>
                    </ul>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded">
                      Choose Plan
                    </button>
                  </div>
                  {/* Standard Package Card */}
                  <div className="border rounded-lg shadow-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">
                      Standard Package
                    </h3>
                    <p className="text-gray-700 mb-2">Maximum 10 employees</p>
                    <p className="text-gray-800 font-bold mb-4">$8/month</p>
                    <ul className="list-disc list-inside mb-4">
                      <li className="text-gray-600">
                        Asset tracking for up to 10 employees
                      </li>
                      <li className="text-gray-600">Enhanced reporting</li>
                      <li className="text-gray-600">Priority email support</li>
                    </ul>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded">
                      Choose Plan
                    </button>
                  </div>
                  {/* Premium Package Card */}
                  <div className="border rounded-lg shadow-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">
                      Premium Package
                    </h3>
                    <p className="text-gray-700 mb-2">Maximum 20 employees</p>
                    <p className="text-gray-800 font-bold mb-4">$15/month</p>
                    <ul className="list-disc list-inside mb-4">
                      <li className="text-gray-600">
                        Asset tracking for up to 20 employees
                      </li>
                      <li className="text-gray-600">
                        Advanced reporting and analytics
                      </li>
                      <li className="text-gray-600">24/7 customer support</li>
                    </ul>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded">
                      Choose Plan
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default Home;
