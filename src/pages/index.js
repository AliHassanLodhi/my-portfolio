"use client";
import { useState } from "react";
import { useEffect } from "react";
import Loader from "@/pages/loader";
import Link from "next/link";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md px-6 md:px-20 py-6 flex justify-between items-center z-50">

      {/* Logo */}
      <div
        className="logo-container cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <div className="logo-inner">A</div>
      </div>

      {/* Desktop Nav Links + Resume */}
      <div className="hidden md:flex items-center gap-12">
        <ul className="flex gap-10 text-gray-400 text-sm">
          <li className="cursor-pointer">
            <span
              onClick={() =>
                window.scrollTo({ top: document.getElementById("about").offsetTop, behavior: "smooth" })
              }
              className="flex items-center gap-3 hover:text-purple-400 transition-all"
            >
              <span className="text-xs text-purple-400">01.</span>
              <span>About</span>
            </span>
          </li>
          <li className="cursor-pointer">
            <span
              onClick={() =>
                window.scrollTo({ top: document.getElementById("experience").offsetTop, behavior: "smooth" })
              }
              className="flex items-center gap-3 hover:text-purple-400 transition-all"
            >
              <span className="text-xs text-purple-400">02.</span>
              <span>Experience</span>
            </span>
          </li>
          <li className="cursor-pointer">
            <span
              onClick={() =>
                window.scrollTo({ top: document.getElementById("projects").offsetTop, behavior: "smooth" })
              }
              className="flex items-center gap-3 hover:text-purple-400 transition-all"
            >
              <span className="text-xs text-purple-400">03.</span>
              <span>Projects</span>
            </span>
          </li>
          <li className="cursor-pointer">
            <span
              onClick={() =>
                window.scrollTo({ top: document.getElementById("contact").offsetTop, behavior: "smooth" })
              }
              className="flex items-center gap-3 hover:text-purple-400 transition-all"
            >
              <span className="text-xs text-purple-400">04.</span>
              <span>Contact</span>
            </span>
          </li>
        </ul>

        {/* Resume Button */}
        <a
          href="/Ali-Hassan-Lodhi-RESUME.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 border border-gray-500 rounded-xl text-gray-300 hover:border-purple-400 hover:text-purple-400 transition-all"
        >
          Resume
        </a>
      </div>

     {/* Hamburger button for mobile */}
<div className="md:hidden">
  <button
    onClick={() => setMenuOpen(!menuOpen)}
    className="text-2xl text-gray-300 focus:outline-none hover:text-purple-400 transition-colors"
  >
    ☰
  </button>
</div>

{/* Mobile Menu as Right Drawer */}
{menuOpen && (
  <div className="fixed top-0 right-0 h-screen w-64 bg-gray-900 shadow-xl z-50">
    
    {/* Close button */}
    <button
      onClick={() => setMenuOpen(false)}
      className="absolute top-4 right-4 text-gray-300 hover:text-purple-400 text-2xl focus:outline-none"
    >
      ✕
    </button>

    {/* Menu links centered */}
    <div className="h-screen flex flex-col justify-center items-center gap-8 p-6">
      <a
        href="#about"
        className="flex items-center gap-3 hover:text-purple-400 text-lg font-medium"
        onClick={() => setMenuOpen(false)}
      >
        <span className="text-xs text-purple-400">01.</span> About
      </a>

      <a
        href="#experience"
        className="flex items-center gap-3 hover:text-purple-400 text-lg font-medium"
        onClick={() => setMenuOpen(false)}
      >
        <span className="text-xs text-purple-400">02.</span> Experience
      </a>

      <a
        href="#projects"
        className="flex items-center gap-3 hover:text-purple-400 text-lg font-medium"
        onClick={() => setMenuOpen(false)}
      >
        <span className="text-xs text-purple-400">03.</span> Projects
      </a>

      <a
        href="#contact"
        className="flex items-center gap-3 hover:text-purple-400 text-lg font-medium"
        onClick={() => setMenuOpen(false)}
      >
        <span className="text-xs text-purple-400">04.</span> Contact
      </a>

      {/* Resume Button */}
      <a
        href="/Ali-Hassan-Lodhi-RESUME.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 w-36 border border-gray-500 rounded-xl hover:border-purple-400 hover:text-purple-400 transition-all text-center font-semibold"
      >
        Resume
      </a>
    </div>
  </div>
)}

    </nav>
  );
}



