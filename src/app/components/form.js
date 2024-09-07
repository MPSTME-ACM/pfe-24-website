"use client";
import { useState, useEffect } from "react";
import Script from "next/script";

export default function Form() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const handleMessage = (e) => {
      if (e?.data?.includes("Tally.FormSubmitted")) {
        setFormSubmitted(true);
      }
    };

    window.addEventListener("message", handleMessage);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <>
      {formSubmitted ? (
        <h1 className="text-xl max-w-[30ch] font-light tracking-tight animate-fade-right animate-duration-700 underline underline-offset-4">

          Thank you for submitting the form!
        </h1>
      ) : (
        <iframe
          data-tally-src="https://tally.so/embed/3yvXe6?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
          loading="lazy"
          width="100%"
          height="216"
          frameBorder={0}
          marginHeight={0}
          marginWidth={0}
          title="Newsletter subscribers"
        ></iframe>
      )}

      <Script src="/embed.js" onLoad={() => Tally.loadEmbeds()} />
    </>
  );
}
