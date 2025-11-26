"use client";
import { FaXTwitter } from "react-icons/fa6";
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn  } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="p-6 mx-auto space-y-12 max-w-7xl md:p-12">
      <h1 className="mb-6 bg-gradient-to-r from-[#bfe30a] via-[#83e54e] to-[#5bb52a] bg-clip-text text-transparent text-4xl font-bold text-center">Contact Us</h1>

      {/* Contact Info Section */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Get in Touch</h2>
          <p className="text-gray-700">
            We'd love to hear from you! Reach out to us for inquiries, support, or feedback.
          </p>

          <div className="space-y-3">
            <p>
              <span className="font-semibold">Address:</span> 123 Main Street, Dhaka, Bangladesh
            </p>
            <p>
              <span className="font-semibold">Phone:</span> +880 1234 567890
            </p>
            <p>
              <span className="font-semibold">Email:</span> info@grocery.com
            </p>
          </div>

          <div className="flex gap-4 mt-4">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-2xl text-blue-600 hover:text-blue-800">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-2xl text-pink-500 hover:text-pink-700">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-2xl text-blue-700 hover:text-blue-900">
              <FaLinkedinIn />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-2xl text-blue-400 hover:text-blue-600">
              <FaXTwitter />
            </a>
          </div>
        </div>

        {/* Map Section */}
        <div className="overflow-hidden shadow-lg rounded-xl">
          <iframe
            title="Grocery Store Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8855294158046!2d90.3692065149816!3d23.780887084592764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a4b9f9e2fb%3A0x8e72c2e3c7e1c7e7!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
            width="100%"
            height="400"
            className="border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-3xl p-6 mx-auto bg-white shadow-lg rounded-xl">
        <h2 className="mb-4 text-2xl font-semibold">Send Us a Message</h2>
        <form className="space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-green-400"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-green-400"
              required
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-green-400"
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-green-400"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 text-white transition bg-[#78C841] rounded hover:bg-green-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
