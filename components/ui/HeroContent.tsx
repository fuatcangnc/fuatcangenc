"use client"
import { homePageData } from "@/constants";
import { ChevronsRight } from "lucide-react";
import React from "react";
import HeroSocials from "./HeroSocials";
import {motion} from "framer-motion"
import SectionHeading from "../shared/SectionHeading";
function HeroContent() {
  return (
    <section className="flex flex-col gap-1 text-gray-800">
      {/* <h1 className="text-dark text-2xl font-ranade-bold ">
        {homePageData?.tagline2}
      </h1> */}

      <motion.div initial={{y:-100,opacity:0}} animate={{y:0,opacity:1}} >
        <SectionHeading>About Me</SectionHeading>
      <p className="my-2 leading-7 font-light text-gray-800">
        I am Fuat Genc, a passionate 
        <span className="font-bold"> Front-end UI Designer</span> and
        <span className="font-bold"> UI Developer</span> from Istanbul, deeply in
        love with coding and exploring various tech domains.
      </p>

      {/* My Status  */}
      <div className="my-4 text-sm font-light text-gray-800">
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
      </motion.div>
    </section>
  );
}

export default HeroContent;
