import React from "react";
import { socialData } from "../data/data";

function Socials() {
  return (
    <ul className="flex justify-center items-center gap-x-[25px]">
      {socialData.map(({ href, icon }, index) => (
        <li
          key={index}
          className="p-2 rounded-full hover:bg-dark hover:text-white cursor-pointer transition duration-300"
        >
          <a href={href}>{icon}</a>
        </li>
      ))}
    </ul>
  );
}

export default Socials;
