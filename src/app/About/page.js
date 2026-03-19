import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Mail } from "lucide-react";

export default function About() {
  return (
    <>
      <div className="layout">
        <div className="aboutMe screen mt-20 border border-black p-5 min-h-[calc(100vh-120px)] flex flex-col justify-between items-center rounded-2xl">
          {/* ---------------------------------------------------------------------------------- */}

          <div className="w-full flex flex-col justify-between items-center xl:flex-row xl:justify-between">
            <div className="flex flex-col justify-between min-h-60 mb-3">
              <h1 className="text-3xl text-second font-bold lg:text-4xl mt-5">
                About me
              </h1>
              <p className="my-5 lg:text-2xl xl:w-150">
                I am <span className="text-second">Mohamed</span>, a Software
                Developer who doesn&apos;t just write code, but builds systems.
                My journey is driven by a deep commitment to Software
                Architecture and Clean Engineering. I specialize in the
                JavaScript ecosystem, crafting responsive and high-performance
                applications with Next.js and Tailwind CSS. For me, every
                challenge is an opportunity to refine my craft, ensuring that
                every project I touch is scalable, efficient, and built to last.
              </p>
              <Link
                href={"/Resume"}
                className="bg-second text-white w-fit px-2 py-1 rounded-2xl border border-primary lg:text-2xl lg:my-5 hover:bg-primary"
              >
                Resume
              </Link>
            </div>
            <Image
              src={"/WhatsApp Image 2026-03-14 at 1.06.39 PM.jpeg"}
              width={300}
              height={100}
              alt="myphoto"
              className="rounded-t-full border border-primary lg:w-115 xl:w-100"
            />
          </div>

          {/* ----------------------------------------------------------------------------------------- */}

          <div className="flex flex-row justify-between min-w-45 mt-5 text-second">
            <Link
              href={
                "https://www.instagram.com/mohamedrabee33?igsh=bm5zeXo3a2p6ZnEw"
              }
              target="_blank"
            >
              <Instagram width={40} height={40} />
            </Link>
            <Link
              href={
                "https://www.linkedin.com/in/mohamed-rabie-0495a73b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              }
              target="_blank"
            >
              <Linkedin width={40} height={40} />
            </Link>
            <Link href={"mailto:mohamedrabiema44@gmail.com"} target="_blank">
              <Mail width={40} height={40} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
