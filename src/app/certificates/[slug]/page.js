import Image from "next/image";
import Navbar from "@/app/components/navbar";
import About from "@/app/components/about";
import { Raleway, JetBrains_Mono } from "next/font/google";
import axios from "axios";
import { notFound } from "next/navigation";
import BlurFade from "@/app/components/ui/blur-fade";

const raleway = Raleway({ subsets: ["latin"] });
const jetbrains_mono = JetBrains_Mono({ subsets: ["latin"] });

export const dynamic = "force-dynamic"; // Ensure page is always server-rendered

export default async function Home({ params }) {
  const { slug } = params;

  let certificate;

  try {
    // Fetch data from the server-side API
    const response = await axios.get(
      `http://localhost:5000/certificates/${slug}`
    );

    if (!response.data) {
      notFound(); // Trigger a 404 if no certificate is found
    }

    certificate = response.data; // If certificate exists, assign it
  } catch (error) {
    console.error("Error fetching certificate data:", error.message);
    notFound(); // Trigger 404 if there is an error
  }

  const imageURL = `http://127.0.0.1:5000${certificate.image}`;
  const name = certificate.name;

  return (
    <div className="z-20 flex flex-col min-h-screen w-full max-w-7xl mx-auto py-10">
      <BlurFade delay={0.25} inView>
        <div className="mx-6 md:mx-12 p-6 pt-4">
          <p
            className={`font-mono ${jetbrains_mono.className} text-sm py-2 bg-gradient-to-r from-[#9046D4] to-[#FFA7FB] bg-clip-text text-transparent max-w-[120px]`}
          >
            ACM MPSTME
          </p>
          <p
            className={`${raleway.className} text-white flex items-center gap-3 text-lg md:text-2xl`}
          >
            PFE - Participation Certificate{" "}
            <span
              className={`${jetbrains_mono.className} bg-[#9046D4] p-1 px-3 text-xs flex font-bold justify-center items-center rounded-full`}
            >
              {certificate.subject}
            </span>
          </p>
        </div>
      </BlurFade>
      <main className="flex-col items-center md:items-stretch md:flex-row flex m-8 justify-center gap-8">
        <BlurFade delay={0.25 * 2} inView>
          <Image
            alt={`ACM's PFE Certificate for ${name}`}
            src={imageURL}
            className="border-2 border-[#9046D4]/50 rounded-2xl shadow-[0_5px_50px_-15px] shadow-[#9046D4]/50 opacity-100"
            width="600"
            height="500"
            priority={true}
          />
        </BlurFade>
        <BlurFade delay={0.25 * 3} inView>
          <About certificate={certificate} />
        </BlurFade>
      </main>
    </div>
  );
}
