"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { Logo, LogoTitle } from "../icons";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div
      onClick={() => router.replace("/")}
      className=" flex items-center justify-between w-full z-10 top-0 left-0 bg-secondaryBackground px-5 py-2"
    >
      <span className=" flex items-center gap-5">
        <Logo />
        <LogoTitle />
      </span>
    </div>
  );
};

export default Header;
