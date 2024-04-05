import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col lg:flex-row items-center dark:bg-slate-800 bg-[#1E1919]">
        <div className="p-10 flex flex-col bg-[#282929] dark:bg-slate-800 text-white space-y-5">
          <h1 className="text-5xl font-bold">
            Welcome to Dropbox. <br /> <br />
            Storing everything for you for your business needs. All in one place
          </h1>
          <p className="pb-20">
            Enhance your personal storage with Dropbox, offering a simple and
            efficient way to upload, organize and access file from anywhere.
            Securely storage important document and media and experiance the
            convenience of easy file managmenet and sharing with one centralized
            solution.
          </p>
          <Link
            href="/dashboard"
            className="flex bg-blue-500 w-fit cursor-pointer p-5"
          >
            Try it for free
            <ArrowRight className="ml-8" />
          </Link>
        </div>
        <div className="dark:bg-slate-800 bg-[#1E1919] h-full p-10">
          <video autoPlay muted loop className="rounded-lg">
            <source
              src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/overview/lp-header-graphite200-1920x1080.mp4"
              type="video/mp4"
            />
            Your Browser does'nt support this video tag
          </video>
        </div>
      </div>
    </main>
  );
}
