"use client";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export default function Section5() {
  return (
    <section id="contact" className="min-h-screen  text-white py-4 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Contact Me</h2>
        <p className="text-center text-gray-300 mb-12 text-lg">
          Let’s get in touch. Feel free to reach out anytime 🚀
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="border border-[#0ef] p-6 rounded-2xl shadow-lg space-y-6">
            <h3 className="text-2xl font-semibold mb-4 text-pink-400">
              Contact Information
            </h3>

            <div className="flex items-center gap-4 bg-gray-800 p-4 rounded-lg">
              <FaPhone className="text-2xl text-cyan-400" />
              <div>
                <p className="text-gray-300 text-sm">Phone</p>
                <p className="font-medium">0947546007</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-gray-800 p-4 rounded-lg">
              <FaEnvelope className="text-2xl text-pink-400" />
              <div>
                <p className="text-gray-300 text-sm">Email</p>
                <p className="font-medium">vubaokhanh2311@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-gray-800 p-4 rounded-lg">
              <FaMapMarkerAlt className="text-2xl text-green-400" />
              <div>
                <p className="text-gray-300 text-sm">Location</p>
                <p className="font-medium">Hồ Chí Minh</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-gray-800 p-4 rounded-lg">
              <FaClock className="text-2xl text-yellow-400" />
              <div>
                <p className="text-gray-300 text-sm">Available</p>
                <p className="font-medium">Mon – Fri, 9AM – 6PM</p>
              </div>
            </div>
          </div>

          <div className="border border-[#0ef] p-6 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-green-400">
              Send Message
            </h3>

            <form
              action="https://formspree.io/f/xnqeyyqw"
              method="POST"
              className="space-y-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 text-sm">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full p-3 rounded-lg bg-gray-800 text-white outline-none  "
                  />
                </div>
                <div>
                  <label className="block mb-1 text-sm">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full p-3 rounded-lg bg-gray-800 text-white outline-none  "
                  />
                </div>
              </div>
              <div>
                <label className="block mb-1 text-sm">Subject</label>
                <input
                  type="text"
                  name="subject"
                  required
                  className="w-full p-3 rounded-lg bg-gray-800 text-white outline-none  "
                />
              </div>
              <div>
                <label className="block mb-1 text-sm">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="w-full p-3 rounded-lg bg-gray-800 text-white outline-none  "
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 text-white font-semibold rounded-lg shadow-md hover:scale-105 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
