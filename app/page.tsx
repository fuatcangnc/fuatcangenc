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

export default async function Home() {

  return (
    <main className="flex flex-col ">
      <Sidebar></Sidebar>


      
    </main>
  );
}
