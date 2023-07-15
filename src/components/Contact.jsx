import React from "react";
import { motion } from "framer-motion";
import { contactData } from "../data/data";
import { fadeIn } from "../utils/variants";

function Contact() {
  const {
    title,
    info,
    form: { name, email, message, btnText },
  } = contactData;

  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-y-16">
          <motion.div
            variants={fadeIn("right")}
            viewport={{ once: false, amount: 0.4 }}
            initial="hidden"
            whileInView="show"
            className="flex-1"
          >
            <h2 className="h2 max-w-[490px]">{title}</h2>
            <div className="flex flex-col xl:flex-row gap-x-5 gap-y-16 xl:gap-y-0">
              {info.map(({ title, subtitle, address: { icon: addressIcon, name }, phone: { icon: phoneIcon, number }, email: { icon: emailIcon, address }, link }, index) => (
                <div key={index}>
                  <div className="font-primary uppercase font-medium text-xl mb-3">{title}</div>
                  <div className="mb-6 text-[#333] leading-[187%] tracking-[0.02em]">{subtitle}</div>
                  <div className="flex flex-col gap-y-3 mb-8">
                    <div className="flex items-center gap-[10px]">
                      <div>{addressIcon}</div>
                      <div className="font-medium">{name}</div>
                    </div>
                    <div className="flex items-center gap-[10px]">
                      <div>{phoneIcon}</div>
                      <div className="font-medium">{number}</div>
                    </div>
                    <div className="flex items-center gap-[10px]">
                      <div>{emailIcon}</div>
                      <div className="font-medium">{address}</div>
                    </div>
                  </div>
                  <a
                    href="/#"
                    className="font-medium border-b border-dark pb-[5px]"
                  >
                    {link}
                  </a>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left")}
            viewport={{ once: false, amount: 0.4 }}
            initial="hidden"
            whileInView="show"
            className="flex-1 xl:pl-[40px] flex justify-center items-center"
          >
            <form className="flex flex-col gap-y-10 w-full">
              <input
                placeholder={name}
                type="text"
                className="border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4"
              />
              <input
                placeholder={email}
                type="email"
                className="border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4"
              />
              <input
                placeholder={message}
                type="text"
                className="border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4 xl:mb-[30px]"
              />
              <button className="self-start btn btn-sm btn-dark">{btnText}</button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
