import CardSection from "@/components/CardSection";
import { Hero } from "@/components/Hero";
import IconList from "@/components/IconList";
import { Navbar } from "@/components/Navbar";
import Request from "@/components/Request";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen h-full bg-[#FCEDF2]">
      {/* Navbar */}
      <Navbar />
      <Hero />
      <Request />
      <IconList />
      <CardSection />
    </main>
  );
}
