import React from "react";
import Image from "next/image";
import "./Projects.css";

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col text-slate mt-48 mx-10 scroll-mt-36"
    >
      <h2 className="sm:flex mb-10 whitespace-nowrap items-center font-bold text-2xl text-lightest-slate">
        <span className="text-lg font-normal text-green mr-4">03.</span>
        Some Things I&apos;ve Built
        <div className=" mt-2 sm:w-[100%] sm:flex-grow bg-dark-slate h-[1px] sm:mx-2 sm:mt-0 mr-16"></div>
      </h2>
      <div className="flex justify-center justify-center items-center responsive-hide">
        <div className="relative w-full max-w-7xl flex justify-between items-center">
          <div className="w-2/3 xl:w-1/2 z-2">
            <Image
              className="rounded " //need to make sure nav bar is higher than this
              src="/IMG_0562.jpg" // Make sure the file name is URL-friendly
              alt="Research Paper"
              style={{
                width: "100%",
                height: "auto",
              }}
              width={300}
              height={100}
            />
          </div>
          <div className="absolute left-40 p-8 rounded-lg text-right z-4 ">
            <h5 className="text-green pb-2">Featured Project</h5>
            <h3 className="text-2xl font-bold text-lightest-slate pb-8">
              Machine Learning Publication
            </h3>
            <div className="bg-light-navy py-4 px-8 rounded mb-5">
              <p className="py-4 px-8 mb-10">
                A reaserch project looking at using reinforcment learning AI as
                a load balancing algorithm to better distribute data center load
                between sites depending on electricity price and renewable
                energy availability
              </p>
            </div>
            <div className="flex flex-wrap justify-end">
              <p className="mx-2">Python</p>
              <p className="mx-2">GCP</p>
              <p className="mx-2">Keras</p>
              <p className="mx-2">Terraform</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" relative bg-[url('/IMG_0562.jpg')] bg-contain bg-center bg-no-repeat py-10 px-5 responsive-showen">
        <div className="absolute inset-0 bg-dark-navy bg-opacity-90 w-full h-auto"></div>
        <div className="relative z-2 text-lightest-slate text-right">
          <h5 className="text-green pb-2">Featured Project</h5>
          <h3 className="text-2xl font-bold text-lightest-slate pb-8">
            Machine Learning Publication
          </h3>
          <p className="mb-5">
            A reaserch project looking at using reinforcment learning AI as a
            load balancing algorithm to better distribute data center load
            between sites depending on electricity price and renewable energy
            availability
          </p>
          <div className="flex flex-wrap justify-end">
            <p className="mx-2">Python</p>
            <p className="mx-2">GCP</p>
            <p className="mx-2">Keras</p>
            <p className="mx-2">Terraform</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
