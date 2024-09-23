import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/app/components/select";

export default function Notes() {
  return (
    <div className="min-h-screen w-fit lg:w-full max-w-[1204px] mx-auto flex flex-col justify-center items-center lg:bg-[url('/grainny.png')] bg-no-repeat bg-cover overflow-hidden text-white py-10 border-b">
      <h1 className="scroll-m-20 text-4xl font-medium tracking-tight lg:text-6xl py-10">
        Our Notes
      </h1>
      <a
        href="/notes/cpp"
        className="underline underline-offset-4 hover:decoration-pink-700 transition-all duration-300 ease-in-out inline-flex gap-2 items-center"
      >
        C++ Notes
      </a>
      <a
        href="/notes/py"
        className="underline underline-offset-4 hover:decoration-pink-700 transition-all duration-300 ease-in-out inline-flex gap-2 items-center"
      >
        Python Notes
      </a>
      <a
        href="/notes/web"
        className="underline underline-offset-4 hover:decoration-pink-700 transition-all duration-300 ease-in-out inline-flex gap-2 items-center"
      >
        Website Development
      </a>
    </div>
  );
}