export default function Home() {
  const [preview, setPreview] = useState(null);
  const [previewIndex, setPreviewIndex] = useState(null);
  const [previewList, setPreviewList] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (

    <>
      <Navbar />
      <br></br>
      <br></br>
      <br></br>
      <main className="min-h-screen flex items-center px-20 relative">

        {/* LEFT SOCIAL ICON BAR */}
        <div className="fixed left-10 flex flex-col gap-6 text-gray-400">
          <a href="#"><i className="lab la-github text-2xl hover:text-white"></i></a>
          <a href="#"><i className="lab la-instagram text-2xl hover:text-white"></i></a>
          <a href="#"><i className="lab la-twitter text-2xl hover:text-white"></i></a>
          <a href="#"><i className="lab la-linkedin text-2xl hover:text-white"></i></a>
        </div>

        <div className="hidden md:flex fixed right-8 bottom-0 flex-col items-center gap-6 text-gray-400">


          {/* Email (Only this is rotated) */}
          <a href="mailto:alihassanlodhi1@gmail.com" className="cursor-pointer">
            <span
              className="rotate-90 tracking-wide text-sm -translate-y-22 hover:scale-105 transition-all duration-200 inline-block text-gray-300"
            >
              alihassanlodhi1@gmail.com
            </span>
          </a>


          {/* Icons (Normal, not rotated) */}
          <div className="flex flex-col items-center gap-4">
            <a
              href="https://github.com/AliHassanLodhi"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-200 hover:scale-110"
            >
              <FaGithub size={23} />
            </a>

            <a
              href="https://linkedin.com/in/ali-hassan-lodhi"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-200 hover:scale-110"
            >
              <FaLinkedin size={23} />
            </a>

            <a
              href="https://wa.me/923135874453"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-200 hover:scale-110"
            >
              <FaWhatsapp size={23} />
            </a>
          </div>

          {/* Line */}
          <div className="w-[1px] h-24 bg-gray-500"></div>
        </div>

 {/* MAIN TEXT SECTION */}
<div className="max-w-4xl text-left px-4 sm:px-0 pt-08 sm:pt-0"> {/* added pt-24 for mobile to clear navbar */}

  <h2 className="text-gray-400 text-base sm:text-lg font-light tracking-[0.12em] mb-3">
    Hi <span className="text-purple-500 font-normal">116.71.12.113</span>, my name is
  </h2>

  <h1 className="text-4xl sm:text-[80px] font-bold leading-[1.1] text-[#d1d5db]">
    Ali Hassan Lodhi.
  </h1>

  <h2 className="text-2xl sm:text-[60px] font-semibold text-[#9ca3af] leading-[1.1] mt-3">
    I love to build cool digital things.
  </h2>

  <p className="text-gray-400 text-base sm:text-lg max-w-xl mt-5">
    I'm a software engineering graduate. I love to build elegant solutions and solve complex problems with code.
  </p>

 <button
  onClick={() => {
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }}
  className="mt-8 border border-gray-500 px-4 py-2 sm:px-8 sm:py-4 rounded-lg text-sm sm:text-base text-gray-300 hover:bg-gray-200 hover:text-black transition flex items-center gap-2"
>
  Check out my work <span className="text-gray-300 hover:text-black">→</span>
</button>

</div> 


      </main>

{/* ABOUT SECTION */}
<section id="about" className="py-32 w-full">
  <div className="max-w-4xl mx-auto px-6 sm:px-20">
    <h2 className="text-3xl font-semibold text-gray-300 mb-12 flex items-center gap-3">
      <span className="text-purple-400 text-xl">01.</span>
      About Me
      <div className="h-px w-40 bg-gray-700 ml-4"></div>
    </h2>

    <p className="text-gray-400 text-sm leading-relaxed">
      I am a passionate and dedicated software engineer with a strong drive for growth and excellence. I hold a Bachelor in Software Engineering from the National University of Modern Languages (NUML), where I gained a solid foundation in data structures, algorithms, object-oriented programming, databases, software engineering methodologies, UI/UX design, and software testing.
    </p>

    <p className="text-gray-400 text-sm leading-relaxed mt-4">
      During my professional journey, I worked as a Web Development Intern at Softosol, where I developed the company’s landing page to enhance its online presence and contributed to an Angular-based e-commerce project, implementing dynamic product displays, user authentication, and seamless checkout processes. I also implemented CRUD functionality for both customer and admin modules, streamlining data management and accessibility.
    </p>

    <p className="text-gray-400 text-sm leading-relaxed mt-4">
      For my FYP, the Student Productivity System, I used Laravel, Vue.js, Firebase, and Flutter to build a system that links Google Classroom and helps students manage notes, projects, and collaboration. I designed a central module to poll classroom data, store updates in Firebase, and expose backend REST APIs for frontend access.
    </p>

    <p className="text-gray-400 text-sm leading-relaxed mt-4">
      I have also built full-stack applications including a real-time chat app using Django, Python, and Firebase, allowing users to verify by email, add contacts, and start instant messaging, and a restaurant management web application using Angular, TypeScript, Node.js, Express.js, and RESTful APIs, featuring authentication, menu management, cart updates, and order processing with secure user experience.
    </p>

    <Link href="/certifications" legacyBehavior>
      <a className="text-purple-400 hover:underline hover:underline-offset-2 cursor-pointer text-lg">
        See all certifications here
      </a>
    </Link>

    {/* Skills List */}
    <div className="mt-8">
      <h3 className="text-gray-300 text-xl mb-3 font-semibold">Tech I Work With:</h3>
      <ul className="grid grid-cols-2 text-gray-400 gap-2 text-sm">
        <li>• Python</li>
        <li>• Java</li>
        <li>• C++</li>
        <li>• JavaScript / TypeScript</li>
        <li>• HTML5 / CSS / Tailwind CSS</li>
        <li>• Vue.js / Node.js</li>
        <li>• Django / Angular / Laravel</li>
        <li>• Firebase / RESTful APIs</li>
        <li>• Flutter (Dart)</li>
        <li>• AWS / Microsoft Azure</li>
        <li>• Power BI / Tableau</li>
        <li>• UI/UX + Wireframing</li>
      </ul>
    </div>
  </div>
</section>


      <section id="experience" className=" text-white px-6 sm:px-20 py-32 min-h-screen">
        <h2 className="text-3xl font-semibold text-gray-300 mb-8 flex items-center gap-3">
          <span className="text-purple-400 text-xl">02.</span>
          Where I've Worked
          <div className="h-px w-40 bg-gray-700 ml-4"></div>
        </h2>
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here’s a brief overview of my experience and projects.
          </p>
        </div>

        {/* Experience List */}
        <div className="max-w-3xl mx-auto space-y-12">

          {/* Softosol */}
          <div>
            <h3 className="text-2xl font-semibold text-purple-400">Softosol</h3>
            <p className="text-gray-500 mt-1 italic">  Web Development Intern @ Softosol (Apr 2024 - Jul 2024)</p>
            <p className="text-gray-400 mt-2">

              • Tech Stack: HTML5, CSS, Bootstrap, Angular TypeScript, Node.js, RestAPI, MongoDB  </p>
            <p className="text-gray-400 mt-2">
              • Developed the company's landing page, enhancing online presence and user engagement.</p>
            <p className="text-gray-400 mt-2">
              • Contributed to an Angular-based e-commerce project, focusing on dynamic product displays, user
              authentication, and seamless checkout processes.</p>
            <p className="text-gray-400 mt-2">
              • Implemented CRUD functionality on both the customer and admin sides, enabling streamlined data
              management and accessibility.</p>

          </div>

          {/* Final Year Project (FYP) */}
          <div>
            <h3 className="text-2xl font-semibold text-purple-400">Student Productivity System - FYP</h3>
            <p className="text-gray-500 mt-1 italic">Student Productivity Management System</p>
            <p className="text-gray-400 mt-2">

              • Tech Stack: Laravel, Vue, Firebase, Flutter.  </p>
            <p className="text-gray-400 mt-2">• Developed a Student productivity system that links up to their Google Classroom and allows them to maintain notes, manage projects,
              and collaborate with their fellow students on projects.</p>
            <p className="text-gray-400 mt-2">• It shall have a central module that shall be responsible for polling the information of the google classroom and then storing any new
              addition in the firebase database. The backend shall have rest APIs accessing data from the firebase database and performing the
              custom logic for each module and the frontend shall access those rest APIs and get the data and show it to the user.</p>


          </div>


          {/* NUML */}
          <div>
            <h3 className="text-2xl font-semibold text-purple-400">National University of Modern Languages (NUML)</h3>
            <p className="text-gray-500 mt-1 italic">Academic Projects</p>
            <p className="text-gray-400 mt-2">
              • Worked on academic projects and research contributions during my studies at NUML.
            </p>
          </div>
        </div>
      </section>

      {/* ===== PROJECTS SECTION ===== */}
      <section id="projects" className="py-32 px-6 md:px-20 ">

        {/* ===== IMAGE PREVIEW MODAL ===== */}
        {previewIndex !== null && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-[999]">

            {/* Click background to close */}
            <div
              className="absolute inset-0 cursor-pointer"
              onClick={() => setPreviewIndex(null)}
            />

            {/* ===== PROJECTS SECTION ===== */}
            <section id="projects" className="py-32 px-6 md:px-20 bg-[#0c0c0c]">

              {/* ===== IMAGE PREVIEW MODAL ===== */}
              {previewIndex !== null && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-[999]">

                  {/* Click background to close */}
                  <div
                    className="absolute inset-0 cursor-pointer"
                    onClick={() => setPreviewIndex(null)}
                  />

                

                  {/* IMAGE */}
                  <img
                    src={previewList[previewIndex]}
                    className="max-w-[75vw] max-h-[80vh] rounded-lg shadow-[0_0_50px_rgba(0,0,0,0.9)] pointer-events-auto"
                  />
                </div>
              )}

            </section>

          </div>
        )}

        <h2 className="text-3xl font-semibold text-gray-300 mb-12 flex items-center gap-3">
          <span className="text-purple-400 text-xl">03.</span> Some Things I’ve Built
          <div className="h-px w-40 bg-gray-700 ml-4"></div>
        </h2>

        <div className="space-y-28">

          {/* ===== PROJECT 1 ===== */}
          <div>
            <h3 className="text-2xl font-medium text-gray-200">Student Productivity System - FYP</h3>
            <p className="text-gray-400 text-sm mt-2 max-w-3xl">
              • Tech Stack: Laravel, Vue, Firebase, Flutter. <br></br>
              • Developed a Student productivity system that links up to their Google Classroom and allows them to maintain notes, manage projects,
              and collaborate with their fellow students on projects.<br></br>
              • It shall have a central module that shall be responsible for polling the information of the google classroom and then storing any new
              addition in the firebase database. The backend shall have rest APIs accessing data from the firebase database and performing the
              custom logic for each module and the frontend shall access those rest APIs and get the data and show it to the user.
            </p>

            <div className="mt-6 flex gap-4 overflow-x-auto scrollbar-hide">
              {[
                "/WhatsApp Image 2025-11-05 at 2.26.43 PM.jpeg",
                "/WhatsApp Image 2025-11-05 at 2.26.44 PM (1).jpeg",
                "/WhatsApp Image 2025-11-05 at 2.26.44 PM.jpeg",
                "/WhatsApp Image 2025-11-05 at 2.26.46 PM (1).jpeg",
                "/WhatsApp Image 2025-11-05 at 2.26.46 PM.jpeg",
                "/WhatsApp Image 2025-11-05 at 2.26.45 PM.jpeg",
                "/WhatsApp Image 2025-11-05 at 2.26.45 PM (1).jpeg",
                "/WhatsApp Image 2025-11-05 at 2.26.43 PM (1).jpeg"
              ].map((src, index, arr) => (
                <img
                  key={index}
                  src={src}
                  onClick={() => { setPreviewList(arr); setPreviewIndex(index); }}
                  className="w-80 h-52 object-cover rounded-md border border-gray-700 hover:scale-105 hover:border-purple-400 transition-all cursor-pointer"
                />
              ))}
            </div>
           <p
  className="mt-2 text-sm font-medium text-purple-400 relative shining-text"
  data-text="Swipe → & tap any image to view in full"
