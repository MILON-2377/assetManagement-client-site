const HomePageCompo = () => {
  return (
    <div>
      {/* about sections */}
      <section className="font-Poppins">
        {/* <div className=" w-full lg:w-[90%] lg:bg-base-200 rounded-lg shadow-2xl lg:p-5 px-5 py-4 text-blue-500 mx-auto mt-20 ">
          <h1 className="text-5xl font-bold">
            About AssetTrackr Asset Management
          </h1>
          <p className="py-6">
            Welcome to XYZ Asset Management, your solution for streamlined asset
            tracking and management. At XYZ, we understand the challenges faced
            by HR managers in keeping track of company assets efficiently. Our
            web application is designed to simplify this process, making it easy
            for businesses of all sizes to manage their assets effectively. With
            XYZ, HR managers can effortlessly track the usage and status of both
            returnable and non-returnable assets, ensuring optimal utilization
            and minimizing loss. Discover how XYZ can empower your business to
            take control of its assets and streamline operations
          </p>
        </div> */}

        {/* about section */}
        <div className="bg-gray-100 py-16 px-8">
          <div className="max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold text-blue-600 mb-6">
                About assetTrackr Asset Management
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Welcome to XYZ Asset Management, your solution for streamlined
                asset tracking and management. At XYZ, we understand the
                challenges faced by HR managers in keeping track of company
                assets efficiently. Our web application is designed to simplify
                this process, making it easy for businesses of all sizes to
                manage their assets effectively. With XYZ, HR managers can
                effortlessly track the usage and status of both returnable and
                non-returnable assets, ensuring optimal utilization and
                minimizing loss. Discover how XYZ can empower your business to
                take control of its assets and streamline operations.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="w-[40%] p-4 bg-white shadow-md rounded-lg">
                <div className=" w-full h-[350px] mb-4 ">
                  <img
                    src="https://images.unsplash.com/photo-1532103054090-3491f1a05d0d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Returnable Assets"
                    className="mx-auto w-full h-full object-cover "
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Returnable Assets
                </h3>
                <p className="text-gray-600">
                  Manage returnable assets like laptops, keyboards, chairs, and
                  more.
                </p>
              </div>
              <div className="w-[40%] p-4 bg-white shadow-md rounded-lg">
                <div className=" w-full h-[350px] mb-4 ">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1681488450591-9f09bfe97ac7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Non-Returnable Assets"
                    className="mx-auto w-full h-full object-cover mb-4"
                  />
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Non-Returnable Assets
                </h3>
                <p className="text-gray-600">
                  Track non-returnable assets like pens, paper, diaries, and
                  more.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* about section what we offers */}
        {/* <section className="text-black">
          <div className="container max-w-xl py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
            <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-black">
                  What We Offer
                </h3>
                <p className="mt-3 text-lg ">
                  Our Asset Management System is a comprehensive platform that
                  offers a range of features tailored to meet the needs of
                  businesses of all sizes. Here’s what you can expect
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
                        Our intuitive interface makes it easy for HR Managers
                        and other users to navigate and manage assets without
                        extensive training.
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
                        non-returnable assets. Know exactly where each item is,
                        who is using it, and when it is due for return or
                        replacement.
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
                        Generate comprehensive reports to analyze asset usage
                        patterns, identify potential issues, and make informed
                        decisions.
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
                        Our intuitive interface makes it easy for HR Managers
                        and other users to navigate and manage assets without
                        extensive training.
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
                        Get real-time updates on asset status and availability,
                        ensuring that your inventory is always up-to-date.
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
                        Generate comprehensive reports to analyze asset usage
                        patterns, identify potential issues, and make informed
                        decisions.
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
                    check-outs, and maintenance schedules to keep everything
                    running smoothly.
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
                          We prioritize the security of your data with robust
                          measures to protect sensitive information and ensure
                          reliable performance.
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
        </section> */}
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
              <button className="mt-4 w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500">
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
              <button className="mt-4 w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500">
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
              <button className="mt-4 w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500">
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
    </div>
  );
};

export default HomePageCompo;
