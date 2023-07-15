import React from "react";
import { motion } from "framer-motion";
import { footerData } from "../data/data";
import { fadeIn } from "../utils/variants";

function Footer() {
  const {
    about: {
      title: aboutTitle,
      subtitle: aboutSubtitle,
      address: { icon: addressIcon, name },
      phone: { icon: phoneIcon, number },
      email: { icon: emailIcon, address },
    },
    links: { title: linksTitle, items: linksItems },
    program: { title: programTitle, items: programItems },
    newsletter: {
      title: newsletterTitle,
      subtitle: newsletterSubtitle,
      form: { icon: formIcon, placeholder },
    },
  } = footerData;

  const staggerContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <footer className="section bg-dark">
      <div className="container mx-auto">
        <motion.div
          variants={staggerContainer}
          viewport={{ once: false, amount: 0.1 }}
          initial="hidden"
          whileInView="show"
          className="text-white flex flex-col lg:flex-row gap-y-14 gap-x-5"
        >
          <motion.div
            variants={fadeIn("up")}
            className="flex-1 flex flex-col gap-y-6"
          >
            <div className="font-primary text-xl uppercase tracking-[0.08em]">{aboutTitle}</div>
            <div className="leading-relaxed text-[#dbdbdb]">{aboutSubtitle}</div>
            <div className="flex flex-col gap-y-4 font-semibold text-[#dbdbdb]">
              <div className="flex items-center gap-x-[10px]">
                <div>{addressIcon}</div>
                <div>{name}</div>
              </div>
              <div className="flex items-center gap-x-[10px]">
                <div>{phoneIcon}</div>
                <div>{number}</div>
              </div>
              <div className="flex items-center gap-x-[10px]">
                <div>{emailIcon}</div>
                <div>{address}</div>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("up")}
            className="flex-1 flex flex-col xl:items-center"
          >
            <div>
              <div className="font-primary text-xl uppercase tracking-[0.08em] mb-6">{linksTitle}</div>
              <ul className="flex flex-col gap-y-4 text-[#dbdbdb]">
                {linksItems.map(({ href, name }, index) => (
                  <li key={index}>
                    <a
                      href={href}
                      className="hover:text-white transition"
                    >
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("up")}
            className="flex-1"
          >
            <div className="font-primary text-xl uppercase tracking-[0.08em] mb-6">{programTitle}</div>
            <ul className="flex flex-col gap-y-4 text-[#dbdbdb]">
              {programItems.map(({ name }, index) => (
                <li key={index}>{name}</li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            variants={fadeIn("up")}
            className="flex-1"
          >
            <div className="font-primary text-xl uppercase tracking-[0.08em] mb-6">{newsletterTitle}</div>
            <div className="leading-relaxed mb-9 text-[#dbdbdb]">{newsletterSubtitle}</div>
            <form className="flex justify-between items-start border-b border-[#b6b6b6]">
              <input
                placeholder={placeholder}
                type="email"
                className="outline-none placeholder:text-base italic placeholder:capitalize bg-transparent pb-2"
              />
              <button className="text-2xl cursor-pointer">{formIcon}</button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
