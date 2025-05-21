import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:syedaqurrat542@gmail.com?subject=Portfolio Contact: ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    window.location.href = mailtoLink;
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div
      id="contact"
      className="min-h-screen w-full bg-gradient-to-b from-[#ffe4e7] to-white py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-black via-[#c40040] to-[#ff0055] bg-clip-text text-transparent">
            Contact Us
          </h2>
          <p className="mt-4 text-xl text-center text-[#6e6e6e] font-semibold">
            Let's connect and explore
          </p>
        </div>

        {/* Contact form */}
        <div className="max-w-2xl mx-auto bg-white border border-[#ffd6de] p-8 rounded-xl shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-[#444] mb-5"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handlechange}
                required
                className="mt-1 block w-full border border-[#ffccd6] rounded p-3 focus:outline-none focus:ring-2 focus:ring-[#ff0055]"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#444] mb-5"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="placeholder@gmail.com"
                value={formData.email}
                onChange={handlechange}
                required
                className="mt-1 block w-full border border-[#ffccd6] rounded p-3 focus:outline-none focus:ring-2 focus:ring-[#ff0055]"
              />
            </div>
            <div>
              <label
                htmlFor="text"
                className="block text-sm font-medium text-[#444] mb-5"
              >
                Message:
              </label>
              <input
                type="text"
                id="message"
                name="message"
                placeholder="Message"
                rows="4"
                value={formData.message}
                onChange={handlechange}
                required
                className="mt-1 block w-full border border-[#ffccd6] rounded p-3 focus:outline-none focus:ring-2 focus:ring-[#ff0055]"
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-black via-[#c40040] to-[#ff0055] text-white font-semibold rounded hover:opacity-90 transition duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
