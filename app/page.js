import Image from "next/image";
import Faq from "@/components/Faq";
import LearnMore from "@/components/LearnMore";
import CallToAction from "@/components/CallToAction";
export default function Home() {
  return (
    <main className='min-w-full pt-[4.5rem] m-0 p-0'>
      <LearnMore />
      <Faq />
      <CallToAction />
    </main>
  );
}
