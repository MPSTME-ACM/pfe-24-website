export default function Notes() {
  return (
    <div className="h-[90vh] w-full max-w-lg flex flex-col justify-center mx-auto lg:bg-[url('/grainny.png')] gap-8 bg-no-repeat bg-cover overflow-hidden text-white border-b">
      <h1 className="scroll-m-20 text-4xl font-medium tracking-tight lg:text-6xl animate-fade-up animate-duration-700 delay-700">
        Our{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9046D4] to-[#FFA7FB]">
          Notes!
        </span>
      </h1>
      <a href="/notes/cpp" className="underline underline-offset-4 hover:decoration-pink-700 transition-all duration-300 ease-in-out inline-flex gap-2 items-center">
        C++ Notes
      </a>
      <a href="/notes/python" className="underline underline-offset-4 hover:decoration-pink-700 transition-all duration-300 ease-in-out inline-flex gap-2 items-center">
        Python Notes
      </a>
      <a href="/notes/web" className="underline underline-offset-4 hover:decoration-pink-700 transition-all duration-300 ease-in-out inline-flex gap-2 items-center">
        Website Development
      </a>
    </div>
  );
}
