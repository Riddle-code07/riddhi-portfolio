"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="font-sans text-gray-900">

      {/* HERO */}
      <section className="relative min-h-screen flex items-center px-20">

        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0">
          <img
            src="/office.jpg"
            className="w-full h-full object-cover"
          />

          {/* DARK GRADIENT (keeps background visible) */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
        </div>

        <div className="relative z-10 w-full">

          {/* NAVBAR */}
          <nav className="flex justify-between items-center mb-16 text-white">
            <h1 className="text-2xl font-semibold">Riddhi.</h1>

            <div className="flex gap-10 text-sm">
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>

            <button className="border border-white px-4 py-2 rounded-md text-sm hover:bg-white hover:text-black transition">
              Download CV
            </button>
          </nav>

          {/* HERO CONTENT */}
          <div className="flex items-center justify-between">

            {/* LEFT */}
            <div className="max-w-xl text-white">

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm mb-4 tracking-wide opacity-80"
              >
                DATA ANALYST • BUSINESS ANALYST
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-6xl font-bold leading-tight"
              >
                Turning Data <br />
                Into Decisions.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-6 text-lg opacity-90"
              >
                I analyze data to uncover insights and support smarter business decisions.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-8 flex gap-4"
              >
                <button className="bg-white text-black px-6 py-3 rounded-md hover:scale-105 transition">
                  View My Work
                </button>

                <button className="border border-white px-6 py-3 rounded-md hover:bg-white hover:text-black transition">
                  Let’s Connect
                </button>
              </motion.div>

              <div className="mt-10 flex gap-5 opacity-80">
                <span>LinkedIn</span>
                <span>GitHub</span>
                <span>Email</span>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <img
                src="/profile.jpeg"
                className="w-72 h-72 object-contain rounded-full border-4 border-white shadow-2xl"
              />

              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white text-black px-4 py-2 rounded-md text-sm shadow">
                Aspiring Analyst
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-20 py-20 bg-white">
        <h2 className="text-3xl font-semibold mb-6">About Me</h2>
        <p className="max-w-2xl text-gray-700">
          I am a BCA student with a strong interest in data analysis and business problem-solving.
          I have completed a research analyst internship and enjoy working with Excel and Python
          to extract meaningful insights from data.
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="px-20 py-20 bg-gray-100">
        <h2 className="text-3xl font-semibold mb-10">Skills</h2>

        <div className="grid grid-cols-3 gap-6">
          {["Excel", "Python", "SQL", "Data Analysis", "Visualization", "Research"].map((skill) => (
            <div
              key={skill}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-20 py-20 bg-white">
        <h2 className="text-3xl font-semibold mb-10">Projects</h2>

        <div className="grid grid-cols-3 gap-6">
          {[1, 2, 3].map((p) => (
            <div key={p} className="border p-6 rounded-lg hover:shadow-md transition">
              <h3 className="font-semibold mb-2">Project {p}</h3>
              <p className="text-gray-600 text-sm">
                Add your real project description here.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-20 py-20 bg-gray-100">
        <h2 className="text-3xl font-semibold mb-6">Contact</h2>
        <p className="text-gray-600">
          Feel free to reach out for opportunities or collaboration.
        </p>
      </section>

    </main>
  );
}