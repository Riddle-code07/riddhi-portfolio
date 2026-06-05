"use client";

import { motion } from "framer-motion";

export default function Home() {
return ( <main className="font-sans text-gray-900">


  {/* HERO */}
  <section className="relative min-h-screen flex items-center px-6 md:px-20">

    {/* BACKGROUND IMAGE */}
    <div className="absolute inset-0">
      <img
        src="/office.jpg"
        className="w-full h-full object-cover"
        alt="Background"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
    </div>

    <div className="relative z-10 w-full">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center mb-10 md:mb-16 text-white">

        <h1 className="text-2xl md:text-3xl font-semibold">
          Riddhi Kadam
        </h1>

        <div className="hidden md:flex gap-10 text-sm">
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <a
          href="/resume.pdf"
          download
          className="border border-white px-3 py-2 md:px-4 md:py-2 rounded-md text-xs md:text-sm hover:bg-white hover:text-black transition"
        >
          Download CV
        </a>

      </nav>

      {/* HERO CONTENT */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">

        {/* LEFT */}
        <div className="max-w-xl text-white text-center md:text-left">

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
            className="text-3xl md:text-5xl font-bold leading-tight"
          >
            Turning Data <br />
            Into Decisions.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-base md:text-lg opacity-90"
          >
            I analyze data to uncover insights and support smarter business decisions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >

            <a
              href="#projects"
              className="bg-white text-black px-6 py-3 rounded-md hover:scale-105 transition text-center"
            >
              Explore Projects
            </a>

            <a
              href="https://www.linkedin.com/in/riddhi-kadam07"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white px-6 py-3 rounded-md hover:bg-white hover:text-black transition text-center"
            >
              Let's Connect
            </a>

          </motion.div>

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
            className="w-48 h-48 md:w-72 md:h-72 object-cover rounded-full border-4 border-white shadow-2xl"
            alt="Riddhi Kadam"
          />

          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white text-black px-4 py-2 rounded-md text-xs md:text-sm shadow whitespace-nowrap">
            Aspiring Analyst
          </div>

        </motion.div>

      </div>

    </div>
  </section>



      {/* ABOUT */}

<section
  id="about"
  className="px-6 md:px-20 py-20 bg-white"
>
  <h2 className="text-3xl md:text-4xl font-semibold mb-6">
    About Me
  </h2>

  <p className="max-w-3xl text-gray-700 leading-8 text-base md:text-lg">
    I am a BCA graduate with a strong interest in data analysis,
    business intelligence, and problem-solving. Through academic
    projects and professional experience as a Research Analyst Intern,
    I have developed skills in Python, SQL, Excel, Power BI, and data
    visualization to transform raw data into meaningful insights.
  </p>
</section>

{/* EDUCATION */}

<section
  id="education"
  className="px-6 md:px-20 py-24 bg-gray-100"
>
  <h2 className="text-3xl md:text-4xl font-bold mb-14 text-center">
    Education
  </h2>

  <div className="space-y-8">


<div className="bg-white p-6 md:p-8 rounded-2xl shadow">
  <h3 className="text-xl md:text-2xl font-semibold">
    Shri M.D. Shah Mahila College
  </h3>

  <p className="text-gray-600 mt-2">
    Bachelor of Computer Applications (BCA)
  </p>

  <p className="text-gray-500 mt-2">
    CGPA: 7.90
  </p>
</div>


  </div>
</section>

{/* SKILLS */}

<section
  id="skills"
  className="px-6 md:px-20 py-20 bg-gray-100"
>
  <h2 className="text-3xl md:text-4xl font-semibold mb-10">
    Skills
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">


{[
  "Python",
  "SQL",
  "Excel",
  "Power BI",
  "Pandas",
  "Flask",
  "Front-End Development",
  "Research Analysis",
  "Data Visualization",
  "Business Analysis",
  "Git & GitHub",
  "Problem Solving"
].map((skill) => (
  <div
    key={skill}
    className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
  >
    {skill}
  </div>
))}


  </div>
</section>

{/* CORE COMPETENCIES */}

<section
  className="px-6 md:px-20 py-20 bg-white"
>
  <h2 className="text-3xl md:text-4xl font-semibold mb-10">
    Core Competencies
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">


{[
  "Business Analysis",
  "Market Research",
  "Project Management",
  "Data Interpretation",
  "Stakeholder Communication",
  "Problem Solving"
].map((skill) => (
  <div
    key={skill}
    className="bg-gray-100 p-6 rounded-lg shadow"
  >
    {skill}
  </div>
))}


  </div>
</section>

{/* EXPERIENCE */}

<section
  id="internship"
  className="px-6 md:px-20 py-24 bg-white"
>
  <h2 className="text-3xl md:text-4xl font-bold mb-14 text-center">
    Experience
  </h2>

  <div className="bg-gray-100 rounded-2xl p-6 md:p-8 shadow">


<h3 className="text-xl md:text-2xl font-semibold">
  Research Analyst Intern — OZIBOOK
</h3>

<p className="text-gray-500 mt-2">
  Bangalore-based Startup
</p>

<ul className="mt-6 text-gray-700 leading-7 list-disc pl-6 space-y-3">

  <li>
    Conducted in-depth research on various topics relevant to clients'
    industries and business environments.
  </li>

  <li>
    Managed client profiles and optimized LinkedIn visibility for
    clients and internal teams.
  </li>

  <li>
    Analyzed businesses and competitors to develop stronger positioning
    strategies.
  </li>

  <li>
    Assisted the project management team in ensuring timely and
    high-quality delivery.
  </li>

  <li>
    Collaborated with business analysts to develop actionable growth
    strategies.
  </li>

  <li>
    Served as a sub-team lead by coordinating tasks and ensuring
    successful execution.
  </li>

  <li>
    Hosted meetings, brainstorming sessions, and trained new team
    members.
  </li>

</ul>


  </div>
</section>
   

   {/* PROJECTS */}

<section
  id="projects"
  className="px-6 md:px-20 py-24 bg-white"
>
  <h2 className="text-3xl md:text-4xl font-bold mb-14 text-center">
    Projects
  </h2>

{/* SOFTWARE DEVELOPMENT */}

  <h3 className="text-2xl md:text-3xl font-bold mb-8">
    💻 Software Development
  </h3>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">


<a
  href="https://github.com/Riddle-code07/mediaware_backend"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition duration-300 border"
>
  <img
    src="/project1.png"
    className="w-full h-56 object-cover"
    alt="MediAware"
  />

  <div className="p-6">
    <h3 className="text-xl md:text-2xl font-semibold mb-3">
      MediAware
    </h3>

    <ul className="text-gray-600 list-disc pl-5 space-y-2">
      <li>Healthcare platform for medicine users and medical store owners.</li>
      <li>Provides structured medicine information in one place.</li>
      <li>Allows stores to analyze demand trends and manufacturer insights.</li>
    </ul>

    <p className="mt-4 text-sm text-gray-500">
      Flask • MySQL • Frontend • Python
    </p>
  </div>
</a>


  </div>

{/* DATA ANALYTICS */}

  <h3 className="text-2xl md:text-3xl font-bold mt-20 mb-8">
    📊 Data Analytics & BI
  </h3>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">


<a
  href="https://github.com/Riddle-code07/PowerBi_project-Data-Jobs-"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition duration-300 border"
>
  <img
    src="/project2.jfif"
    className="w-full h-56 object-cover"
    alt="Data Jobs Dashboard"
  />

  <div className="p-6">
    <h3 className="text-xl md:text-2xl font-semibold mb-3">
      Data Jobs Dashboard
    </h3>

    <ul className="text-gray-600 list-disc pl-5 space-y-2">
      <li>Interactive Power BI dashboard for analyzing US data job trends.</li>
      <li>Visualizes salaries, hiring demand and role comparisons.</li>
      <li>Helps identify market opportunities in the data industry.</li>
    </ul>

    <p className="mt-4 text-sm text-gray-500">
      Power BI • Data Visualization
    </p>
  </div>
</a>

<div className="bg-white rounded-2xl overflow-hidden shadow-lg border">
  <img
    src="/sql-dashboard.png"
    className="w-full h-56 object-cover"
    alt="SQL Dashboard"
  />

  <div className="p-6">
    <h3 className="text-xl md:text-2xl font-semibold mb-3">
      SQL Dashboard
    </h3>

    <p className="text-gray-600">
      Add your SQL Dashboard description here.
    </p>

    <p className="mt-4 text-sm text-gray-500">
      SQL • Power BI
    </p>
  </div>
</div>


  </div>

{/* PYTHON PROJECTS */}

  <h3 className="text-2xl md:text-3xl font-bold mt-20 mb-8">
    🐍 Python Projects
  </h3>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">


<a
  href="https://github.com/Riddle-code07/UPI-Market-Analysis"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition duration-300 border"
>
  <img
    src="/upi-project.png"
    className="w-full h-56 object-cover"
    alt="UPI Transaction Analysis"
  />

  <div className="p-6">
    <h3 className="text-xl md:text-2xl font-semibold mb-3">
      UPI Transaction Analysis
    </h3>

    <ul className="text-gray-600 list-disc pl-5 space-y-2">
      <li>Analyzed UPI transaction data to identify market trends and leading payment apps.</li>
      <li>Performed data cleaning and analysis using Python (Pandas) and SQL.</li>
      <li>Built visualizations to track market share, growth trends and app competition.</li>
      <li>Generated business insights on digital payment adoption in India.</li>
    </ul>

    <p className="mt-4 text-sm text-gray-500">
      Python • Pandas • SQL • Matplotlib • GitHub
    </p>
  </div>
</a>


  </div>

{/* HARDWARE PROJECTS */}

  <h3 className="text-2xl md:text-3xl font-bold mt-20 mb-8">
    🔌 Hardware Projects
  </h3>

  <div className="bg-gray-100 rounded-2xl p-6 md:p-8 shadow">


<h3 className="text-xl md:text-2xl font-semibold mb-4">
  Smartathon Motion Detection System
</h3>

<p className="text-gray-700 leading-7">
  Built an Automatic Human Motion Detection System using Arduino,
  sensors, and LCD display components during a college Smartathon event.
  The system detects nearby movement and displays count-based outputs
  through sensor integration and embedded hardware logic.
</p>

<p className="mt-4 text-sm text-gray-500">
  Arduino • Sensors • LCD Display • Hardware Integration
</p>


  </div>

</section>




{/* ACHIEVEMENTS */}

<section
  id="achievements"
  className="px-6 md:px-20 py-24 bg-gray-100"
>
  <h2 className="text-3xl md:text-4xl font-bold mb-14 text-center">
    Achievements
  </h2>

  <div className="bg-white rounded-2xl p-6 md:p-8 shadow max-w-4xl mx-auto">


<h3 className="text-xl md:text-2xl font-semibold mb-4">
  Academic Excellence Award
</h3>

<h4 className="text-lg md:text-xl font-medium text-blue-700">
  Chandaaben Mohanbhai Patel Rotary Excellence Award 2023
</h4>

<p className="text-gray-700 mt-4 leading-7">
  Awarded First Rank in Senior Secondary (XII) and recognized
  for outstanding academic performance and excellence.
</p>


  </div>
</section>

{/* CONTACT */}

<section
  id="contact"
  className="px-6 md:px-20 py-24 bg-[#dbeafe]"
>
  <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
    Contact
  </h2>

  <div className="max-w-xl w-full mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-10">

```
<div className="space-y-8 text-base md:text-lg">

  {/* LINKEDIN */}
  <div>
    <p className="font-semibold mb-2">
      LinkedIn
    </p>

    <a
      href="https://www.linkedin.com/in/riddhi-kadam07/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:underline break-all"
    >
      linkedin.com/in/riddhi-kadam07
    </a>
  </div>

  {/* GITHUB */}
  <div>
    <p className="font-semibold mb-2">
      GitHub
    </p>

    <a
      href="https://github.com/Riddle-code07"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:underline break-all"
    >
      github.com/Riddle-code07
    </a>
  </div>

  {/* EMAIL */}
  <div>
    <p className="font-semibold mb-2">
      Email
    </p>

    <a
      href="mailto:riddhikadam2005@gmail.com"
      className="text-blue-600 hover:underline break-all"
    >
      riddhikadam2005@gmail.com
    </a>
  </div>

</div>


  </div>
</section>

</main>
  );
}







/*npm run dev
cd riddhi-portfolio
npm run dev
http://localhost:3000*/