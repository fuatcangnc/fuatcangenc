import Link from "next/link";
import React from "react";
import {
  FaBehance,
  FaDribbble,
  FaGithub,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa6";

type SocialTypes = {
  text: string;
  icon: JSX.Element;
  href:string
};
const socials: SocialTypes[] = [
  {
    href:'https://www.behance.net/fuatcangenc',
    text: "Behance",
    icon: <FaBehance />,
  },
  {
    href:'https://dribbble.com/fuatcanui',
    text: "Dribble",
    icon: <FaDribbble />,
  },
  {
    href:'https://github.com/fuatcangnc',
    text: "Github",
    icon: <FaGithub />,
  },
  {
    href:'https://x.com/fuatgui',
    text: "X (Twitter)",
    icon: <FaTwitter />,
  },
];
function HeroSocials() {
  return (
    <div className="flex gap-1">
      {socials?.map((social, index) => (
        <Link href={social.href}
        target="_blank"
          key={index}
          className="flex group justify-center items-center flex-grow h-10 relative gap-1 px-2 py-4 rounded-xl bg-white  hover:bg-gray-800 ursor-pointer  border border-[#e8eef33b]"
        >
          <div className="text-[#1a1a1a] group-hover:text-white transition-colors duration-300">
            {social?.icon}
          </div>
          {/* <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#1a1a1a] group-hover:text-white transition-colors duration-300">
            {social?.text}
          </p> */}
        </Link>
      ))}
    </div>
  );
}

export default HeroSocials;
