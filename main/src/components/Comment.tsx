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
                      <div className="pt-5">
                        <Image
                          src="/img/com.svg"
                          alt="logo"
                          width={27}
                          height={56}
                          className="hidden sm:block"
                        />
                      </div>
                      <div className="max-w-md pt-4 text-left pl-4 text-[rgb(26,_33,_47)] font-mulish text-[16px] font-medium leading-[140%]">
                        I highly recommend this company for international
                        shipping! Their service is reliable, efficient, and
                        always delivered with great professionalism. From start
                        to finish, they handle every aspect of the logistics
                        process with care, ensuring that goods arrive on time
                        and in perfect condition.
                      </div>
                    </div>
                    <div className="flex items-center justify-around pt-4">
                      <div className="text-[rgb(132,_132,_132)] font-mulish text-[14px]  leading-[17px]">
                        David Smith
                      </div>
                      <div className="text-[rgb(132,_132,_132)] font-mulish text-[14px] leading-[17px] text-left">
                        23 September 2023
                      </div>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="flex">
                      <div className="pt-5">
                        <Image
                          src="/img/com.svg"
                          alt="logo"
                          width={27}
                          height={56}
                          className="hidden sm:block"
                        />
                      </div>
                      <div className="max-w-md pt-4 text-left pl-4 text-[rgb(26,_33,_47)] font-mulish text-[16px] font-medium leading-[140%]">
                        I had an excellent experience with this company for my
                        international shipping needs! Their team was attentive
                        and proactive, keeping me informed at every step. The
                        shipment arrived on schedule and in perfect condition,
                        showcasing their commitment to quality service.
                      </div>
                    </div>
                    <div className="flex items-center justify-around pt-4">
                      <div className="text-[rgb(132,_132,_132)] font-mulish text-[14px]  leading-[17px]">
                        Maria Johnson
                      </div>
                      <div className="text-[rgb(132,_132,_132)] font-mulish text-[14px] leading-[17px] text-left">
                        7 February 2024
                      </div>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="flex">
                      <div className="pt-5">
                        <Image
                          src="/img/com.svg"
                          alt="logo"
                          width={27}
                          height={56}
                          className="hidden sm:block"
                        />
                      </div>
                      <div className="max-w-md pt-4 text-left pl-4 text-[rgb(26,_33,_47)] font-mulish text-[16px] font-medium leading-[140%]">
                        I can&apos;t thank this company enough for their
                        outstanding shipping services! They provided a smooth
                        and reliable experience, ensuring my goods were
                        delivered on time and in excellent condition. Their
                        attention to detail is truly commendable!
                      </div>
                    </div>
                    <div className="flex items-center justify-around pt-4">
                      <div className="text-[rgb(132,_132,_132)] font-mulish text-[14px]  leading-[17px]">
                        Sarah Williams
                      </div>
                      <div className="text-[rgb(132,_132,_132)] font-mulish text-[14px] leading-[17px] text-left">
                        21 May 2024
                      </div>
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
              Opting for Raffles for your logistics and trading requirements
              means partnering with a company rich in industry knowledge and
              experience. Our wide range of solutions encompasses freight
              forwarding, supply chain management, and product trading, offering
              you comprehensive services tailored to your specific needs. We
              guarantee smooth operations and successful international trade by
              leveraging a strong global network of partners, agents, and
              suppliers.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
