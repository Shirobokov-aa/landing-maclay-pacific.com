"use client";
import Image from "next/image";

import { Mail } from "lucide-react";
// import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
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
            Maclay-pacific is a trader who specializes in the sourcing and
            trading of diverse things. The company facilitates international
            trade by leveraging its broad network and market knowledge, with an
            emphasis on hardware, metal scraps, textiles, and ferrous
            commodities.
          </div>
          <div className="flex pt-6 gap-2">
            <Link href="/reach">
              <Button
                variant="outline"
                className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 hover:text-white uppercase mt-3"
              >
                Know More
              </Button>
            </Link>
          </div>
          <div className="pt-6"></div>
        </div>
        <div className="gap-2 lg:w-1/3 px-20">
          <div className="uppercase item-title font-mulish text-lg">
            Address
          </div>

          {/* <Link
            href="tel:+79991112233"
            className="flex pt-6  hover:text-[#418DD9] font-mulish"
          >
            <Phone />
            <pre> </pre>+7 (999) 11-22
          </Link> */}

          <Link
            href="mailto:info@maclay-pacific.com"
            className="flex pt-2  hover:text-[#418DD9] font-mulish"
          >
            <Mail />
            <pre> </pre>info@maclay-pacific.com
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
    </footer>
  );
}

export default Footer;
