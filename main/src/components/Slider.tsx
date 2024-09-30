import Image from "next/image";
import Link from "next/link";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

function Slider() {
  return (
    <div className="-z-10">
      <Carousel className="w-screen h-screen -z-100">
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
      </Carousel>
    </div>
  );
}

export default Slider;
