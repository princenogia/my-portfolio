"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Typewriter from "typewriter-effect";

export default function Header() {
  return (
    <div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-5">
        <h1 className="relative z-10 text-lg md:text-5xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Hi, I am <span className="text-blue-500">Prince</span>— I’m a <br />
          <span className="text-purple-400">
            <Typewriter
              options={{
                strings: [
                  "Full Stack Developer",
                  "React Native Developer",
                  "UI/UX Designer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
          <br />
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto mt-[-2rem] text-sm text-center relative z-10">
          "I turn ideas into seamless digital experiences — a full-stack
          developer who blends performance, clean design, and code to build
          impactful web and mobile apps."
        </p>
      </div>
      <BackgroundBeams />
    </div>
  );
}
