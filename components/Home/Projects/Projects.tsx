import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <div id="projects" className="pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        A small selection of recent <br /> {""}
        <span className="text-cyan-300">projects</span>
      </h1>
      <div className="w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
        {/* 1st project */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="0"
        >
          <Image
            src="/images/p1.png"
            alt="img"
            width={800}
            height={650}
            className="rounded-lg"
          />
          <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
            <Link href="https://food-delivery-project-1znw.vercel.app/">
              {" "}
              Food Delivery Project
            </Link>
          </h1>
          <h1 className="pt-2 font-medium text-white/80">
            {" "}
            React js, Node ,Frontend, Backend
          </h1>
        </div>

        {/* 2nd project */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="100"
        >
          <Image
            src="/images/p2.jpg"
            alt="img"
            width={800}
            height={650}
            className="rounded-lg"
          />
          <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
            <Link href="https://myntra-clone-lemon-eight.vercel.app/">
              {" "}
              Shopping Web site
            </Link>
          </h1>
          <h1 className="pt-2 font-medium text-white/80">
            Html ,Css, Frontend
          </h1>
        </div>

        {/* 3rd project */}

        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
        >
          <Image
            src="/images/p3.jpg"
            alt="img"
            width={800}
            height={650}
            className="rounded-lg"
          />
          <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
            <Link href="https://sunil-portfolio-ecru.vercel.app/">
              Personal Portfolio
            </Link>
          </h1>
          <h1 className="pt-2 font-medium text-white/80">
            Next js, Frontend Project,Responsive
          </h1>
        </div>

        {/* 4th project */}

        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="300"
        >
          <Image
            src="/images/p4.jpg"
            alt="img"
            width={800}
            height={650}
            className="rounded-lg"
          />
          <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
            SaaS Dashboard Development
          </h1>
          <h1 className="pt-2 font-medium text-white/80"> Apps , UI/UX</h1>
        </div>
      </div>
    </div>
  );
};

export default Projects;
