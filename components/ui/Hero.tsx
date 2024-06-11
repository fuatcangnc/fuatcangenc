"use client";
import { homePageData } from "@/constants";
import { FaLinkedinIn, FaInstagram, FaBehance } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import HeroSocials from "./HeroSocials";
import HeroImage from "@/public/hero.png";
import ProfileImage from "@/public/profile.png";
import HeroContent from "./HeroContent";
import { motion } from "framer-motion";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { useSectionInView } from "@/lib/hooks";
import { MdKeyboardArrowLeft,MdKeyboardArrowRight } from "react-icons/md";

function Hero() {
  const {ref}=useSectionInView("Home",0.5)
  return (
    <section className="mb-28  sm:mb-0 scroll-mt-[100rem]" ref={ref} id="home">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div>
            <Image
              src={ProfileImage}
              width={96}
              height={96}
              alt="profile image"
              quality={95}
              priority={true}
            ></Image>
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>

      </div>.

      <motion.h1 className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl" initial={{opacity:0,y:100}} animate={{opacity:1,y:0}}>
      <span className="font-bold">Hello, I m Fuat.</span> I m a 
        <span className="font-bold flex items-center "> <MdKeyboardArrowLeft color="#0808FF"/> <span className="text-[#0808FF]">frontend developer</span> <MdKeyboardArrowRight color="#0808FF" />
        and  <span className="w-min h-min p-2 border-2 border-purple-600 relative"> <span className="w-2 h-2 bg-white border border-purple-600 absolute -top-1 -left-1">
        

          </span> 
          <span className="w-2 h-2 bg-white border border-purple-600 absolute -top-1 -right-1"></span>
          <span className="w-2 h-2 bg-white border border-purple-600 absolute -bottom-1 -right-1"></span>
          <span className="w-2 h-2 bg-white border border-purple-600 absolute -bottom-1 -left-1"></span>
          <span className="text-purple-600">&nbsp;designer</span></span></span> with
        <span className="font-bold"> 3 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is 
        <span className="underline"> React (Next.js)</span>.
      </motion.h1>


      <motion.div className="md:flex md:flex-row md:gap-3 flex flex-col gap-3 justify-center" initial={{y:-100,opacity:0}} animate={{y:0,opacity:1}}>
      <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
      <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
      <HeroSocials/>

      </motion.div>
    </section>
  );
}

export default Hero;
