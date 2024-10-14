"use client"
import { useState } from "react";
import { Raleway, JetBrains_Mono } from "next/font/google";

const raleway = Raleway({ subsets: ['latin']});
const jbm = JetBrains_Mono({subsets: ['latin']});

const About = ({ certificate }) => {
    const [copySuccess, setCopySuccess] = useState(false);

    const handleCopy = () => {
        const link = window.location.href;
        
        // Copy the link to the clipboard
        navigator.clipboard.writeText(link)
            .then(() => {
                setCopySuccess(true); // Show success message
                setTimeout(() => setCopySuccess(false), 2000); // Clear the message after 2 seconds
            })
            .catch((err) => {
                console.error("Failed to copy: ", err);
            });
    };

    const handleDownload = async () => {
        try {
          // Fetch the certificate image from the server as a Blob
          const response = await fetch(`http://localhost:5000${certificate.image}`);
          const blob = await response.blob(); // Convert the response into a Blob
    
          // Create a URL for the Blob object
          const url = window.URL.createObjectURL(blob);
    
          // Create an invisible anchor element
          const link = document.createElement('a');
          link.href = url;
          link.download = `ACM_PFE - ${certificate.name}_${certificate.id}.png`; // File name for the download
    
          // Append the link to the DOM, trigger click, and remove it from the DOM
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
    
          // Revoke the object URL to free memory
          window.URL.revokeObjectURL(url);
        } catch (error) {
          console.error('Error downloading the file:', error);
        }
      };
    
    return (
        <div className={`${raleway.className} flex flex-col justify-between max-w-[400px] border min-h-full border-white/15 bg-white/5 p-6 rounded-2xl`}>
            <div>
                <div className="flex flex-col gap-2 pb-5 border-b border-white/50 mb-5">
                    <p className={`text-2xl text-white`}>About this <span className="[text-shadow:_0_2px_10px_rgb(144,70,212)] bg-gradient-to-r from-[#9046D4] to-[#FFA7FB] bg-clip-text text-transparent max-w-[120px]">Certificate</span></p>
                    <p className={`font-mono ${jbm.className} text-xs bg-gradient-to-r from-[#9046D4] to-[#FFA7FB] bg-clip-text text-transparent max-w-[300px]`}>ID: {certificate.id} <span className="text-white">- {certificate.name}</span></p>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-sm md:text-md font-bold text-white">PFE - Participation Certificate 2024</h3>
                        <p className="text-xs text-[#888888] line-clamp-6">
                            This certificate has been awarded to <span className="text-white underline">{certificate.name}</span> for their 3 day continous participation in PFE (Programming For Everyone) where the students learnt the fudamentals of programming languages of their choice. In the workshop, the students learnt and were able to build a CLI RPG.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4 min-w-max mb-10 md:mb-0">
                        <h3 className="text-sm md:text-md text-white font-bold">Share this certificate</h3>
                        <div className="flex flex-col md:flex-row gap-2">
                            <p className="p-2 border px-4 text-ellipsis overflow-hidden rounded-md text-xs text-white border-[#9046D4]/25">
                                {window.location.href}
                            </p>
                            <button onClick={() => handleCopy()} className=" text-xs py-2 md:py-0 bg-[#101010] border border-[#9046D4]/50 px-4 rounded-md text-white">{ copySuccess ? 'Copied!' : 'Copy'}</button>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={() => handleDownload()} className="transition-all duration-300 cursor-pointer text-center hover:shadow-[0_5px_20px_-10px] shadow-[0_10px_30px_-10px] hover:shadow-[#FFA7FB]/70 shadow-[#FFA7FB]/70 bg-gradient-to-b from-[#be6ee4] to-[#FFA7FB] font-bold border border-[#9046D4] text-black p-2 rounded-md">Download Certificate</button>
            {/* <button className="bg-[#101010] border border-[#9046D4]/50 font-bold text-white p-2 rounded-md">
                <span className="bg-gradient-to-r from-[#9046D4] to-[#FFA7FB] bg-clip-text text-transparent max-w-[1200px]">
                    Download Certificate
                </span>
            </button> */}
        </div>
    )
}

export default About;