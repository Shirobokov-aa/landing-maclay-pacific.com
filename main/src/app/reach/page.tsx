"use client";

import Header from "./../../components/Header";
import Footer from "./../../components/Footer";
// import Map from "./../../components/Map";
import GMap from "./../../components/GMap";
import React from "react";

import Link from "next/link";
import Image from "next/image";

const Reach = () => {
  return (
    <div>
      <Header />
      <div className="pt-40">
        <div className="max-w-7xl mx-auto space-x-8 px-10">
          <div className="flex justify-between">
            <div className="lg:block lg:max-w-1/2 lg:w-full hidden px-6">
              <Image
                src="/img/reach-1.jpg"
                alt="about-1"
                width={1024}
                height={1024}
                className="object-cover w-full min-w-[410px] rounded-2xl"
              />
            </div>
            <div className="space-y-6 flex justify-center flex-col ">
              <div className="text-3xl font-bold font-mulish">Contact Us</div>
              <div className="text-lg font-mulish">
                We&apos;re here to assist you with all your logistics and
                trading inquiries. Reach out to our dedicated team for
                personalized support and solutions tailored to your specific
                needs.
              </div>
              <div className="flex items-center space-x-4 box-border max-w-xs border-[1px] border-[solid] border-[rgb(238,238,238)] rounded-[16px] bg-[rgb(255,_255,_255)]">
                <div className="">
                  <Image
                    src="/img/mail.svg"
                    alt="mail"
                    width={90}
                    height={90}
                    className="w-full h-auto"
                  />
                </div>
                <div className="">
                  <div className="font-semibold text-xl font-mulish">
                    Massege
                  </div>
                  <Link
                    href="mailto:mail@mail.com"
                    className="hover:text-[#418DD9] font-mulish"
                  >
                    mail@mail.com
                  </Link>
                </div>
              </div>
              <div className="flex items-center space-x-4 box-border max-w-xs border-[1px] border-[solid] border-[rgb(238,238,238)] rounded-[16px] bg-[rgb(255,_255,_255)]">
                <div className="">
                  <Image
                    src="/img/phone.svg"
                    alt="mail"
                    width={90}
                    height={90}
                    className="w-full h-auto"
                  />
                </div>
                <div className="">
                  <div className="font-semibold text-xl font-mulish">
                    Contact Us
                  </div>
                  <Link
                    href="tel:+799911122"
                    className="hover:text-[#418DD9] font-mulish"
                  >
                    +7 (999) 11-22
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex justify-between pt-20">
              <div className="space-y-6 flex justify-center flex-col ">
                <div className="text-3xl font-bold font-mulish">Find Us</div>
                <div className="text-lg font-mulish">
                  Discover our locations and connect with our team. We&apos;re
                  ready to provide the logistics and trading solutions you need.
                  Visit us or reach out for more information!
                </div>
                <div className="flex items-center space-x-4 box-border max-w-sm border-[1px] border-[solid] border-[rgb(238,238,238)] rounded-[16px] bg-[rgb(255,_255,_255)]">
                  <div className="hidden sm:block">
                    <Image
                      src="/img/geo.svg"
                      alt="mail"
                      width={90}
                      height={90}
                      className="w-full h-auto "
                    />
                  </div>
                  <div className="">
                    <div className="font-semibold text-xl font-mulish">
                      LOCATION
                    </div>
                    <div className="ext-lg font-mulish">
                      544, HOUGANG AVENUE <br />8 #05-1253 SINGAPORE (530544)
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 box-border max-w-sm border-[1px] border-[solid] border-[rgb(238,238,238)] rounded-[16px] bg-[rgb(255,_255,_255)]">
                  <div className="hidden sm:block">
                    <Image
                      src="/img/clock.svg"
                      alt="mail"
                      width={90}
                      height={90}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="">
                    <div className="font-semibold text-xl font-mulish">
                      WORKING HOURS
                    </div>
                    <div className="font-mulish">
                      Mon - Fri . 08:00am - 17:00pm <br /> Sat . 09:00am -
                      14:00pm
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:block lg:max-w-1/2 lg:w-full hidden px-6">
                <Image
                  src="/img/reach-2.jpg"
                  alt="about-1"
                  width={1024}
                  height={1024}
                  className="object-cover w-full min-w-[410px] rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-16">
        <GMap />
        {/* <Map /> */}
      </div>
      <Footer />
    </div>
  );
};

export default Reach;
