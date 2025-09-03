import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-black">Contact Us</h1>
        <p className="text-gray-900 mt-2">We'd love to hear from you!</p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div className="bg-white p-6 text-black border-gray-600 rounded-lg shadow-md">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="border p-2 rounded"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="border p-2 rounded"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              className="border p-2 rounded h-32"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-blue-400 text-white py-2 px-4 rounded hover:bg-blue-950 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-between gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md text-black">
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="mb-2"><strong>Email:</strong> ummesadiasayti@gmail.com</p>
            <p className="mb-2"><strong>Phone:</strong> +88 01831409601</p>
            <p className="mb-2"><strong>Address:</strong> 123 Street Name, City, Country</p>
            <p className="mb-2"><strong>Business Hours:</strong> Mon-Fri, 9AM-6PM</p>
          </div>

          {/* Social Links */}
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center gap-4">
            <a href="#" className="text-blue-600 text-2xl hover:text-blue-800"><FaFacebook /></a>
            <a href="#" className="text-pink-500 text-2xl hover:text-pink-700"><FaInstagram /></a>
            <a href="#" className="text-blue-400 text-2xl hover:text-blue-600"><FaTwitter /></a>
            <a href="#" className="text-blue-700 text-2xl hover:text-blue-900"><FaLinkedin /></a>
          </div>

          {/* Map */}
          <div className="rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902305270869!2d90.3915654154128!3d23.75090399459093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7bbf2b69f7f%3A0x16f5f0d7b7b3b5e6!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1693634567890!5m2!1sen!2sus"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
