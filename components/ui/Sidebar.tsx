import React from "react";
import Skills from "./Skills";
import Content from "./Content";
import HeroContent from "./HeroContent";
import FollowerAvatars from "@/public/FollowerAvatars.png"
import Image from "next/image";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
function Sidebar() {
  return (
    <div className="flex md:flex-row flex-col justify-start items-start gap-[17px] bg-[#121623] ">
      <div className="flex flex-col justify-start items-start flex-grow-1 flex-shrink-1 gap-3 max-w-[400px]">
        <div className="flex flex-col justify-start items-start flex-grow-1 flex-shrink-1  relative gap-6 px-5 py-6 rounded-xl bg-[#171b27] border border-[#e8eef3]/10">
          <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-3">
            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-1">
              <p className="flex-grow-0 flex-shrink-0 text-2xl font-medium text-left text-white">
                Hi, I’m Fuat 🤘🏼
              </p>
              <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
                <svg
                  width={16}
                  height={20}
                  viewBox="0 0 16 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 opacity-30"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    opacity="0.3"
                    d="M7.548 19.22C7.35317 19.22 7.15833 19.1865 6.9635 19.1193C6.7685 19.052 6.59217 18.9478 6.4345 18.8068C5.53717 17.9798 4.69742 17.1281 3.91525 16.2518C3.13325 15.3756 2.4535 14.4997 1.876 13.624C1.29833 12.7484 0.84125 11.8805 0.50475 11.0203C0.16825 10.16 0 9.32912 0 8.52778C0 6.22012 0.746417 4.35187 2.23925 2.92303C3.73225 1.4942 5.50183 0.779785 7.548 0.779785C9.59417 0.779785 11.3637 1.4942 12.8567 2.92303C14.3496 4.35187 15.096 6.22012 15.096 8.52778C15.096 9.32912 14.9277 10.1583 14.5912 11.0153C14.2547 11.8725 13.7993 12.7405 13.225 13.6193C12.6505 14.4981 11.9722 15.374 11.1902 16.247C10.4082 17.1202 9.5685 17.9702 8.671 18.797C8.51567 18.938 8.33908 19.0438 8.14125 19.1143C7.94358 19.1848 7.74583 19.22 7.548 19.22ZM7.54975 10.145C8.04725 10.145 8.47258 9.96787 8.82575 9.61354C9.17908 9.2592 9.35575 8.83328 9.35575 8.33578C9.35575 7.83828 9.17858 7.41287 8.82425 7.05954C8.46992 6.70637 8.04392 6.52979 7.54625 6.52979C7.04875 6.52979 6.62342 6.70695 6.27025 7.06129C5.91692 7.41562 5.74025 7.84162 5.74025 8.33929C5.74025 8.83679 5.91742 9.26212 6.27175 9.61529C6.62608 9.96845 7.05208 10.145 7.54975 10.145Z"
                    fill="white"
                  />
                </svg>
                <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#a8aebf]">
                  Istanbul, Turkiye
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0">
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
              <div className="flex-grow-0 flex-shrink-0 w-20 h-6 relative">
               <Image src={FollowerAvatars} width={80} height={24} objectFit="cover" alt="avatars"/>
              </div>
              <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#a8aebf]">
                +200 followers
              </p>
            </div>
            <Link href={'https://x.com/fuatgui'} target="_blank" className="flex justify-center items-center text-white flex-grow-0 flex-shrink-0 w-[140px] h-10 relative overflow-hidden gap-2.5 p-2.5 rounded-xl bg-[#fafafc]/5 border border-[#e8eef3]/10 hover:bg-gray-900 transition ease-in-out delay-10">
            <FaXTwitter />

              Follow Me</Link>
            
          </div>
          <HeroContent></HeroContent>
        </div>
        <Skills></Skills>
      </div>
      <Content></Content>
    </div>
  );
}

export default Sidebar;
