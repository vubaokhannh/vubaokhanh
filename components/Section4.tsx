"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function Section4() {
  const projects = [
    {
      title: "Bus Ticket Booking System",
      description:
        "A web-based platform for booking and managing bus tickets with integrated  payment and seat selection.",
      image: "/images/projects/bus-ticket.png",
      tags: ["Laravel", "Filament", "React", "MySQL", "Tailwind"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Wine E-commerce Website",
      description:
        "An e-commerce website for selling wine, including cart management, invoicing, and product filtering.",
      image: "/images/projects/wine-shop.webp",
      tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      demoUrl: "#",
      githubUrl: "https://github.com/vubaokhannh/wine.git",
    },
    {
      title: "Movie Streaming Website",
      description:
        "A web platform for streaming movies with features like user authentication, movie categorization, and MoMo payment integration for premium access.",
      image: "/images/projects/movie-streaming.webp",
      tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Personal Portfolio Website",
      description:
        "A personal portfolio website to showcase my projects, skills, and experiences, with a clean and responsive design.",
      image: "/images/projects/user.jpg",
      tags: ["Next.js", "Tailwind"],
      demoUrl: "https://vubaokhanh.vercel.app/",
      githubUrl: "https://github.com/vubaokhannh/vubaokhanh.git",
    },
    {
      title: "Trello Backend",
      description:
        "A RESTful API backend for a Trello-like task management app, built with NestJS and Prisma, featuring CRUD operations for boards, lists, and cards, user access control, JWT authentication, and performance optimization with Redis.",
      image: "/images/projects/trello.png",
      tags: ["NestJS", "Prisma", "Redis", "JWT"],
      demoUrl:
        "https://winter-station-8711970.postman.co/workspace/V%C5%A9-B%E1%BA%A3o-Khanh~621aa075-df5d-484c-88d4-1f8b6b2fad78/collection/44000321-d1bcdeef-ceae-4f43-8e0a-03abfaa5f8a0?action=share&creator=44000321",
      githubUrl: "https://github.com/vubaokhannh/trello-backend",
    },
  ];

  const [visibleCount, setVisibleCount] = useState(3);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const handleViewLess = () => {
    setVisibleCount(3);
  };

  return (
    <section id="projects" className="min-h-screen text-white px-6 py-4">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Selected projects showcasing my skills and technologies applied.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.slice(0, visibleCount).map((project, index) => (
            <div
              key={index}
              className="group relative border border-[#0ef] rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition"
            >
              <div className="h-48 relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="rounded-t-2xl object-cover"
                />

                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                  <div className="flex w-full mb-6 transform translate-y-10 group-hover:translate-y-0 transition-all duration-500 ease-out px-6 gap-4">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-1/2 text-center px-4 py-3 bg-[#0ef] text-black font-semibold rounded-xl shadow-md hover:scale-105 transition"
                    >
                      Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-1/2 text-center px-4 py-3 bg-[#0ef] text-black font-semibold rounded-xl shadow-md hover:scale-105 transition"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-[#0ef] text-black font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          {visibleCount < projects.length ? (
            <button
              onClick={handleLoadMore}
              className="px-6 py-3  bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 text-black font-semibold rounded-full shadow-md hover:scale-105 transition"
            >
              View More Projects
            </button>
          ) : (
            projects.length > 3 && (
              <button
                onClick={handleViewLess}
                className="px-6 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 text-white font-semibold rounded-full shadow-md hover:scale-105 transition"
              >
                View Less Projects
              </button>
            )
          )}
        </div>
      </div>
    </section>
  );
}
