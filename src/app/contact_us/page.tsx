import AlkawnNavbar from "@/components/navbar";
import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const ContactUs: React.FC = () => (
  <main className="flex flex-col items-center justify-center h-screen w-screen bg-black text-white">
    <AlkawnNavbar />
    <div className="flex flex-col items-center justify-center w-full px-6 py-12">
      <h1 className="text-4xl font-bold mb-12">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
        <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg">
          <FaPhoneAlt className="text-primary text-4xl mb-4" />
          <h2 className="text-xl font-semibold mb-2">Phone</h2>
          <p className="text-center">+93 (0) 72 943 6702</p>
        </div>
        <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg">
          <FaEnvelope className="text-primary text-4xl mb-4" />
          <h2 className="text-xl font-semibold mb-2">Email</h2>
          <p className="text-center">info@alkawn.tech</p>
        </div>
        <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg">
          <FaMapMarkerAlt className="text-primary text-4xl mb-4" />
          <h2 className="text-xl font-semibold mb-2">Location</h2>
          <p className="text-center">Kabul, Afghanistan</p>
        </div>
      </div>
    </div>
  </main>
);

export default ContactUs;
