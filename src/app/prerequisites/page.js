"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/app/components/select";

function Web({ os }) {
  return (
    <div className="art">
      <h1>
        Hello There! Here are a few prerequisites for the Web Development
        Workshop
      </h1>
      <p>
        We will be needing VScode for editing our code, Git for version control
        and Github for hosting our code.Lets go step by step installing them.
      </p>
      <h1>First we need to install VScode</h1>
      <a
        href="https://code.visualstudio.com/download"
        target="_blank"
        rel="noreferrer"
      >
        Link to download VScode
      </a>
      <h1>Configuring Git and Github for Web Development on {os}</h1>
      <p>
        This is needed for hosting your code on Vercel, a popular hosting
        service for web applications
      </p>
      <a href="https://git-scm.com/downloads" target="_blank" rel="noreferrer">
        Link to download Git
      </a>
      <a href="https://github.com/signup" target="_blank" rel="noreferrer">
        Link to sign up for Github
      </a>
      {
        // check if os is windows
        os === "Windows" ? (
          <iframe
            className="w-full aspect-video mt-4"
            src="https://www.youtube.com/embed/AdzKzlp66sQ"
            allowFullScreen
          ></iframe>
        ) : (
          <iframe
            className="w-full aspect-video mt-4"
            src="https://www.youtube.com/embed/B4qsvQ5IqWk"
            allowFullScreen
          ></iframe>
        )
      }
      <h1>Then we Need NodeJs for running our React App!</h1>
      <a
        href="https://nodejs.org/en/download/"
        target="_blank"
        rel="noreferrer"
      >
        Link to download NodeJs
      </a>
      <h1>Finally, a few extensions for VScode</h1>
      <p>
        We&apos;ll be using Tailwindcss for styling our website, so lets install{" "}
        <a
          href="https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss"
          target="_blank"
          rel="noreferrer"
        >
          Tailwind Intellisense
        </a>
      </p>
      <p>
        For formatting our code, we&apos;ll be using{" "}
        <a
          href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode"
          target="_blank"
          rel="noreferrer"
        >
          Prettier
        </a>{" "}
      </p>
    </div>
  );
}

function Python({ os }) {
  return (
    <div className="art">
      <h1>
        Setting up Python Development Environment on{" "}
        {os.charAt(0).toUpperCase() + os.slice(1)}
      </h1>
      <p>
        We will be using Pycharm IDE for our Workshop, so lets install it.
        <a
          href="https://www.jetbrains.com/pycharm/download"
          target="_blank"
          rel="noreferrer"
        >
          Link to download Pycharm
        </a>
      </p>
      {os === "Windows" ? (
        <iframe
          className="w-full aspect-video mt-4"
          src="https://www.youtube.com/embed/EWTLWH-dH90"
          allowFullScreen
        ></iframe>
      ) : (
        <iframe
          className="w-full aspect-video mt-4"
          src="https://www.youtube.com/embed/ZVjQFjOI49c"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
}

function CPP({ os }) {
  return (
    <div className="art">
      <h1>Setting up C++ Development Environment on {os}</h1>
      <p>
        Lets get started with C++ programming by setting up your development
        environment on {os}.
      </p>
      {os == "Windows" ? (
        <p>
          We&apos;ll be using Msys2 for C++ development, so lets install it.
          <a
            href="https://code.visualstudio.com/docs/cpp/config-mingw"
            target="_blank"
            rel="noreferrer"
          >
            Link to Steps for installing Msys2
          </a>
        </p>
      ) : (
        <p>
          We&apos;ll be using Clang for C++ development, so lets install it.
          <a
            href="https://code.visualstudio.com/docs/cpp/config-clang-mac"
            target="_blank"
            rel="noreferrer"
          >
            Link to Steps for installing Clang
          </a>
        </p>
      )}
      {
        // check if os is windows
        os === "Windows" ? (
          <iframe
            className="w-full aspect-video mt-4"
            src="https://www.youtube.com/embed/oC69vlWofJQ"
            allowFullScreen
          ></iframe>
        ) : (
          <p></p>
        )
      }
    </div>
  );
}

export default function Prerequisites() {
  const [domain, setDomain] = useState("cpp");
  const [os, setOS] = useState("windows");

  const renderContent = () => {
    switch (domain) {
      case "web":
        return <Web os={os.charAt(0).toUpperCase() + os.slice(1)} />;
      case "py":
        return <Python os={os.charAt(0).toUpperCase() + os.slice(1)} />;
      case "cpp":
        return <CPP os={os.charAt(0).toUpperCase() + os.slice(1)} />;
      default:
        return <Web os={os.charAt(0).toUpperCase() + os.slice(1)} />;
    }
  };

  return (
    <div className="min-h-screen w-full max-w-3xl mx-auto flex flex-col justify-center lg:bg-[url('/grainny.png')] bg-no-repeat bg-cover overflow-hidden text-white py-10 border-b px-4 ">
      <h1 className="scroll-m-20 text-4xl font-medium tracking-tight lg:text-5xl animate-fade-up animate-duration-700 delay-700 py-10">
        Here are a{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9046D4] to-[#FFA7FB]">
          few prerequisites
        </span>
      </h1>
      <p className="mb-6 text-xl">Choose Your Domain and Operating System!</p>
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <Select
          onValueChange={(value) => setDomain(value)}
          defaultValue={domain}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Domain" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Domain</SelectLabel>
              <SelectItem value="web">Web Development</SelectItem>
              <SelectItem value="py">Python</SelectItem>
              <SelectItem value="cpp">C++</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select onValueChange={(value) => setOS(value)} defaultValue={os}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select OS" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Operating System</SelectLabel>
              <SelectItem value="mac">Mac</SelectItem>
              <SelectItem value="windows">Windows</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <article className="w-full ">{renderContent()}</article>
    </div>
  );
}
