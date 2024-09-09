import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/app/components/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  return (
    <header className="sticky top-4 md:top-8 flex h-20 items-center justify-between gap-4 border-b border-l border-r bg-neutral-950 bg-opacity-60 backdrop-filter backdrop-blur-lg px-8 md:px-10 z-50 max-w-[1204px] rounded-2xl mx-auto">
      <nav className=" hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6 animate-fade-right animate-duration-700">
        <a href="/">
          <Image
            src={"/acm.svg"}
            width={70}
            height={70}
            alt="ACM Logo"
            priority={true}
          />
        </a>
      </nav>
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6 animate-fade-right animate-duration-700 delay-150">
        <Link
          href="/#about"
          className="underline underline-offset-4 hover:decoration-pink-700 transition-all duration-300 ease-in-out inline-flex gap-2 items-center"
        >
          About Us
        </Link>
        <Link
          href="/#register"
          className="underline underline-offset-4 hover:decoration-pink-700 transition-all duration-300 ease-in-out inline-flex gap-2 items-center"
        >
          Register Now!
        </Link>
        <Link
          href="/syllabus"
          className="underline underline-offset-4 hover:decoration-pink-700 transition-all duration-300 ease-in-out inline-flex gap-2 items-center"
        >
          Syllabus
        </Link>
      </nav>
      <nav className="gap-2 text-lg font-medium flex flex-row items-center md:gap-5 md:text-sm lg:gap-6 animate-fade-right animate-duration-700 delay-300">
        <a href="/">
          <Image
            src={"/acm.svg"}
            width={70}
            height={70}
            alt="ACM Logo"
            priority={true}
            className="md:hidden animate-fade-right animate-duration-700 size-14 md:size-20"
          />
        </a>
        <a href="/">
          <Image
            src={"/trc.png"}
            width={140}
            height={140}
            alt="TRC Logo"
            priority={true}
            className="animate-fade-right animate-duration-700  md:size-40 px-[-2px]"
          />
        </a>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Menu className="h-6 w-6 shrink-0 md:hidden" />
        </SheetTrigger>
        <SheetContent className="pt-20">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="/#about"
              className="flex items-center gap-2 text-lg font-semibold underline underline-offset-4 hover:decoration-pink-700 transition-all duration-300 ease-in-out"
            >
              About
            </Link>
            <Link
              href="/#register"
              className="flex items-center gap-2 text-lg font-semibold underline underline-offset-4 hover:decoration-pink-700 transition-all duration-300 ease-in-out"
            >
              Register Now!
            </Link>
            <Link
              href="/syllabus"
              className="flex items-center gap-2 text-lg font-semibold underline underline-offset-4 hover:decoration-pink-700 transition-all duration-300 ease-in-out"
            >
              Syllabus
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}
