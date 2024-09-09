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
  const [imageSrc, setImageSrc] = useState("/cppy.svg");

  useEffect(() => {
    const updateImageSrc = () => {
      if (typeof window !== "undefined") {
        const isMobile = window.innerWidth < 768;
        if (isMobile) {
          switch (selectedDomain) {
            case "cpp":
              setImageSrc("/cpp.svg");
              break;
            case "py":
              setImageSrc("/py.svg");
              break;
            case "webdev":
              setImageSrc("/webdev.svg");
              break;
            default:
              setImageSrc("/cpp.svg");
          }
        } else {
          setImageSrc(
            selectedDomain === "webdev" ? "/webdev.svg" : "/cppy.svg"
          );
        }
      }
    };

    // Set initial image source
    updateImageSrc();

    // Add event listener for window resize
    if (typeof window !== "undefined") {
      window.addEventListener("resize", updateImageSrc);

      // Cleanup function to remove event listener
      return () => window.removeEventListener("resize", updateImageSrc);
    }
  }, [selectedDomain]);

  useEffect(() => {
    // Set default value on component mount based on screen size
    if (typeof window !== "undefined") {
      const isMobile = window.innerWidth < 768;
      setSelectedDomain(isMobile ? "cpp" : "cppy");
    }
  }, []);

  const handleSelectChange = (value) => {
    setSelectedDomain(value);
  };

  return (
    <div className="min-h-screen w-fit lg:w-full max-w-[1204px] mx-auto flex flex-col justify-center items-center lg:bg-[url('/grainny.png')] bg-no-repeat bg-cover overflow-hidden text-white py-10 border-b animate-fade-up animate-duration-700 delay-700">
      <h1 className="scroll-m-20 text-4xl font-medium tracking-tight lg:text-6xl py-10">
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
        src={imageSrc}
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
