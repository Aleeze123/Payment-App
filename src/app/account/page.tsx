"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { initFirebase } from "@/app/firebase";
import { getAuth } from "firebase/auth";
import { FaSignOutAlt, FaCheckCircle } from 'react-icons/fa';

export default function AccountPage() {
  const app = initFirebase();
  const auth = getAuth(app);
  const userName = auth.currentUser?.displayName;
  const email = auth.currentUser?.email;
  const router = useRouter();
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [selectedCard, setSelectedCard] = useState("Visa");

  const signOut = () => {
    auth.signOut();
    router.push("/");
  };

  const handlePaymentSubmit = (e: any) => {
    e.preventDefault();
    setPaymentSuccess(true);
    setTimeout(() => setPaymentSuccess(false), 3000);
  };

  const handleCardSelection = (e:any) => {
    setSelectedCard(e.target.value);
  };

  const signOutButton = (
    <button onClick={signOut} className="text-purple-500 hover:text-purple-400 text-lg text-center underline hover:no-underline transition-all">
      <div className="flex gap-2 items-center justify-center">
        <FaSignOutAlt /> Sign Out
      </div>
    </button>
  );

  const accountSummary = (
    <div className="text-center mb-8">
      <div className="text-purple-400 mb-1 text-lg">{`Signed in as ${userName}`}</div>
      <div className="text-purple-300 text-xl">{email}</div>
    </div>
  );

  return (
    <div className="flex flex-col gap-8 items-center bg-black text-white min-h-screen p-6 sm:p-10 lg:p-14">
      {accountSummary}

      {/* Payment Success Message */}
      {paymentSuccess && (
        <div className="fixed top-0 left-0 w-full bg-green-500 text-white p-6 rounded-b-lg shadow-xl flex items-center gap-4 justify-center z-50">
          <FaCheckCircle  />
          <span className="text-2xl font-semibold">Payment Successful!</span>
        </div>
      )}
      <form className="w-full max-w-lg p-8 bg-black rounded-lg shadow-2xl space-y-8 border-4 border-white sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-4xl" onSubmit={handlePaymentSubmit}>
        <div className="flex flex-col">
          <label htmlFor="card-type" className="text-lg text-white">Select Card Type</label>
          <select id="card-type" value={selectedCard} onChange={handleCardSelection} className="p-4 border border-gray-300 rounded-md text-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all ease-in-out">
            <option value="Visa">Visa</option>
            <option value="MasterCard">MasterCard</option>
            <option value="Amex">American Express</option>
          </select>
        </div>

        {/* Card Details */}
        <div className="space-y-8">
          <div className="flex flex-col">
            <label htmlFor="card-number" className="text-lg text-white">Card Number</label>
            <input id="card-number" type="text" required inputMode="numeric" className="p-4 border border-gray-300 rounded-md text-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all ease-in-out" placeholder="Enter card number" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="expiration" className="text-lg text-white">Expiration Date</label>
            <input id="expiration" type="text" required inputMode="numeric" className="p-4 border border-gray-300 rounded-md text-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all ease-in-out" placeholder="MM/YY" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="cvv" className="text-lg text-white">CVV</label>
            <input id="cvv" type="text" required inputMode="numeric" className="p-4 border border-gray-300 rounded-md text-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all ease-in-out" placeholder="CVV" />
          </div>
        </div>
        <div className="space-y-8">
          <div className="flex flex-col">
            <label htmlFor="address-line1" className="text-lg text-white">Address Line 1</label>
            <input id="address-line1" type="text" required className="p-4 border border-gray-300 rounded-md text-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all ease-in-out" placeholder="Enter address" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="address-line2" className="text-lg text-white">Address Line 2</label>
            <input id="address-line2" type="text" className="p-4 border border-gray-300 rounded-md text-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all ease-in-out" placeholder="Enter address" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="city" className="text-lg text-white">City</label>
            <input id="city" type="text" required className="p-4 border border-gray-300 rounded-md text-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all ease-in-out" placeholder="Enter city" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="state" className="text-lg text-white">State/Province</label>
            <input id="state" type="text" required className="p-4 border border-gray-300 rounded-md text-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all ease-in-out" placeholder="Enter state/province" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="postal-code" className="text-lg text-white">Postal Code</label>
            <input id="postal-code" type="text" required inputMode="numeric" className="p-4 border border-gray-300 rounded-md text-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all ease-in-out" placeholder="Enter postal code" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="country" className="text-lg text-white">Country</label>
            <input id="country" type="text" required className="p-4 border border-gray-300 rounded-md text-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all ease-in-out" placeholder="Enter country" />
          </div>
        </div>

        <div className="flex justify-end">
          <button type="submit" className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 px-6 text-lg rounded-xl shadow-xl transform hover:scale-105 transition-all hover:from-indigo-600 hover:to-purple-700">
            Submit Payment
          </button>
        </div>
      </form>

      {signOutButton}
    </div>
  );
}
