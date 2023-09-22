import Image from "next/image";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import LearnMore from "@/components/LearnMore";
import CallToAction from "@/components/CallToAction";
import Sponsors from "@/components/Sponsors";
export default function Home() {
  return (
    <main className='min-w-full pt-[4.5rem] m-0 p-0'>
      <Hero />
      <LearnMore />
      <Sponsors/>
      <Faq />
      <CallToAction />
    </main>
  );
}