>
  Swipe → & tap any image to view in full
</p>


          </div>

          {/* ===== PROJECT 2 ===== */}
          <div>
            <h3 className="text-2xl font-medium text-gray-200">Restaurant Management Web Application</h3>
            <p className="text-gray-400 text-sm mt-2 max-w-3xl">
              • Tech Stack: Bootstrap, Angular, TypeScript, Node.js, Express.js, RESTful APIs. <br></br>
              • Built a full-stack application with client-side and admin-side modules , featuring authentication, menu management, cart updates,
              and order processing , with Auth Guard and local storage for secure and seamless user experience.
            </p>

            <div className="mt-6 flex gap-4 overflow-x-auto scrollbar-hide">
              {[
                "/WhatsApp Image 2025-11-05 at 2.26.33 PM (2).jpeg",
                "/WhatsApp Image 2025-11-05 at 2.26.33 PM.jpeg",
                "/WhatsApp Image 2025-11-05 at 2.26.32 PM.jpeg",
                "/WhatsApp Image 2025-11-05 at 2.26.33 PM (1).jpeg",
                "/WhatsApp Image 2025-11-05 at 2.26.32 PM (1).jpeg",
              ].map((src, index, arr) => (
                <img
                  key={index}
                  src={src}
                  onClick={() => { setPreviewList(arr); setPreviewIndex(index); }}
                  className="w-80 h-52 object-cover rounded-md border border-gray-700 hover:scale-105 hover:border-purple-400 transition-all cursor-pointer"
                />
              ))}
            </div>
            <p
  className="mt-2 text-sm font-medium text-purple-400 relative shining-text"
  data-text="Swipe → & tap any image to view in full"
