"use client";

import Image from "next/image";
import Link from "next/link";

import { Mail } from "lucide-react";
import { Phone } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Header() {
  return (
    <header className="relative z-20">
      <div className=" absolute top-8 left-1/2 transform -translate-x-1/2 z-10 w-full flex justify-center">
        <div className="flex justify-between items-center w-full max-w-7xl p-2 rounded-2xl bg-white">
          <Link href={"/"}>
            <Image src="/img/logo-b.svg" alt="logo" width={90} height={55} />
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
          <div className="flex min-w-48 justify-end gap-2">
            <div>
              <Link
                href="mailto:mail@mail.com"
                className="flex pt-2 group hover:text-[#418DD9] font-mulish"
              >
                <Mail />
                <div className="opacity-0 max-w-0 overflow-hidden pl-2 group-hover:opacity-100 group-hover:max-w-xs transition-all duration-700">
                  mail@mail.com
                </div>
              </Link>
            </div>
            <div>
              <Link
                href="tel:+79991112233"
                className="flex pt-2 group hover:text-[#418DD9] font-mulish"
              >
                <Phone />
                <div className="opacity-0 max-w-0 overflow-hidden pl-2 max-h-6 group-hover:opacity-100 group-hover:max-w-xs transition-all duration-700">
                  +7 (999) 11-22
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <Carousel className="w-screen h-screen -z-100">
        <CarouselContent>
          <CarouselItem>
            <Image
              src="/img/banner-1.png"
              alt="banner 1"
              fill
              className="object-cover "
            />
            <div className="absolute top-1/2 left-16 transform -translate-y-1/2 text-white text-left z-10 font-mulish">
              <h1 className="text-5xl font-bold mb-4 uppercase">
                Delivering Excellence,
                <br /> Every Step of the Way
              </h1>
              <p className="font-mulish text-[16px] font-normal leading-[140%] tracking-[0%] text-left">
                We offer a full cycle of services — from purchasing goods from{" "}
                <br />
                manufacturers in China to delivering them to the end consumer in
                Russia.
              </p>
              <Link href="/">
                <Button
                  variant="outline"
                  className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 hover:text-white uppercase mt-3"
                >
                  Know More
                </Button>
              </Link>
            </div>
          </CarouselItem>
          <CarouselItem className="relative w-screen h-screen ">
            <Image
              src="/img/banner-2.png"
              alt="banner 2"
              fill
              className="relative object-cover"
            />
            <div className="absolute top-1/2 left-16 transform -translate-y-1/2 text-white text-left z-10">
              <h1 className="text-5xl font-bold mb-4 uppercase">
                Your Trusted Partner in <br />
                Logistics and Trading Solutions
              </h1>
              <p>
                We offer a full cycle of services — from purchasing goods from{" "}
                <br />
                manufacturers in China to delivering them to the end consumer in
                Russia.
              </p>
              <Link href="/">
                <Button
                  variant="outline"
                  className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 uppercase mt-3"
                >
                  Know More
                </Button>
              </Link>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="hidden" />
        <CarouselNext className="hidden" />
      </Carousel> */}
    </header>
  );
}

export default Header;
