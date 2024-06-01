import { IoIosSearch } from "react-icons/io";

const RequestForAnAssets = () => {
  return (
    <div>
      {/* assets search and filter sections 
        TODO: Search and filter items functinality should apply on the server side
        */}
      <div className=" w-full flex items-center justify-evenly">
        {/* search section */}
        <fieldset className="w-full space-y-1 text-gray-100">
          <label htmlFor="Search" className="hidden">
            Search
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <button
                type="button"
                title="search"
                className="p-1 focus:outline-none focus:ring"
              >
                <IoIosSearch className="text-black text-xl"></IoIosSearch>
              </button>
            </span>
            <input
              type="search"
              name="Search"
              placeholder="Search..."
              className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none bg-base-200 text-blue-950 "
            />
          </div>
        </fieldset>

        {/* assets filter section */}
        <select className="select select-primary w-full max-w-xs">
          <option disabled selected>
            What is the best TV show?
          </option>
          <option>Available</option>
          <option>Returnable</option>
          <option>Non returnable</option>
        </select>
      </div>

      {/* assets list section */}
      <section className="grid font-Poppins grid-cols-2 lg:grid-cols-4 ">
        <div className=" h-[400px] bg-base-200 px-4 py-4 flex flex-col justify-between ">
          <div className="w-full h-[220px] ">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7jx6fU9iGklbYaBhq3Ew9FkSAJDTB85-UUA&s"
              className="w-full h-full object-cover "
            />
          </div>
          <div className="flex flex-col gap-2 ">
            <h2 className="card-title">
              Asset Name
              <div className="badge badge-secondary">Available or not</div>
            </h2>
            <div className="card-actions flex items-center justify-between ">
              <div className=" bg-base-100 px-3 py-2">Returnable</div>
            </div>
          </div>
          <button className=" bg-black hover:bg-black hover:bg-opacity-70 text-white px-4 py-3 w-full  ">
            Request for Asset
          </button>
        </div>
      </section>
    </div>
  );
};

export default RequestForAnAssets;
