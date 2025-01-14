"use client";
import { LocateIcon, MessageCircle, PhoneCall } from "lucide-react";
import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    organization: "",
    email: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full h-auto">
      <div className="w-[90%] mx-auto py-[20px] h-full flex items-center justify-between">
        <div className="w-[55%] h-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Get In Touch With Us
          </h2>
          <p>
            We are here to answer your questions. If you have any questions
            please leave us a message. We will contact with you as soon as
            possible.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="w-full flex items-center justify-between">
              <div className="w-[49%] h-full">
                <label
                  htmlFor="firstName"
                  className="block text-lg font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Enter your first name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full p-3 border shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="w-[49%] h-full">
                <label
                  htmlFor="lastName"
                  className="block text-lg font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Enter your last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full p-3 border shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="w-full flex items-center justify-between">
              <div className="w-[49%] h-full">
                <label
                  htmlFor="organization"
                  className="block text-lg font-medium text-gray-700"
                >
                  Organization
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  placeholder="Enter your organization"
                  value={formData.organization}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full p-3 border shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="w-[49%] h-full">
                <label
                  htmlFor="email"
                  className="block text-lg font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                  className="mt-2 w-full p-3 border shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="w-[49%] h-full">
              <label
                htmlFor="phoneNumber"
                className="block text-lg font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Enter your phone number"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="mt-2 w-full p-3 border shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="w-[100%] h-full">
              <textarea
                placeholder="Enter your message"
                className="h-[100px] w-full px-[10px] border"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full p-3 bg-[#00C5D9] text-white font-semibold shadow-sm hover:bg-[#00C5D9] focus:outline-none focus:ring-2 focus:ring-[#00C5D9]"
              >
                Send
              </button>
            </div>
          </form>
        </div>
        <div className="w-[45%] flex items-center justify-end h-auto">
          <div className="h-[600px] w-[80%] bg-[#EEF1F7]">
            <div className="h-[33%] flex flex-col justify-center items-center border-b border-gray-300">
              <div className="flex items-center gap-[10px]">
                <LocateIcon size={20} color="black" />
                <p className="text-[20px] font-bold">Visit Office</p>
              </div>
              <p className="text-[18px]">
                Apple Wood, Off Ngong Road, Nairobi, Kenya
              </p>
            </div>
            <div className="h-[33%] flex flex-col justify-center items-center border-b border-gray-300">
              <div className="flex items-center gap-[10px]">
                <PhoneCall size={20} color="black" />
                <p className="text-[20px] font-bold">Mobile phone</p>
              </div>
              <a href="tel:+254708673973" className="text-[18px]">
                Call:+254708673973
              </a>
            </div>
            <div className="h-[33%] flex flex-col justify-center items-center">
              <div className="flex items-center gap-[10px]">
                <MessageCircle size={20} color="black" />
                <p className="text-[20px] font-bold">Email address</p>
              </div>
              <a href="mail:info@llifftonanalytica.com" className="text-[18px]">
                info@llifftonanalytica.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
