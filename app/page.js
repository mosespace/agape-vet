import Image from "next/image";
import CallToAction from "@/components/CallToAction";
export default function Home() {
  return (
    <main className='min-w-full lg:flex lg:flex-col lg:items-center lg:justify-between lg:p-[3rem] pt-[4.7rem] m-0 p-0'>
      <CallToAction />
    </main>
  );
}
