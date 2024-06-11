import Hero from "@/components/ui/Hero";
import "./globals.css";
import Divider from "@/components/shared/Divider";
import HeroContent from "@/components/ui/HeroContent";
import Projects from "@/components/ui/Projects";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "UI Designer & Front-End Developer",
  description: "Fuatcan Genc is a UI Designer based in Istanbul, Turkiye. He focuses on creating simple, usable, visually appealing websites and interfaces.",
};

export default async function Home() {
  return (
    <main className="flex flex-col items-center max-w-[50rem] text-center mx-auto">
      <Hero />
      <Divider />
      <HeroContent />
      <Divider />
      <Projects />
    </main>
  );
}
