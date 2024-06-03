import { homePageData } from "@/constants";
import { ChevronsRight } from "lucide-react";
import React from "react";
import HeroSocials from "./HeroSocials";

function HeroContent() {
  return (
    <div className="flex flex-col gap-1">
      {/* <h1 className="text-dark text-2xl font-ranade-bold ">
        {homePageData?.tagline2}
      </h1> */}
      <hr className="border-1 border-gray-800 my-4" />

      <p className="my-2 leading-7 font-light text-white">
        I am Fuat Genc, a passionate 
        <span className="font-bold"> Front-end UI Designer</span> and
        <span className="font-bold"> UI Developer</span> from Istanbul, deeply in
        love with coding and exploring various tech domains.
      </p>

      {/* My Status  */}
      <div className="my-4 text-sm font-light text-white">
        <p className="my-2 flex gap-2">
          <ChevronsRight size={17} />
          <span>
            I also create engaging and user-friendly
            <span className="gradient_text font-bold"> UI designs.</span>
          </span>
        </p>
        <p className="my-2 flex gap-2">
          <ChevronsRight size={17} />
          <span>
            Im on a mission to become a
            <span className="gradient_text font-bold"> Frontend </span>
            developer.
          </span>
        </p>
        <p className="my-2 flex gap-2">
          <ChevronsRight size={17} />
          <span>I bring life to designs through lines of code.</span>
        </p>
      </div>

      {/* Socials & CTA */}
      <hr className="border-1 border-gray-800 my-4" />
      <div className=" md:m-0 md:flex md:gap-4 md:items-center">
        <div className="socials flex items-center gap-2  max-w-[120px]">
          <HeroSocials />
        </div>
      </div>
    </div>
  );
}

export default HeroContent;
