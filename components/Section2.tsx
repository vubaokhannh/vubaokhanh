import React from "react";

export default function Section2() {
  return (
    <div>
      <section id="about" className="min-h-screen  text-white px-6 py-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Objective</h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Web developer specialized in HTML, CSS, JavaScript, and PHP
              (Laravel, MySQL). Experienced in MVC-based applications and
              passionate about delivering scalable, user-friendly solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className=" bg-gray-800 rounded-2xl p-6 shadow-lg border border-[#0ef]">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-[#0ef]">
                <span className="w-2 h-8 bg-[#0ef] rounded"></span>
                Personal Information
              </h3>
              <ul className="space-y-6 text-white text-lg">
                <li className="flex justify-between ">
                  <span>Full Name:</span>
                  <span className="font-medium">Vũ Bảo Khanh</span>
                </li>
                <li className="flex justify-between">
                  <span>Age:</span>
                  <span className="font-medium">23/11/2005</span>
                </li>
                <li className="flex justify-between">
                  <span>Location:</span>
                  <span className="font-medium">Hồ Chí Minh</span>
                </li>
                <li className="flex justify-between">
                  <span>Email:</span>
                  <span className="font-medium">vubaokhanh2311@gmail.com</span>
                </li>
                <li className="flex justify-between">
                  <span>Phone:</span>
                  <span className="font-medium">(+84) 0947 546 007</span>
                </li>

                <li className="flex justify-between">
                  <span>Languages:</span>
                  <span className="font-medium">Vietnamese</span>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <div className=" bg-gray-800 rounded-2xl p-6 shadow-lg border border-[#0ef] ">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-[#0ef]">
                  <span className="w-2 h-8 bg-[#0ef] rounded"></span>
                  Education
                </h3>
                <p className="text-white  leading-relaxed text-lg">
                  <span className="font-semibold">
                    FPT Polytechnic College, Can Tho
                  </span>
                  <br />
                  Major: Web Developer
                  <br />
                  GPA: 3.75/4.0
                  <br />
                  <span className="text-sm text-gray-300">
                    Aug 2023 – Aug 2025
                  </span>
                </p>
              </div>

              <div className=" bg-gray-800 rounded-2xl p-6 shadow-lg border border-[#0ef]">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-[#0ef]">
                  <span className="w-2 h-8 bg-[#0ef] rounded"></span>
                  Target
                </h3>
                <p className="text-white text-lg">
                  Become a good Full Stack Developer, create valuable technology
                  products for the community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
