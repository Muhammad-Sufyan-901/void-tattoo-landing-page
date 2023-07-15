import React, { useState } from "react";
import { PhotoAlbum } from "react-photo-album";
import { motion } from "framer-motion";
import { galleryData } from "../data/data";
import { fadeIn } from "../utils/variants";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const { title, btnText, btnIcon, images } = galleryData;

  const slides = images.map(({ original, width, height }) => ({
    src: original,
    width,
    height,
  }));

  return (
    <section className="bg-[#f9f9f9] section relative mt-[40px] lg:mt-0">
      <div className="container mx-auto">
        <motion.h2
          variants={fadeIn("up")}
          viewport={{ once: false, amount: 0.6 }}
          initial="hidden"
          whileInView="show"
          className="h2 max-w-[370px] lg:mb-20"
        >
          {title}
        </motion.h2>
      </div>
      <motion.div
        variants={fadeIn("up")}
        viewport={{ once: false, amount: 0.2 }}
        initial="hidden"
        whileInView="show"
        className="mb-8 lg:mb-20"
      >
        <PhotoAlbum
          onClick={(event, photo, index) => setCurrentIndex(index)}
          photos={images}
          layout="rows"
        />
        <Lightbox
          slides={slides}
          styles={{ container: { backgroundColor: "rgba(0, 0, 0, 0.9)" } }}
          open={currentIndex >= 0}
          index={currentIndex}
          close={() => setCurrentIndex(-1)}
        />
      </motion.div>
      <motion.div
        variants={fadeIn("up")}
        viewport={{ once: false, amount: 0.6 }}
        initial="hidden"
        whileInView="show"
        className="flex justify-center"
      >
        <button className="btn btn-lg btn-dark">
          {btnText} <div className="text-xl">{btnIcon}</div>
        </button>
      </motion.div>
    </section>
  );
}

export default GallerySection;
