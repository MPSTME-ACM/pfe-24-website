import Image from "next/image";
import Script from "next/script";
import Form from "./components/form";
export default function Home() {
  return (
    <div className="min-h-screen w-fit md:w-full flex flex-col md:flex-row justify-center md:justify-around items-center  md:bg-[url('/grainny.png')] bg-no-repeat bg-cover overflow-hidden text-white px-10 py-10 md:py-0">
      <div className=" max-w-[80ch] space-y-5 mb-8 px-4">
        <span className="inline-flex gap-5">
          {" "}
          <Image
            src={"/acm.svg"}
            width={70}
            height={70}
            alt="ACM Logo"
            priority={true}
            className="animate-fade-right animate-duration-700"
          />
          <Image
            src={"/trc.png"}
            width={140}
            height={140}
            alt="TRC Logo"
            priority={true}
            className="animate-fade-right animate-duration-700"
          />
        </span>
        <h1 className="scroll-m-20 text-4xl font-medium tracking-tight lg:text-6xl animate-fade-right animate-duration-700 -mt-20 md:-mt-10">
          Programming For{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9046D4] to-[#FFA7FB]">
            Everyone
          </span>
        </h1>
        <p className="font-medium text-white/75 tracking-tight lg:text-2xl animate-fade-up animate-delay-200 animate-duration-700">
          A 3-day workshop where you can choose to learn the basics of Python,
          C++, or Web Development! It would be held this 18 19 and 20 September. 
        </p>
        <p className="font-normal text-white/65 tracking-tight lg:text-2xl animate-fade-up animate-delay-200 animate-duration-700">
          For More Details Contact:
        </p>{" "}
        <ul className="list-disc ml-4 decoration-pink-500 font-normal space-y-2 -pt-2 lg:text-xl text-white/65 animate-fade-up animate-delay-300 animate-duration-700">
          <li>
            <a
              href="https://wa.me/919326979089"
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
              Yash Kalbhor
            </a>
          </li>
          <li>
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
          </li>
        </ul>
      </div>
      <div className="w-full md:w-1/3 animate-fade animate-delay-200 md:animate-delay-500 animate-duration-700 md:h-[85vh] md:overflow-y-scroll px-4">
        <Form />
      </div>
    </div>
  );
}
