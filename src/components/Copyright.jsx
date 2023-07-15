import React from "react";
import { motion } from "framer-motion";

function Copyright() {
  return (
    <div className="bg-dark py-6 border-t border-[#2b2b2b] text-[#dbdbdb]">
      <div className="container mx-auto">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: "tween", duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, amount: 0 }}
          className="tracking-[0.02em] text-base"
        >
          &copy; 2022 <span className="font-semibold text-white">The Void Tattoo.</span> All Right Reserved.
        </motion.div>
      </div>
    </div>
  );
}

export default Copyright;
