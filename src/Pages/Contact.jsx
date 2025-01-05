import React from "react";
import Landing from "../Components/Landing";

export default function Contact() {
  const contact1 = (
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md bg-opacity-50">
      {/* <!-- Judul Form --> */}
      <h2 class="text-2xl font-bold text-sky-700 text-center">Contact Us</h2>
      <p class="text-gray-600 text-center mt-2">We'd love to hear from you!</p>

      {/* <!-- Form --> */}
      <form class="mt-6 space-y-4">
        {/* <!-- Input Nama --> */}
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            class="w-full mt-1 px-4 py-2 border opacity-50 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 border-gray-300"
          />
        </div>

        {/* <!-- Input Email --> */}
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Your Email"
            class="w-full mt-1 px-4 py-2 border opacity-50 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 border-gray-300"
          />
        </div>

        {/* <!-- Input Masukan --> */}
        <div>
          <label for="message" class="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            rows="4"
            placeholder="Your Message"
            class="w-full mt-1 px-4 py-2 border opacity-50 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 border-gray-300"
          ></textarea>
        </div>

        {/* <!-- Tombol Kirim --> */}
        <button
          type="submit"
          class="w-full bg-sky-600 text-white py-2 rounded-md font-semibold hover:bg-sky-800 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
  return (
    <div className="">
      <Landing contact={contact1}></Landing>
    </div>
  );
}
