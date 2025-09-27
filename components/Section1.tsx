"use client";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
export default function Section1() {
  return (
    <div>
      <section
        id="home"
        className="text-white min-h-screen  flex items-center justify-center px-6 "
      >
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 flex justify-center relative">
            <div className="w-96 h-96 rounded-full bg-gradient-to-tr from-[#0ef] to-[#009ffd] p-2">
              <div className="w-full h-full rounded-full overflow-hidden bg-gray-800">
                <Image
                  src="/images/khanh.jpg"
                  alt="Profile"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-2">Hello, It's Me</h2>
            <h1 className="text-5xl font-extrabold mb-2 text-white">
              VU BAO KHANH
            </h1>
            <h3 className="text-2xl mb-4">
              And I'm a{" "}
              <TypeAnimation
                sequence={[
                  "Web Developer",
                  2000,
                  "Frontend Developer",
                  2000,
                  "Fullstack Learner",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-[#0ef] font-bold"
              />
            </h3>

            <p className="text-gray-300 leading-relaxed mb-6 text-lg">
              Passionate about building modern and scalable web applications
              with technologies like HTML, CSS, JavaScript, PHP, Laravel, and
              MySQL. Always eager to learn, improve, and deliver user-friendly
              solutions.
            </p>

            <div className="flex gap-4 mb-6">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center border border-[#0ef] rounded-full hover:bg-[#0ef] hover:text-black transition"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center border border-[#0ef] rounded-full hover:bg-[#0ef] hover:text-black transition"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center border border-[#0ef] rounded-full hover:bg-[#0ef] hover:text-black transition"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center border border-[#0ef] rounded-full hover:bg-[#0ef] hover:text-black transition"
              >
                <FaYoutube />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center border border-[#0ef] rounded-full hover:bg-[#0ef] hover:text-black transition"
              >
                <FaLinkedin />
              </a>
            </div>

            <a
              href="/CV_VuBaoKhanh.pdf"
              download
              className="px-6 py-3 bg-[#0ef] text-black font-semibold rounded-full shadow-md hover:scale-105 transition"
            >
              Download CV
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
