import React from "react";
import ResumeCard from "./ResumeCard";
import { FaCodepen, FaReact } from "react-icons/fa";
import { BsDatabase } from "react-icons/bs";
import { BiBadge } from "react-icons/bi";

const Resume = () => {
  return (
    <div id="resume" className="pt-20 pb-16">
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/*Work Experience */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            My Work <span className="text-cyan-200">Experience</span>
          </h1>
          <div
            className="mt-10"
            data-aos="zoom-in"
            data-aos-anchor-placement="top-center"
          >
            <ResumeCard
              Icon={FaReact}
              role="Front-End Developer"
              description="Passionate Frontend Developer skilled in building modern, responsive, and high-performance web applications using React.js and Next.js. Experienced in creating dynamic user interfaces, optimizing performance, and delivering seamless user experiences with clean, maintainable code."
            />

            <ResumeCard
              Icon={BsDatabase}
              role="Backend Developer"
              description="Dedicated Backend Developer with experience in building secure, scalable, and efficient server-side applications. Proficient in Node.js, Express.js, and database management using MongoDB. Skilled in designing RESTful APIs, handling authentication, and integrating frontend interfaces for seamless full-stack functionality."
            />
            {/* <ResumeCard
              Icon={FaCodepen}
              role="Full-Stack Developer"
              description=""
            /> */}
          </div>
        </div>
        {/*Education */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            My <span className="text-cyan-200">Education</span>
          </h1>
          <div
            className="mt-10"
            data-aos="zoom-out"
            data-aos-anchor-placement="top-center"
            data-aos-delay="300"
          >
            <ResumeCard
              Icon={BiBadge}
              role="Master of Computer Applications (MCA)"
              description=""
              date="2013-2016"
            />
            <ResumeCard
              Icon={FaReact}
              role="Bachelor of Computer Applications (BCA)"
              date="2010-2013"
              description=""
            />

            <ResumeCard
              Icon={BsDatabase}
              role="Certificate in FrontEnd Development from Engramers Institute Bikaner"
              date="Feb 2025- June-2025"
              description=""
            />

            <ResumeCard
              Icon={FaReact}
              role="Internship"
              description="Full Stack Development Intern
G-Axon Tech Pvt. Ltd., Bikaner"
              date="July 2025-Current"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
