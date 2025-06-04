import SectionHeading from "@/components/Helper/SectionHeading";
import WhyChooseCard from "@/components/Helper/WhyChooseCard";
import React from "react";

const WhyChoose = () => {
  return (
    <div className="pt-16 pb-24">
      {/* Sectiion Heading  */}
      <SectionHeading
        heading="Why Choose Us"
        subHeading="Your Dream Vacation, Our Expert Planning"
      />
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-16 items-center mt-16">
        {/* Why choose card */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
        >
          <WhyChooseCard
            images="/images/C1A.jpeg"
            title="Best Price Guarantee"
            width={80}
            height={80}
            description={
              "Get the lowest rates every time you book—no hidden fees.Find a better price elsewhere? We’ll match it or refund the difference."
            }
          />
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-center"  data-aos-delay="150"
>
          <WhyChooseCard
            images="/images/c2.png"
            title="Easy & Quick Booking"
            width={70}
            height={70}
            description={
              "Seamless Booking. Instant Confirmation.No long waits, no complicated forms—just seamless and fast booking at your fingertips"
            }
          />
          {/*Seamless Booking. Instant Confirmation.No long waits, no complicated forms—just seamless and fast booking at your fingertips */}
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="250"
>
          <WhyChooseCard
            images="/images/c3.png"
            title="Customer Care 24/7"
            width={70}
            height={70}
            description={
              "Your Peace of Mind Is Just a Call Away.and ensure your travel experience is smooth and stress-free. We're here for you, 24/7"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
