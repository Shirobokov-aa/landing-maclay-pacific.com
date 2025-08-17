"use client";

import Image from "next/image";
import Link from "next/link";

import { Mail } from "lucide-react";
// import { Phone } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Header() {
  return (
    <header className="relative z-20">
      <div className=" absolute top-8 left-1/2 transform -translate-x-1/2 z-10 w-full flex justify-center px-4">
        <div className="flex justify-between items-center w-full max-w-7xl p-2 rounded-2xl bg-white">
          <Link href={"/"}>
            <Image
              src="/img/logo-new-b.svg"
              alt="logo"
              width={90}
              height={55}
            />
          </Link>
          <ul className="lg:flex lg:space-x-4 hidden">
            <li className="text-[black] font-mulish leading-[140%] uppercase hover:text-[#418DD9]">
              <Link href="/">Home</Link>
            </li>
            <li className="text-[black] font-mulish leading-[140%] uppercase hover:text-[#418DD9]">
              <Link href="/logistics">Logistics</Link>
            </li>
            <li className="text-[black] font-mulish leading-[140%] uppercase hover:text-[#418DD9]">
              <Link href="/about">About us</Link>
            </li>
            <li className="text-[black] font-mulish leading-[140%] uppercase hover:text-[#418DD9]">
              <Link href="/reach">Reach us</Link>
            </li>
          </ul>
          <div className="lg:hidden ">
            <DropdownMenu>
              <DropdownMenuTrigger className="uppercase ">
                Menu
              </DropdownMenuTrigger>
              <DropdownMenuContent className="conten w-52 flex flex-col font-mulish">
                <DropdownMenuItem>
                  <Link href="/" className="hover:text-[#418DD9]">
                    Home
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/logistics" className="hover:text-[#418DD9]">
                    Logistics
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/about" className="hover:text-[#418DD9]">
                    About us
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/reach" className="hover:text-[#418DD9]">
                    Reach us
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="flex min-w-64 justify-end gap-2">
            <div>
              <Link
                href="mailto:info@maclay-pacific.com"
                className="flex pt-2 group hover:text-[#418DD9] font-mulish"
              >
                <Mail />
                <div className="opacity-0 h-6 max-w-0 overflow-hidden pl-2 group-hover:opacity-100 group-hover:max-w-xs transition-all duration-700">
                  info@maclay-pacific.com
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
