import React from "react";

const SubscribeSection = () => {
  return (
    <section className="bg-[#FFF0CC] py-16 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Join Our VIP List
        </h2>
        <p className="text-gray-700 mb-8 font-medium text-lg sm:text-xl md:text-2xl">
          Subscribe to our newsletter and get 10% off your first purchase. Stay
          updated with exclusive offers and new product releases.
        </p>

        <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full sm:flex-1 px-4 py-3 rounded-lg border text-base sm:text-lg font-normal border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button
            type="submit"
            className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-6 py-3 rounded-lg transition text-base sm:text-lg"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default SubscribeSection;
