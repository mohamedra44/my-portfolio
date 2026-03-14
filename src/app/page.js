import Image from "next/image";
import { Component } from "lucide-react";
import { Star } from "lucide-react";

import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="layout">
        <div className="home screen mt-20 flex flex-col items-center min-h-[calc(100vh-120px)] justify-between text-3xl border border-black rounded-2xl ">
          <div className="flex flex-col items-center mt-3">
            <p className="text-2xl border border-black px-2 py-0.5 rounded-2xl hover:bg-second hover:text-white">
              Hello
            </p>
            <p className="">
              I&apos;m <span className="text-second font-bold">Mohamed</span>
            </p>
            <p className="">Software Developer</p>
          </div>

          {/* ------------------------------------------------------------------------------------ */}

          <div className="relative p-5">
            <Image
              src={"/WhatsApp Image 2026-03-13 at 4.09.24 PM.jpeg"}
              width={600}
              height={100}
              alt="myPhoto"
              className="rounded-t-full border-2 border-black"
            />
            <div className="w-50 backdrop-blur-sm absolute bottom-10 left-1/2 -translate-x-1/2  px-2 py-3 rounded-2xl flex justify-start items-center border border-black max-sm:w-25 max-sm:px-1 max-sm:py-2">
              <Link
                href={"/About"}
                className="px-2 py-1 bg-second rounded-2xl text-white text-2xl max-sm:text-[10px]"
              >
                About Me
              </Link>
            </div>
          </div>

          {/* ----------------------------------------------------------------------------------------- */}

          <div className="flex flex-col justify-center items-center m-5">
            <div className="flex flex-row justify-center items-center">
              <Component size={35} className="text-second mr-3" />
              <p className="w-fit border border-black px-2 py-1 rounded-2xl">
                A{" "}
                <span className="text-second font-bold">
                  Software Developer
                </span>{" "}
                dedicated to building scalable, clean, and high-performance web
                applications with a focus on engineering over just coding.
              </p>
            </div>
            <div className="mt-5 flex flex-row justify-center items-center">
              <Star className="mr-3 text-second" />
              <p className="w-fit border border-black px-2 py-1 rounded-2xl">
                Solid Junior Developer
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
