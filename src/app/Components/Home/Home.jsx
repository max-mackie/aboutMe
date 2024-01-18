"use client";
import React, { useState, useEffect } from "react";
import Loading from "../Loading/Loading";
import Navbar from "../Navbar/Navbar";
import Intro from "../Intro/Intro";
import AboutMe from "../AboutMe/AboutMe";
import Work from "../Work/Work";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Icons from "../Icons/Icons";
import Email from "../Email/Email";

export default function Home() {
  const [pageLoaded, setPageLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setPageLoaded(true);
      console.log("loaded");
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <div>{pageLoaded && <Loading />}</div>;
  }

  return (
    <>
      <Icons />
      <Email />
      <main className="bg-navy min-h-screen flex flex-col flex-wrap">
        <Navbar />
        <Intro />
        <AboutMe />
        <Work />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