>
  Swipe → & tap any image to view in full
</p>
          </div>

          {/* ===== PROJECT 3 ===== */}
          <div>
            <h3 className="text-2xl font-medium text-gray-200">Big Data Analytics on Taylor Swift’s Social Media Presence</h3>
            <p className="text-gray-400 text-sm mt-2 max-w-3xl">
              • Tech Stack: Python, R, Excel, SQL, Power BI, Tableau. <br></br>
              • Conducted a case study on Taylor Swift’s YouTube and Reddit presence, performing data processing, network analysis, and
              visualizations to examine fan engagement and collaboration patterns.
            </p>

            <div className="mt-6 flex gap-4 overflow-x-auto scrollbar-hide">
              {[
                "/Picture1.jpg",
                "/Picture2.jpg",
                "/Picture3.jpg",
                "/Picture4.jpg",
                "/Picture5.jpg",
                "/Picture6.jpg",
                "/Picture7.jpg",
              ].map((src, index, arr) => (
                <img
                  key={index}
                  src={src}
                  onClick={() => { setPreviewList(arr); setPreviewIndex(index); }}
                  className="w-80 h-52 object-cover rounded-md border border-gray-700 hover:scale-105 hover:border-purple-400 transition-all cursor-pointer"
                />
              ))}
            </div>
        <p
  className="mt-2 text-sm font-medium text-purple-400 relative shining-text"
  data-text="Swipe → & tap any image to view in full"
