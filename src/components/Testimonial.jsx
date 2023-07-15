import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { testimonialData } from "../data/data";
import { fadeIn } from "../utils/variants";
import "swiper/css";

function Testimonial() {
  return (
    <motion.section
      variants={fadeIn("up")}
      viewport={{ once: false, amount: 0.2 }}
      initial="hidden"
      whileInView="show"
      className="py-[40px] lg:pb-[160px] lg:pt-0"
    >
      <div className="container mx-auto">
        <Swiper>
          {testimonialData.map(({ quoteImg, message, name, occupation }, index) => (
            <SwiperSlide key={index}>
              <div className="max-w-[1200px] mx-auto flex flex-col items-center lg:flex-row lg:items-start gap-x-[38px]">
                <div className="w-[154px] h-[109px] mb-5">
                  <img
                    src={quoteImg}
                    alt="Quote Banner"
                  />
                </div>
                <div className="flex-1 lg:mt-[54px]">
                  <div className="text-2xl lg:text-[36px] leading-normal mb-6 lg:mb-12">{message}</div>
                  <div className="flex items-center text-lg lg:text-2xl font-primary">
                    <div className="font-semibold">{name}</div>
                    <span className="mx-4"> | </span>
                    <div className="font-light">{occupation}</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.section>
  );
}

export default Testimonial;
