import React from "react";
import Image from "next/image";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <section id="about" className="text-slate mt-96 mx-10 flex flex-col">
      <h2 className="flex items-center font-bold text-2xl text-lightest-slate">
        <span className="text-lg font-normal text-green mr-4">01.</span>
        About Me
        <span className="flex-grow bg-dark-slate h-[2px] mx-2 mr-16"></span>
      </h2>
      <div className="flex flex-col lg:flex-row md:items-center">
        <div>
          <p className="mt-6 ">
            Hello! My name is Max and I enjoy things that live on the internet.
            My interest in web development started back in 2017 when I started
            programing during my engineering degree. - Turns out hacking
            together an accelerometer taught me alot about how things work.
          </p>
          <p className="mt-4">
            Fast-forward to today, and I have been working as a software
            engineer building custom applications for BMI group and I have
            published achidemic research in the feild of AI
          </p>
          <p className="mt-4 ">
            I have also continued developing in my free time building websites
            for XXX and XXX
          </p>
          <p className="mt-4">
            Here are a few technologies I&apos;ve been working with recently:
          </p>
          <ul className="list-none pt-5  columns-2 space-y-2 mb-10">
            <li className=" text-slate before:content-['▸_'] before:text-green before:pr-2">
              JavaScript (ES6+)
            </li>
            <li className="text-slate before:content-['▸_'] before:text-green before:pr-2">
              TypeScript
            </li>
            <li className="text-slate before:content-['▸_'] before:text-green before:pr-2">
              React
            </li>
            <li className="text-slate before:content-['▸_'] before:text-green before:pr-2">
              Node.js
            </li>
            <li className="text-slate before:content-['▸_'] before:text-green before:pr-2">
              Vue.js
            </li>
            <li className="text-slate before:content-['▸_'] before:text-green before:pr-2">
              Docker
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center w-full h-full pr-10">
          <div className="basis-4/5 max-h-[300px] max-w-[300px] relative animation-container">
            <Image
              className="rounded relative z-10 hover-up" //need to make sure nav bar is higher than this
              src="/IMG_8324 (1).PNG" // Make sure the file name is URL-friendly
              alt="Photo of Max"
              style={{
                width: "100%",
                height: "auto",
              }}
              width={200}
              height={200}
            />
            <div className="bg-green top-0 absolute w-full h-full rounded z-20 opacity-30 hover-hidden"></div>
            <div className=" border border-green absolute ml-5 mt-5 top-0 w-full h-full rounded hover-down"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