>
  Swipe → & tap any image to view in full
</p>


          </div>

        </div>
      </section>


    {/*Contact Section*/}
<section id="contact" className=" px-6 sm:px-20 py-32 max-w-4xl mx-auto rounded-xl shadow-lg">
  <h2 className="text-3xl font-semibold text-gray-300 mb-8 flex items-center gap-3">
    <span className="text-purple-400 text-xl">04.</span>
    Contact Me
    <div className="h-px w-40 bg-gray-700 ml-4"></div>
  </h2>
  {/* Header */}
  <div className="text-center mb-10">
    <h1 className="text-5xl font-bold text-gray-200 mb-4">What’s Next?</h1>
    <h2 className="text-3xl font-semibold text-gray-300 mb-4">Let’s Talk</h2>
    <p className="text-gray-400 text-lg max-w-xl mx-auto">
      I’m open to new opportunities in Web Development, Application Testing, and related fields, eager to contribute to impactful projects.
      Whether you have a project, a question, or just want to say hi — hit me up.
    </p>
    <br />
    <p className="text-gray-400 text-lg max-w-xl mx-auto mt-2">
      Best way? DM me on LinkedIn or drop an email.
    </p>
    <br />

    {/* Mobile-only Email + Icons */}
    <div className="flex items-center justify-center gap-6 mb-6 md:hidden text-gray-400">
      {/* Email */}
      <a href="mailto:alihassanlodhi1@gmail.com" className="text-sm hover:text-purple-400 transition-colors">
        alihassanlodhi1@gmail.com
      </a>
      {/* Icons */}
      <a href="https://github.com/AliHassanLodhi" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
        <FaGithub size={20} />
      </a>
      <a href="https://linkedin.com/in/ali-hassan-lodhi" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
        <FaLinkedin size={20} />
      </a>
      <a href="https://wa.me/923135874453" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
        <FaWhatsapp size={20} />
      </a>
    </div>

    <div className="mt-8">
      <a
        className="inline-block border-2 border-purple-400 rounded-md px-8 py-3 text-white font-medium text-lg text-center transition-all duration-300 hover:bg-purple-400 hover:text-black"
      >
        Reach out anywhere you like.
      </a>
    </div>
  </div>
</section>


{/* Footer / Copyright */}
<div className="text-center text-gray-500 text-sm mt-10 mb-5">
  All rights reserved @ ALIHASSANLODHI.
</div>



    </>
  );
}
