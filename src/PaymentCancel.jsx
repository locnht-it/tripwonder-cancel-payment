import React from "react";

const PaymentCancel = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-red-400 to-red-600 text-center p-6">
      <div className="max-w-sm w-full bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <div className="flex items-center justify-center w-20 h-20 rounded-full bg-red-100 mx-auto mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-gray-800">Payment Canceled!</h2>
        <p className="text-gray-600 mt-3">
          Unfortunately, your payment could not be processed. Please return to
          the app to try again or contact support if the issue persists.
        </p>
      </div>
    </div>
  );
};

export default PaymentCancel;
