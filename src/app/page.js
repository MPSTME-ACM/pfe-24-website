import Image from "next/image";
import Script from "next/script";
import Form from "./components/form";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { BentoCard, BentoGrid } from "./components/bento";

function Hero() {
  return (
    <div
      className="min-h-screen w-fit lg:w-full max-w-[1204px] mx-auto flex flex-col lg:flex-row justify-center lg:justify-between items-center  lg:bg-[url('/grainny.png')] bg-no-repeat bg-cover overflow-hidden text-white py-10 border-b "
      id="register"
    >
      <div className=" w-full max-w-[80ch] space-y-5 mb-8 px-4 md:px-0 ">
        <h1 className="scroll-m-20 text-4xl font-medium tracking-tight lg:text-6xl animate-fade-up animate-duration-700 delay-500 ">
          Programming For{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9046D4] to-[#FFA7FB]">
            Everyone
          </span>
        </h1>
        <p className="font-medium text-white/75 tracking-tight lg:text-2xl animate-fade-up animate-delay-[600ms] animate-duration-700">
          A 3-day workshop where you choose to learn the basics of Python,
          C++, or Web Development! It was held on the dates 18 19 and 20 September.
        </p>
        <Link
          href="/notes"
          className=" inline-flex gap-2 items-center justify-center align-bottom font-medium underline underline-offset-4 hover:decoration-pink-700 transition-all duration-300 ease-in-out animate-fade-up animate-delay-[700ms] animate-duration-700"
        >
          Notes <ChevronDown></ChevronDown>
        </Link>
      </div>
      <div className="w-full animate-fade animate-delay-200 lg:animate-delay-[800ms] animate-duration-700 lg:h-[85vh] lg:overflow-y-scroll px-4 my-auto ">
      </div>
    </div>
  );
}

function About() {
  const features = [
    {
      name: "Notes and Reference Code",
      description:
        "We have provide all the notes you need, open for all along with code you can refer to while attending our workshop.",
      href: "/notes",
      className: "lg:col-start-1 lg:col-end-3 lg:row-start-3 lg:row-end-4",
    },
    {
      name: "Taught For Free By Students",
      description:
        "Yes, you heard it right! This was a free workshop, where senior student mentors were your instructors, addressing all your doubts with personalized attention! ",
      href: "/",
      cta: "notes",
      className: "lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-3",
    },
    {
      name: "Checkout Our Syllabus",
      description: (
        <div className="flex flex-col gap-4 w-full rounded-2xl pt-2 text-sm md:text-base">
          <Link
            href="/syllabus"
            className="px-3 md:px-5 py-3 border rounded-3xl"
          >
            <p className="inline-flex gap-2 items-center justify-center align-bottom">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <path
                  fill="#659ad2"
                  d="M29 10.232a2.4 2.4 0 0 0-.318-1.244a2.45 2.45 0 0 0-.936-.879q-5.194-2.868-10.393-5.733a2.64 2.64 0 0 0-2.763.024c-1.378.779-8.275 4.565-10.331 5.706A2.29 2.29 0 0 0 3 10.231V21.77a2.4 2.4 0 0 0 .3 1.22a2.43 2.43 0 0 0 .954.9c2.056 1.141 8.954 4.927 10.332 5.706a2.64 2.64 0 0 0 2.763.026q5.19-2.871 10.386-5.733a2.44 2.44 0 0 0 .955-.9a2.4 2.4 0 0 0 .3-1.22V10.232"
                />
                <path
                  fill="#00599c"
                  d="M28.549 23.171a2 2 0 0 0 .147-.182a2.4 2.4 0 0 0 .3-1.22V10.232a2.4 2.4 0 0 0-.318-1.244c-.036-.059-.089-.105-.13-.16L16 16Z"
                />
                <path
                  fill="#004482"
                  d="M28.549 23.171L16 16L3.451 23.171a2.4 2.4 0 0 0 .809.72c2.056 1.141 8.954 4.927 10.332 5.706a2.64 2.64 0 0 0 2.763.026q5.19-2.871 10.386-5.733a2.4 2.4 0 0 0 .808-.719"
                />
                <path
                  fill="#fff"
                  d="M19.6 18.02a4.121 4.121 0 1 1-.027-4.087l3.615-2.073A8.309 8.309 0 0 0 7.7 16a8.2 8.2 0 0 0 1.1 4.117a8.319 8.319 0 0 0 14.411-.017z"
                />
                <path
                  fill="#fff"
                  d="M24.076 15.538h-.926v-.921h-.925v.921h-.926v.923h.926v.92h.925v-.92h.926zm3.473 0h-.926v-.921h-.926v.921h-.926v.923h.926v.92h.926v-.92h.926z"
                />
              </svg>
              C++
            </p>
          </Link>
          <Link
            href="/syllabus"
            className="px-3 md:px-5 py-3 border rounded-3xl"
          >
            <p className="inline-flex gap-2 items-center justify-center bg-black align-bottom hover:bg-blue-300 bg-opacity-60 backdrop-blur-lg">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32.13"
                height="32"
                viewBox="0 0 256 255"
              >
                <defs>
                  <linearGradient
                    id="logosPython0"
                    x1="12.959%"
                    x2="79.639%"
                    y1="12.039%"
                    y2="78.201%"
                  >
                    <stop offset="0%" stop-color="#387EB8" />
                    <stop offset="100%" stop-color="#366994" />
                  </linearGradient>
                  <linearGradient
                    id="logosPython1"
                    x1="19.128%"
                    x2="90.742%"
                    y1="20.579%"
                    y2="88.429%"
                  >
                    <stop offset="0%" stop-color="#FFE052" />
                    <stop offset="100%" stop-color="#FFC331" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#logosPython0)"
                  d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072M92.802 19.66a11.12 11.12 0 0 1 11.13 11.13a11.12 11.12 0 0 1-11.13 11.13a11.12 11.12 0 0 1-11.13-11.13a11.12 11.12 0 0 1 11.13-11.13"
                />
                <path
                  fill="url(#logosPython1)"
                  d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.518 33.897m34.114-19.586a11.12 11.12 0 0 1-11.13-11.13a11.12 11.12 0 0 1 11.13-11.131a11.12 11.12 0 0 1 11.13 11.13a11.12 11.12 0 0 1-11.13 11.13"
                />
              </svg>
              Python
            </p>
          </Link>
          <Link
            href="/syllabus"
            className="px-3 md:px-5 py-3 border rounded-3xl"
          >
            <p className="inline-flex gap-2 items-center justify-center align-bottom">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 16 16"
              >
                <g
                  fill="none"
                  stroke="#8aadf4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M8 11.3c4.14 0 7.5-1.28 7.5-2.86S12.14 5.58 8 5.58S.5 6.86.5 8.44s3.36 2.87 7.5 2.87Z" />
                  <path d="M5.52 9.87c2.07 3.6 4.86 5.86 6.23 5.07c1.37-.8.8-4.34-1.27-7.93S5.62 1.16 4.25 1.95s-.8 4.34 1.27 7.92" />
                  <path d="M5.52 7.01c-2.07 3.59-2.64 7.14-1.27 7.93s4.16-1.48 6.23-5.07c2.07-3.58 2.64-7.13 1.27-7.92c-1.37-.8-4.16 1.47-6.23 5.06" />
                  <path d="M8.5 8.44a.5.5 0 0 1-.5.5a.5.5 0 0 1-.5-.5a.5.5 0 0 1 .5-.5a.5.5 0 0 1 .5.5" />
                </g>
              </svg>
              Web Development
            </p>
          </Link>
        </div>
      ),
      href: "/syllabus",
      className: "lg:row-start-1 lg:row-end-4 lg:col-start-3 lg:col-end-5",
    },
  ];

  return (
    <div
      className="min-h-screen w-fit lg:w-full max-w-[1204px] mx-auto flex flex-col justify-center items-start  lg:bg-[url('/grainny.png')] bg-no-repeat bg-cover overflow-hidden text-white px-4 md:px-0 pb-10 gap-10"
      id="about"
    >
      <h1 className="scroll-m-20 text-4xl font-medium tracking-tight lg:text-6xl animate-fade-right animate-duration-700 ">
        What we{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9046D4] to-[#FFA7FB]">
          Offered
        </span>
      </h1>
      <BentoGrid className="lg:grid-rows-3">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    </div>
  );
}

function Contact() {
  return (
    <div className="w-full max-w-[1204px] mx-auto flex flex-col justify-center md:justify-start items-start  lg:bg-[url('/grainny.png')] bg-no-repeat bg-cover overflow-hidden text-white px-4 md:px-0 pb-10 gap-10">
      {/* <h1 className="scroll-m-20 text-4xl font-medium tracking-tight lg:text-6xl animate-fade-right animate-duration-700 ">
        Any Doubts? <br className="md:hidden"></br>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9046D4] to-[#FFA7FB]">
          Contact Us !
        </span>
      </h1> */}
      <div className="flex flex-col gap-8 w-full text-lg md:text-2xl">
        <a
          href="https://wa.me/919326979089"
          className=" underline underline-offset-4 hover:decoration-pink-700 transition-all duration-300 ease-in-out inline-flex gap-2 items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
          >
            <path
              fill="#FFA7FB"
              d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"
            />
          </svg>
          Yash Kalbhor
        </a>
        <a
          href="https://wa.me/918928179342"
          className=" underline underline-offset-4 hover:decoration-pink-700 transition-all duration-300 ease-in-out inline-flex gap-2 items-center"
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
          >
            <path
              fill="#FFA7FB"
              d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"
            />
          </svg>
          Nidhi Shah
        </a>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <div className="w-full max-w-[1204px] glowiee h-16"></div>
      <About />
      <div className=" w-full max-w-[1204px] glowiee h-16"></div>
    </>
  );
}
