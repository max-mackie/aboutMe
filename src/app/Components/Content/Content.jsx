"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Loading from "../Loading/Loading";
import Navbar from "../Navbar/Navbar";
import Icons from "../Icons/Icons";
import "./Content.css";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2100);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main className="bg-navy flex flex-col">
      <Navbar />
      <h1 className="text-white p-32">Max Mackie</h1>
      <h3 className="text-white m-32">I build things for the web</h3>
      <p className="text-white m-32">
        I’m a software engineer specializing in building (and occasionally
        designing) exceptional digital experiences. Currently, I’m focused on
        building accessible, human-centered products at Upstatement.
      </p>
      <Icons />
    </main>
  );
}
