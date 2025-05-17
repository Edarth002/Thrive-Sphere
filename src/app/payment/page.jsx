import React from "react";
import Header from "../components/header";

export const Payment = () => {
  return (
    <div>
      <Header />
      <main className="max-w-6xl mx-auto mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8 px-6">
        {/* Left form */}
        <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">
            Start your free 7 days
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            No Commitments. Cancel anytime
          </p>

          <label className="block mb-2 font-medium">
            SELECT PAYMENT METHOD
          </label>
          <div className="flex items-center border p-3 rounded-md mb-4">
            <img
              src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_111x69.jpg"
              alt="PayPal"
              className="h-6 mr-3"
            />
            <span>PayPal</span>
          </div>

          <div className="flex items-center mb-4">
            <div className="border-t w-full"></div>
            <span className="px-2 text-sm text-gray-400">or</span>
            <div className="border-t w-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Card number"
              className="w-full border p-2 rounded"
            />
            <input
              type="text"
              placeholder="CVC"
              className="w-full border p-2 rounded"
            />
            <input
              type="text"
              placeholder="MM/YY"
              className="w-full border p-2 rounded"
            />
            <select className="w-full border p-2 rounded">
              <option>NIGERIA</option>
            </select>
          </div>

          <div className="mb-4">
            <input
              type="text"
              placeholder="Gift card or discount code"
              className="w-full border p-2 rounded mb-2"
            />
            <button className="text-sm bg-gray-200 px-3 py-1 rounded">
              Apply
            </button>
          </div>

          <select className="w-full border p-2 rounded mb-4">
            <option>How did you first hear about us?</option>
          </select>
        </div>

        {/* Summary section */}
        <aside className="bg-white p-8 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-6">Summary</h3>

          <div className="mb-4">
            <p className="text-sm">Starting Today</p>
            <p className="font-medium">7-day free trial</p>
          </div>

          <div className="mb-4">
            <p className="text-sm">Starting January 31, 2025</p>
            <p className="font-medium">
              US$3.99/month (US$47.88 billed annually)
            </p>
          </div>

          <div className="border-t pt-4 mb-4">
            <p className="text-lg font-semibold">Due Today</p>
            <p className="text-2xl font-bold">$0.00</p>
            <ul className="text-sm text-gray-600 list-disc pl-5 mt-2">
              <li>Cancel anytime</li>
              <li>
                You won’t be charged if you cancel before February 3, 2025.
              </li>
            </ul>
          </div>

          <button className="bg-green-500 text-white w-full py-3 rounded text-lg font-semibold hover:bg-green-600">
            Start Your 7-Days Free Trial
          </button>

          <p className="text-xs text-gray-500 mt-4">
            A recurring annual charge US$47.88 (plus tax where applicable) will
            automatically be applied to your payment method and start on
            February 3, 2025.
            <br />
            <br />
            By clicking ‘Start Your 7-Days Free Trial’ you agree to our{" "}
            <a href="#" className="text-blue-600 underline">
              Terms of Service
            </a>{" "}
            and authorize this recurring charge.
          </p>
        </aside>
      </main>
    </div>
  );
};

export default Payment;
