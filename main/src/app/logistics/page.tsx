"use client";

import Header from "./../../components/Header";
import Footer from "./../../components/Footer";
import React from "react";

import Image from "next/image";

const Logistics = () => {
  return (
    <div>
      <Header />
      <div className="max-w-7xl mx-auto my-0 pt-40">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 p-4">
          <div className="bg-white p-4 rounded shadow-lg flex flex-col items-center">
            <div className="logistic-img-container relative w-full h-52 overflow-hidden">
              <Image
                src="/img/log-1.jpg"
                alt="logo"
                width={400}
                height={300}
                className="object-cover"
              />
            </div>
            <div className="pt-2 text-center font-mulish">
              <h3 className="text-xl font-bold mt-4">Rail freight</h3>
              <p className="mt-2 text-gray-700">
                Raffles provides quick and cost-effective rail freight services
                for domestic and international shipping needs. We offer
                dependable and ecologically responsible transport solutions
                through our broad network and strategic relationships. Our
                skilled team manages the entire logistics process, optimizing
                routing and load planning to reduce expenses
              </p>
            </div>
          </div>
          <div className="bg-white p-4 rounded shadow-lg flex flex-col items-center">
            <div className="relative w-full h-52 overflow-hidden">
              <Image
                src="/img/log-2.jpg"
                alt="logo"
                width={400}
                height={300}
                className="object-cover"
              />
            </div>
            <div className="pt-2 text-center font-mulish">
              <h3 className="text-xl font-bold mt-4">Air Freight</h3>
              <p className="mt-2 text-gray-700">
                Raffles provides quick and dependable air freight services to
                satisfy time-sensitive shipment requirements. We assure the safe
                and timely shipment of your cargo through our large network of
                airline partners. Our skilled team manages every part of the
                procedure.
              </p>
            </div>
          </div>
          <div className="bg-white p-4 rounded shadow-lg flex flex-col items-center">
            <div className="relative w-full h-52 overflow-hidden">
              <Image
                src="/img/log-3.jpg"
                alt="logo"
                width={400}
                height={300}
                className="object-cover"
              />
            </div>
            <div className="pt-2 text-center font-mulish">
              <h3 className="text-xl font-bold mt-4">Sea Freight</h3>
              <p className="mt-2 text-gray-700">
                Raffles provides dependable and effective maritime freight
                services for global shipping requirements. We handle the
                full-container load (FCL) and less-than-container load (LCL)
                shipments, project cargo, and door-to-door delivery using our
                broad network and experience.
              </p>
            </div>
          </div>
          <div className=" bg-white p-4 rounded shadow-lg flex flex-col items-center">
            <div className="relative w-full h-52 overflow-hidden">
              <Image
                src="/img/log-4.jpg"
                alt="logo"
                width={400}
                height={300}
                className="object-cover"
              />
            </div>
            <div className="pt-2 text-center font-mulish">
              <h3 className="text-xl font-bold mt-4">
                Supply chain management
              </h3>
              <p className="mt-2 text-gray-700">
                Raffles provides comprehensive and personalized supply chain
                management services to help you optimize and streamline your
                operations. We employ innovative technologies and industry best
                practises to improve visibility, cut costs, and improve
                efficiency in demand planning, inventory management,
                warehousing, transportation, and order fulfillment.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Logistics;
