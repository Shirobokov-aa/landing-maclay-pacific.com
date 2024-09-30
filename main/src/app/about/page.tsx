"use client";

import Footer from "./../../components/Footer";
import Comment from "./../../components/Comment";
import Header from "./../../components/Header";
import React from "react";

import Image from "next/image";

const About = () => {
  return (
    <div>
      <Header />
      <div className="max-w-7xl mx-auto my-0 pt-24 px-8">
        <h1 className="text-[rgb(26,_26,_26)] font-mulish text-[44px] font-semibold leading-[115%]">
          About Us
        </h1>
        <div className="">
          <p className="pt-6 text-[rgb(26,_26,_26)] font-mulish text-[20px] font-normal leading-[24px]">
            Raffles is a Singapore-based significant logistics and trade company
            that offers comprehensive solutions for freight forwarding, supply
            chain management, and product trading. Raffles has a considerable
            presence in the market and has established itself as a reliable and
            trusted partner for enterprises worldwide.
          </p>
          <div className="">
            <Image
              src="/img/bg-about.png"
              alt="about-1"
              width={1440}
              height={400}
              className="py-6"
            />
          </div>
          <p className="pt-6 text-[rgb(26,_26,_26)] font-mulish text-[20px] font-normal leading-[24px]">
            As a logistics provider, Raffles offers a wide range of services to
            facilitate the movement of goods efficiently and securely. Their
            expertise in freight forwarding enables them to handle complex
            shipping requirements, ensuring timely delivery and cost-effective
            solutions for clients. Whether its air, sea, or land transportation,
            Raffles has the capabilities and global network to handle shipments
            of any size or nature.
          </p>
          <p className="pt-6 text-[rgb(26,_26,_26)] font-mulish text-[20px] font-normal leading-[24px]">
            Raffles is a trader who specializes in the sourcing and trading of
            diverse things. The company facilitates international trade by
            leveraging its broad network and market knowledge, with an emphasis
            on hardware, metal scraps, textiles, and ferrous commodities.
          </p>
          <p className="pt-6 text-[rgb(26,_26,_26)] font-mulish text-[20px] font-normal leading-[24px]">
            By delivering reliable logistics services, efficient supply chain
            management, and seamless trading solutions, Raffles remains at the
            forefront of the industry, driving growth and success for its
            clients in the dynamic world of international trade.
          </p>
          <div className="">
            <Image
              src="/img/bg-about2.png"
              alt="about-1"
              width={1440}
              height={400}
              className="py-6"
            />
          </div>
        </div>
        {/* <div className="">
          <div className="pt-16 text-[rgb(26,_26,_26)] font-mulish text-[44px] font-semibold leading-[115%]">
            Our Mission
          </div>
          <p className="pt-6 text-[rgb(26,_26,_26)] font-mulish text-[20px] font-normal leading-[24px]">
            To provide superior logistics and trading solutions that enable
            businesses to prosper in the global economy by delivering
            dependable, efficient, and innovative services.
          </p>
        </div>
        <div className="">
          <div className="pt-16 text-[rgb(26,_26,_26)] font-mulish text-[44px] font-semibold leading-[115%]">
            Our Vision
          </div>
          <p className="text-[rgb(26,_26,_26)] font-mulish text-[20px] font-normal leading-[24px]">
            To be the preferred logistics and trading services partner,
            recognized for our experience, dependability, and dedication to
            customer satisfaction, while creating growth and sustainability for
            our clients.
          </p>
        </div> */}
        <div className="">
          <div className="pt-16 text-[rgb(26,_26,_26)] font-mulish text-[44px] font-semibold leading-[115%]">
            Our Values
          </div>
          <div className="flex items-center justify-between text-center pt-16">
            <div className="w-1/3 flex flex-col items-center justify-center">
              <div className="">
                <Image
                  src="/img/integr.svg"
                  alt="about-1"
                  width={96}
                  height={96}
                />
              </div>
              <div className="font-mulish text-[24px] font-bold leading-[140%] pt-4">
                Integrity
              </div>
              <div className="text-[rgb(50,_56,_71)] font-mulish text-[16px] font-normal leading-[140%] pt-4">
                We conduct all we do on behalf of Raffles with respect and
                candor.
              </div>
            </div>
            <div className="w-1/3 flex flex-col items-center justify-center">
              <div className="values-icon">
                <Image
                  src="/img/hones.svg"
                  alt="about-1"
                  width={96}
                  height={96}
                />
              </div>
              <div className="font-mulish text-[24px] font-bold leading-[140%] pt-4">
                Honesty
              </div>
              <div className="text-[rgb(50,_56,_71)] font-mulish text-[16px] font-normal leading-[140%] pt-4">
                We try to be honest towards work, customers, and employees.
              </div>
            </div>
            <div className="w-1/3 flex flex-col items-center justify-center">
              <div className="">
                <Image
                  src="/img/custom.svg"
                  alt="about-1"
                  width={96}
                  height={96}
                />
              </div>
              <div className="font-mulish text-[24px] font-bold leading-[140%] pt-4">
                Customer Service
              </div>
              <div className="text-[rgb(50,_56,_71)] font-mulish text-[16px] font-normal leading-[140%] pt-4">
                We strive to help customers in the best possible way.
              </div>
            </div>
          </div>
        </div>
        <div className="pb-12">
          <Comment />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
