"use client";
import Image from "next/image";

import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
import { Instagram } from "lucide-react";
import { Facebook } from "lucide-react";
import { Twitter } from "lucide-react";
import { MapPinned } from "lucide-react";

import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-black text-white pt-14 pb-14">
      <div className="flex flex-col lg:flex-row lg:justify-between mx-auto">
        <div className="lg:w-1/3 px-20">
          <div className="">
            <Image src="/img/logo-w.svg" alt="logo" width={90} height={55} />
          </div>
          <div className="pt-6 font-mulish">
            &copy; 2024 Raffles. All rights reserved. Your trusted partner in
            logistics and trading solutions. Connect with us for tailored
            services that meet your needs.
          </div>
          <div className="flex pt-6 gap-2">
            <Link href={"/"} className="hover:text-[#418DD9]">
              <Instagram />
            </Link>
            <Link href={"/"} className="hover:text-[#418DD9]">
              <Facebook />
            </Link>
            <Link href={"/"} className="hover:text-[#418DD9]">
              <Twitter />
            </Link>
          </div>
          <div className="pt-6"></div>
        </div>
        <div className="gap-2 lg:w-1/3 px-20">
          <div className="uppercase item-title font-mulish text-lg">
            Address
          </div>

          <Link
            href="tel:+79991112233"
            className="flex pt-6  hover:text-[#418DD9] font-mulish"
          >
            <Phone />
            <pre> </pre>+7 (999) 11-22
          </Link>

          <Link
            href="mailto:mail@mail.com"
            className="flex pt-2  hover:text-[#418DD9] font-mulish"
          >
            <Mail />
            <pre> </pre>mail@mail.com
          </Link>

          <div className="flex pt-2 font-mulish">
            <MapPinned />
            <pre> </pre>544, Hougang Avenue 8 #05-1253 Singapore
          </div>
        </div>
        <div className="flex flex-col lg:w-1/3 px-20 font-mulish">
          <div className="uppercase item-title font-mulish text-lg pt-6 lg:pt-0 lg:text-center">
            Links
          </div>
          <Link
            href={"/"}
            className="cursor-pointer hover:text-[#418DD9] pt-6 lg:text-center"
          >
            Home
          </Link>
          <Link
            href={"/logistics"}
            className="cursor-pointer hover:text-[#418DD9] pt-2 lg:text-center"
          >
            Logistics
          </Link>
          <Link
            href={"/about"}
            className="cursor-pointer hover:text-[#418DD9] pt-2 lg:text-center"
          >
            About Us
          </Link>
          <Link
            href={"/reach"}
            className="cursor-pointer hover:text-[#418DD9] pt-2 lg:text-center"
          >
            Reach Us
          </Link>
        </div>
      </div>
      {/* <div className="flex lg:items-center lg:flex-row lg:justify-between flex-col items-center pt-10 mx-auto max-w-7xl pb-14 font-mulish">
        <div>COPYRIGHT 2023 | Mr.Ant</div>
        <div className="flex">
          <Link href={"/"} className="polytical hover:text-[#418DD9]">
            Privacy Policy
          </Link>
          <div className="line pl-8 lg:block hidden">|</div>
          <Link href={"/"} className="conditions pl-8 hover:text-[#418DD9]">
            Terms & Conditions
          </Link>
        </div>
      </div> */}
    </footer>
  );
}

export default Footer;
