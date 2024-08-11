import Footer from "@/components/footer";
import AlkawnNavbar from "@/components/navbar";
import React from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Support: React.FC = () => (
  <div className="min-h-screen bg-black text-white">
    <AlkawnNavbar />
    <main className="flex flex-col items-center justify-start w-full px-6 py-20">
      <h1 className="text-4xl font-bold mb-8">Support</h1>
      <p className="max-w-3xl text-lg text-center mb-12">
        We are here to assist you with any questions or issues you may have.
        Please choose the type of support you need from the list below, or
        contact us directly.
      </p>
      <div className="flex flex-col items-center w-full max-w-3xl space-y-6 mb-12">
        <div className="w-full flex flex-col items-center text-center bg-gray-900 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <div className="flex flex-col space-y-4">
            <a
              href="mailto:support@example.com"
              className="flex items-center space-x-2 text-primary hover:underline"
            >
              <FaEnvelope className="text-xl" />
              <span>Email: support@alkawn.tech</span>
            </a>
            <a
              href="tel:+1234567890"
              className="flex items-center space-x-2 text-primary hover:underline"
            >
              <FaPhoneAlt className="text-xl" />
              <span>Phone: +1 (234) 567-890</span>
            </a>
          </div>
        </div>
        <div className="w-full flex flex-col items-center text-center  p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Support Categories</h2>
          <ul className="list-none space-y-4 text-left">
            <li>
              <h3 className="text-xl font-semibold text-primary">
                Customer Support
              </h3>
              <p className="text-gray-300">
                Get help with general inquiries or issues related to your
                account.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-semibold text-primary">
                Technical Support
              </h3>
              <p className="text-gray-300">
                Assistance with technical problems or troubleshooting.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-semibold text-primary">
                Billing Support
              </h3>
              <p className="text-gray-300">
                Help with billing inquiries, payments, or subscription issues.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-semibold text-primary">
                Product Support
              </h3>
              <p className="text-gray-300">
                Support for product-related questions or issues.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-semibold text-primary">
                Account Support
              </h3>
              <p className="text-gray-300">
                Guidance with account setup, management, and security.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-semibold text-primary">Feedback</h3>
              <p className="text-gray-300">
                We value your feedback to help us improve our services.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-semibold text-primary">
                Help Center
              </h3>
              <p className="text-gray-300">
                Access our comprehensive help center for guides and FAQs.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Support;
