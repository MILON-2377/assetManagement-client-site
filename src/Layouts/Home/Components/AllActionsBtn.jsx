import { useState } from "react";

const AllActionsMenuBtn = ({ request }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
          onClick={toggleDropdown}
        >
          Actions
        </button>
      </div>
      {isOpen && (
        <div className="origin-top-right z-20 absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <button
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              role="menuitem"
              onClick={() => console.log("Approve clicked for", request._id)}
            >
              Approve
            </button>
            <button
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              role="menuitem"
              onClick={() => console.log("Deny clicked for", request._id)}
            >
              Deny
            </button>
            <button
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              role="menuitem"
              onClick={() => console.log("Details clicked for", request._id)}
            >
              Details
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllActionsMenuBtn;
