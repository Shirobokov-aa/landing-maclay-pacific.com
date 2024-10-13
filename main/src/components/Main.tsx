"use client";
import Comment from "./../components/Comment";
import Image from "next/image";

import { Button } from "@/components/ui/button";

import Link from "next/link";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function Main() {
  return (
    <main className="overflow-hidden">
      <Carousel className="w-screen h-screen -z-100">
        <CarouselContent>
          <CarouselItem>
            <Image
              src="/img/banner-1.png"
              alt="banner 1"
              fill
              className="object-cover "
            />
            <div className="absolute top-1/2 left-16 transform -translate-y-1/2 text-white text-left z-10 font-mulish ">
              <h3 className="text-5xl font-bold mb-4 uppercase">
                Delivering Excellence,
                <br /> Every Step of the Way
              </h3>
              <Link href="/reach">
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
              <h3 className="text-5xl font-bold mb-4 uppercase">
                Your Trusted Partner in <br />
                Logistics and Trading Solutions
              </h3>
              <Link href="/reach">
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
      </Carousel>
      <div className="main px-4">
        <div className="smt-14  m-auto max-w-7xl mt-20">
          <h2 className="text-center text-[rgb(20,_23,_31)] font-mulish text-4xl font-bold uppercase">
            Services we offer
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-12">
            <div className="text-center flex justify-center items-center flex-col">
              <Image
                src="/img/dostavka.svg"
                alt="logo"
                width={48}
                height={48}
              />

              <div className="p-5 font-mulish text-lg uppercase">
                Freight forwarding
              </div>
              <div className="text-[rgb(50,_56,_71)] font-mulish text-md font-normal leading-[140%]">
                Our freight forwarding services encompass air, sea, and road
                transport, enabling us to deliver your goods to any destination
                worldwide. We partner with a trusted network of carriers to
                ensure the safe and efficient transportation of your products.
              </div>
              <div>
                <Link href="/reach">
                  <Button
                    variant="outline"
                    className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 hover:text-white uppercase mt-3 font-mulish"
                  >
                    More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="text-center flex justify-center items-center flex-col">
              <Image src="/img/dogovor.svg" alt="logo" width={48} height={48} />

              <div className="p-5 font-mulish text-lg uppercase">Traiding</div>
              <div className="text-[rgb(50,_56,_71)] font-mulish text-md font-normal leading-[140%]">
                Raffles engages in trading activities, specializing in the
                sourcing and trading of various products. With a focus on
                hardware, metal scraps, fabrics, and ferrous materials, the
                company leverages its extensive network and market knowledge to
                facilitate international trade.
              </div>
              <Link href="/reach">
                <Button
                  variant="outline"
                  className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 hover:text-white uppercase mt-3 font-mulish"
                >
                  More
                </Button>
              </Link>
            </div>
            <div className="text-center flex justify-center items-center flex-col">
              <Image src="/img/control.svg" alt="logo" width={48} height={48} />
              <div className="p-5 font-mulish text-lg uppercase">
                Supply chain management
              </div>
              <div className="text-[rgb(50,_56,_71)] font-mulish text-md font-normal leading-[140%]">
                We employ innovative technologies and industry best practises to
                improve visibility, cut costs, and improve efficiency br in
                demand planning, inventory management, warehousing,
                transportation, and order fulfillment.
              </div>
              <Link href="/reach">
                <Button
                  variant="outline"
                  className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 hover:text-white uppercase mt-3 font-mulish"
                >
                  More
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-[auto] my-[0] text-[rgb(20,_23,_31)] font-mulish text-4xl font-bold leading-[110%] pt-24">
          <div className="text-center uppercase">About Us</div>
          <div className="flex flex-col lg:flex-row items-center justify-center relative pt-10">
            <div className="text-[rgb(20,_23,_31)] font-mulish text-lg font-bold leading-[110%]">
              Raffles: A Trusted Global Leader in Logistics and Trade Solutions
              <p className="text-[rgb(26,_33,_47)] font-mulish text-[18px] font-medium leading-[140%] pt-10 max-w-lg w-full">
                Raffles is a Singapore-based significant logistics and trade
                company that offers comprehensive solutions for freight
                forwarding, supply chain management, and product trading.
                Raffles has a considerable presence in the market and has
                established itself as a reliable and trusted partner for
                enterprises worldwide.
              </p>
            </div>
            <div>
              <div className="lg:bg-ban lg:-z-10 lg:flex hidden ">
                <Image
                  src="/img/about-us.png"
                  alt="logo"
                  width={1000}
                  height={300}
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <Link href="/about">
              <Button
                variant="outline"
                className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 hover:text-white uppercase mt-6 font-mulish"
              >
                Read More
              </Button>
            </Link>
          </div>
        </div>
        <div className="pb-10">
          <Comment />
        </div>
      </div>
    </main>
  );
}

export default Main;
