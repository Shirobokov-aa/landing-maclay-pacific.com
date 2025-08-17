"use client";

import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function Comment() {
  return (
    <div>
      <div className="pt-24 ">
        <div className="flex max-w-7xl w-full mx-auto my-0 lg:justify-around flex-col lg:flex-row lg:items-start items-center justify-center">
          <div>
            <div className="text-center pt-0 text-[rgb(20,_23,_31)] font-mulish text-[40px] font-bold leading-[110%]">
              TESTIMONIALS
            </div>
            <div className="mt-6 sm:max-w-xl max-w-xs">
              <Carousel>
                <CarouselContent className="flex items-center content-center text-center">
                  <CarouselItem>
                    <div className="flex">
                      <div>
                        <Image
                          src="/img/com.svg"
                          alt="logo"
                          width={27}
                          height={56}
                          className="hidden sm:block"
                        />
                      </div>
                      <div className="max-w-md pt-4 text-left pl-4 text-[rgb(26,_33,_47)] font-mulish text-[16px] font-medium leading-[140%]">
                        Maclay-pacific unmatched expertise in logistics and
                        trading has consistently exceeded our expectations.
                      </div>
                    </div>
                    <div className="flex items-center justify-end pt-10">
                      <div className="text-[rgb(132,_132,_132)] font-mulish text-[14px]  leading-[17px]">
                        John Anderson
                      </div>
                      {/* <div className="text-[rgb(132,_132,_132)] font-mulish text-[14px] leading-[17px] text-left">
                        23 September 2023
                      </div> */}
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="flex">
                      <div>
                        <Image
                          src="/img/com.svg"
                          alt="logo"
                          width={27}
                          height={56}
                          className="hidden sm:block"
                        />
                      </div>
                      <div className="max-w-md pt-4 text-left pl-4 text-[rgb(26,_33,_47)] font-mulish text-[16px] font-medium leading-[140%]">
                        Maclay-pacific global network and commitment to
                        excellence have been instrumental in our international
                        trading success.
                      </div>
                    </div>
                    <div className="flex items-center justify-end pt-10">
                      <div className="text-[rgb(132,_132,_132)] font-mulish text-[14px]  leading-[17px]">
                        Sarah Lee
                      </div>
                      {/* <div className="text-[rgb(132,_132,_132)] font-mulish text-[14px] leading-[17px] text-left">
                        7 February 2024
                      </div> */}
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="flex">
                      <div>
                        <Image
                          src="/img/com.svg"
                          alt="logo"
                          width={27}
                          height={56}
                          className="hidden sm:block"
                        />
                      </div>
                      <div className="max-w-md pt-4 text-left pl-4 text-[rgb(26,_33,_47)] font-mulish text-[16px] font-medium leading-[140%]">
                        Choosing Maclay-pacific for our logistics needs has
                        optimized our supply chain and reduced costs.
                      </div>
                    </div>
                    <div className="flex items-center justify-end pt-10">
                      <div className="text-[rgb(132,_132,_132)] font-mulish text-[14px]  leading-[17px]">
                        Michael Johnson
                      </div>
                      {/* <div className="text-[rgb(132,_132,_132)] font-mulish text-[14px] leading-[17px] text-left">
                        21 May 2024
                      </div> */}
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="hidden -left-5 lg:flex" />
                <CarouselNext className="hidden right-5 lg:flex " />
              </Carousel>
            </div>
          </div>
          <div className="mr-8 max-w-sm">
            <div className="text-center pt-10 lg:pt-0 text-[rgb(20,_23,_31)] font-mulish text-[40px] font-bold leading-[110%]">
              WHY CHOOSE US
            </div>
            <div className="mt-6 text-[rgb(26,_33,_47)] font-mulish text-[18px] font-medium leading-[140%]">
              Opting for Maclay-pacific for your logistics and trading
              requirements means partnering with a company rich in industry
              knowledge and experience. Our wide range of solutions encompasses
              freight forwarding, supply chain management, and product trading,
              offering you comprehensive services tailored to your specific
              needs. We guarantee smooth operations and successful international
              trade by leveraging a strong global network of partners, agents,
              and suppliers.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
