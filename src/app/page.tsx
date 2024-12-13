import Image from "next/image";
import Logo from "../../public/logo.svg";
import LogoText from "../../public/rocases.svg";
import Background from "../../public/background.png";
import Social_Icon from "../../public/Social_Icons.svg";

export default function Home() {
  return (
    <div className="relative w-[100vw] h-[100vh]">
      <Image
        src={Background}
        alt="background"
        className="absolute w-full h-full"
      ></Image>
      <div className="absolute w-full h-full top-0 left-0 bg-black bg-center opacity-[70%]" />
      <div className="absolute w-full h-full top-0 left-0  bg-no-repeat bg-center bg-[#31B5FF] opacity-[30%] flex items-center justify-center" />
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        <div className="w-full flex items-center justify-center gap-[53px] h-[306px]">
          <div className="relative w-[380px] h-[275px] grow-0 shrink-0">
            <Image src={Logo} fill alt="logo" />
          </div>
          <span className="w-[8px] h-[306px] bg-white" />
          <div className="flex flex-col items-start">
            <div className="relative w-[559px] h-[174px]">
              <Image src={LogoText} fill alt="text" />
            </div>
            <span className="text-white text-[96px] font-bold -mt-[60px]">
              Coming soon
            </span>
          </div>
        </div>
        <div className="p-3 border-b-2 border-white">
          <p className="text-white font-bold font-outfit">
            Follow us on our socials, where we post frequently our updates
          </p>
        </div>
        <div className="flex justify-center mt-3">
          <Image src={Social_Icon} alt="social icon"></Image>
        </div>
      </div>
      <div className="fixed bottom-2 flex justify-center w-full">
        <p
          className="text-center text-white font-outfit
        "
        >
          Copyright ­­© 2024. RoCases<br></br> All rights reserved. Managed by
          Frosted
        </p>
      </div>
    </div>
  );
}
