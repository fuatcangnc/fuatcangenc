import { homePageData } from "@/constants";
import {
  Twitter,
  Linkedin,
  Github,
  FileText,
  Download,
  ChevronsRight,
  MoveUpRight,
  MousePointerClick,
} from "lucide-react";
import { FaLinkedinIn, FaInstagram, FaBehance } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import HeroSocials from "./HeroSocials";
import HeroImage from "@/public/hero.png";
import ProfileImage from "@/public/profile.png";
import HeroContent from "./HeroContent";

function Hero() {
  return (
    <section className="relative md:flex md:justify-center md:items-center  bg-[#f0f0f07e]  rounded-xl mb-8 overflow-hidden">
      <div className="">
        <div style={{ width: "100%" }} className="relative">
          <Image
            src={HeroImage}
            alt=""
            className=""
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          ></Image>
          <div className="absolute -bottom-6 left-10 transform -translate-x-1/2">
            <Image
              src={ProfileImage}
              width={48}
              height={48}
              alt="profile image"
              className="rounded-full"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

        <div className="hero-content p-4">
          <div className="leading-7  flex items-center gap-2 font-light  text-dark ">
            Hello there
            <Image
              src="https://user-images.githubusercontent.com/18350557/176309783-0785949b-9127-417c-8b55-ab5a4333674e.gif"
              alt="Waving hand"
              className=""
              width={64}
              height={64}
            />
          </div>
          <HeroContent></HeroContent>
        </div>
      </div>
      
      ;
    </section>
  );
}

export default Hero;
