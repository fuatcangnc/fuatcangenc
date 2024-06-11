import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/ui/Hero";
import { project } from "@/utils";
import { groq, PortableText } from "next-sanity";
import {client, sanityFetch} from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import PostCard from "@/components/ui/PostCard";
import Bento from "@/components/ui/Bento";
import "./globals.css";
import Sidebar from "@/components/ui/Sidebar";
import HeroSocials from "@/components/ui/HeroSocials";
import Divider from "@/components/shared/Divider";
import HeroContent from "@/components/ui/HeroContent";
import Projects from "@/components/ui/Projects";

export default async function Home() {

  return (
    <main className="flex flex-col items-center max-w-[50rem] text-center mx-auto">
      <Hero/>
      <Divider/>
      <HeroContent/>
      <Divider/>
<Projects/>
      
    </main>
  );
}
