import { Link } from "react-router-dom";
import { BACKDROP } from "../utils/Constants";

const Error = () => {
  return (
    <div className="min-h-screen relative flex items-center justify-center px-4">
      <div className="absolute inset-0 z-0">
        <img
          src={BACKDROP}
          alt="background"
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      <div className="max-w-md w-full bg-white bg-opacity-90 rounded-lg shadow-2xl overflow-hidden z-10">
        <div className="p-6 sm:p-8">
          <div className="flex justify-center">
            <svg
              className="w-24 h-24 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              ></path>
            </svg>
          </div>
          <h1 className="mt-4 text-3xl font-extrabold text-center text-gray-900 sm:text-4xl">
            404 - Not Found
          </h1>
          <p className="mt-4 text-lg text-center text-gray-600">
            Oops! You've landed on an error page.
          </p>
          <div className="mt-6">
            <Link
              to="/"
              className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              Go back home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
