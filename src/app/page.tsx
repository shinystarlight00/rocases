import Image from "next/image";
import Logo from "../../public/logo.svg";
import LogoText from "../../public/rocases.svg";
import Background from "../../public/background.png";
import Social_Icon from "../../public/Social_Icons.svg";

export default function Home() {
  return (
    <div className="relative w-[100vw] h-[100vh]">
      {/* Background Image */}
      <Image
        src={Background}
        alt="background"
        className="absolute w-full h-full object-cover"
      />

      {/* Overlay Layers */}
      <div className="absolute w-full h-full top-0 left-0 bg-black opacity-70" />
      <div className="absolute w-full h-full top-0 left-0 bg-[#31B5FF] opacity-30 flex items-center justify-center" />

      {/* Main Content */}
      <div className="relative w-full h-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Logo and Text Section */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-[53px] h-auto sm:h-[306px]">
          <div className="relative w-[150px] h-[120px] sm:w-[200px] sm:h-[150px] md:w-[300px] md:h-[225px] lg:w-[380px] lg:h-[275px] grow-0 shrink-0">
            <Image src={Logo} fill alt="logo" />
          </div>
          <span className="hidden sm:block w-[4px] sm:w-[6px] md:w-[8px] h-[200px] sm:h-[250px] md:h-[306px] bg-white" />
          <div className="flex flex-col items-center sm:items-start">
            <div className="relative w-[250px] h-[80px] sm:w-[300px] sm:h-[100px] md:w-[400px] md:h-[140px] lg:w-[559px] lg:h-[174px]">
              <Image src={LogoText} fill alt="text" />
            </div>
            <span className="text-white text-[24px] sm:text-[32px] md:text-[48px] lg:text-[64px] xl:text-[96px] font-bold -mt-[10px] sm:-mt-[20px] md:-mt-[40px] lg:-mt-[60px]">
              Coming soon
            </span>
          </div>
        </div>

        {/* Follow Us Section */}
        <div className="p-3 border-b-2 border-white mt-4 sm:mt-6 md:mt-10">
          <p className="text-white text-center font-bold font-outfit text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
            Follow us on our socials, where we post frequently our updates
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center mt-3 sm:mt-4 md:mt-6">
          <a href="https://discord.gg/rocases">
            <Image src={Social_Icon} alt="social icon" />
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="fixed bottom-2 flex justify-center w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <p className="text-center text-white font-outfit text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
          Copyright © 2024. RoCases
          <br /> All rights reserved. Managed by Frosted
        </p>
      </div>
    </div>
  );
}
