"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/app/components/select";

export default function Syllabus() {
  const [selectedDomain, setSelectedDomain] = useState("cppy");

  useEffect(() => {
    // Set default value on component mount
    const isMobile = window.innerWidth < 768;
    setSelectedDomain(isMobile ? "cpp" : "cppy");
  }, []);

  const handleSelectChange = (value) => {
    setSelectedDomain(value);
  };

  const getImageSrc = () => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      switch (selectedDomain) {
        case "cpp":
          return "/cpp.svg";
        case "py":
          return "/py.svg";
        case "webdev":
          return "/webdev.svg";
        default:
          return "/cpp.svg";
      }
    } else {
      return selectedDomain === "webdev" ? "/webdev.svg" : "/cppy.svg";
    }
  };

  return (
    <div className="min-h-screen w-fit lg:w-full max-w-[1204px] mx-auto flex flex-col justify-center items-center lg:bg-[url('/grainny.png')] bg-no-repeat bg-cover overflow-hidden text-white py-10 border-b">
      <h1 className="scroll-m-20 text-4xl font-medium tracking-tight lg:text-6xl animate-fade-up animate-duration-700 delay-500 py-10">
        Our{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9046D4] to-[#FFA7FB]">
          Syllabus
        </span>
      </h1>
      <Select onValueChange={handleSelectChange} value={selectedDomain}>
        <SelectTrigger className="w-[230px]">
          <SelectValue placeholder="Select Your Domain" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Choose One</SelectLabel>
            <SelectItem value="cppy" className="hidden md:flex">
              C++ and Python
            </SelectItem>
            <SelectItem value="webdev">Website Development</SelectItem>
            <SelectItem value="cpp" className="md:hidden">
              C++
            </SelectItem>
            <SelectItem value="py" className="md:hidden">
              Python
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Image
        src={getImageSrc()}
        alt="Syllabus"
        width={1000}
        height={1000}
        className={`mt-8 ${
          selectedDomain === "webdev" ? "w-full md:w-1/2 mx-auto" : "w-full"
        }`}
      />
    </div>
  );
}
