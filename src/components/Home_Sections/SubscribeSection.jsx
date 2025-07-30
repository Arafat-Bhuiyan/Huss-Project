import React from "react";

const SubscribeSection = () => {
  return (
    <section className="bg-[#FFF0CC] py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Join Our VIP List</h2>
        <p className=" text-gray-700 mb-6 font-medium text-2xl">
          Subscribe to our newsletter and get 10% off your first purchase. Stay
          updated with exclusive offers and new product releases.
        </p>

        <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full px-4 py-2 rounded-2xl border text-xl font-normal border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-6 py-2 rounded-2xl transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default SubscribeSection;
