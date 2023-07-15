import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { CircularProgressbar } from "react-circular-progressbar";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
import "react-circular-progressbar/dist/styles.css";

function Skills() {
  const [fullBody, setFullBody] = useState(0);
  const [piercing, setPiercing] = useState(0);
  const [fullColor, setFullColor] = useState(0);
  const [temporary, setTemporary] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const circularStyles = {
    path: {
      stroke: "#111111",
    },
    trail: {
      stroke: "#eeeeee",
    },
    text: {
      fill: "#111111",
      fontSize: "24px",
    },
  };

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        fullBody < 90 && setFullBody(fullBody + 1);
        piercing < 80 && setPiercing(piercing + 1);
        fullColor < 75 && setFullColor(fullColor + 1);
        temporary < 95 && setTemporary(temporary + 1);
      }, 50);
    } else {
      setFullBody(0);
      setPiercing(0);
      setFullColor(0);
      setTemporary(0);
    }
  }, [inView, fullBody, piercing, fullColor, temporary]);

  return (
    <motion.section
      variants={fadeIn("up")}
      viewport={{ once: false, amount: 0.1 }}
      ref={ref}
      initial="hidden"
      whileInView="show"
      className="section font-primary"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row justify-between items-center gap-y-12">
          <div className="w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6">
            <CircularProgressbar
              strokeWidth={2}
              value={fullBody}
              styles={circularStyles}
              text={`${fullBody}%`}
            />
            <div className="uppercase font-light tracking-[1.2px] text-center">Full Body Tattoo</div>
          </div>
          <div className="w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6">
            <CircularProgressbar
              strokeWidth={2}
              value={piercing}
              styles={circularStyles}
              text={`${piercing}%`}
            />
            <div className="uppercase font-light tracking-[1.2px] text-center">Safely Piercing</div>
          </div>
          <div className="w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6">
            <CircularProgressbar
              strokeWidth={2}
              value={fullColor}
              styles={circularStyles}
              text={`${fullColor}%`}
            />
            <div className="uppercase font-light tracking-[1.2px] text-center">Full Colour Tatoo</div>
          </div>
          <div className="w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6">
            <CircularProgressbar
              strokeWidth={2}
              value={temporary}
              styles={circularStyles}
              text={`${temporary}%`}
            />
            <div className="uppercase font-light tracking-[1.2px] text-center">Temporary Tatoo</div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Skills;
