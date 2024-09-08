import { ArrowRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const BentoGrid = ({ children, className }) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[18rem] grid-col-1 md:grid-cols-4 gap-4",
        className
      )}
    >
      {children}
    </div>
  );
};
const BentoCard = ({ name, className, description, href, cta }) => (
  <a
    href={href}
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-center overflow-hidden rounded-xl",
      "transform-gpu bg-black backdrop-blur-2xl border border-blue-200/20 [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className
    )}
  >
    <div className=" z-10 flex transform-gpu flex-col justify-evenly gap-1 p-6 transition-all duration-300  h-full">
      <h3 className="text-2xl font-semibold text-neutral-300">{name}</h3>
      <p className=" text-lg max-w-lg text-neutral-400">{description}</p>
    </div>
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-neutral-800/10 backdrop-blur-2xl" />
  </a>
);

export { BentoCard, BentoGrid };
