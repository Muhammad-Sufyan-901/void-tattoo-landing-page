import React, { useEffect, useState } from "react";
import { TiThMenuOutline } from "react-icons/ti";
import { headerData, navData } from "../data/data";
import Nav from "./Nav";
import NavMobile from "./NavMobile";
import Socials from "./Socials";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavMobileActive, setIsNavMobileActive] = useState(false);
  const { logo } = headerData;
  const { items } = navData;

  useEffect(() => {
    window.addEventListener("scroll", () => (window.scrollY > 50 ? setIsScrolled(true) : setIsScrolled(false)));
  });

  return (
    <header className={`${isScrolled ? "h-[100px] lg:h-[110px] shadow-lg" : "h-[120px] lg:h-[150px]"} bg-white fixed left-0 right-0 z-10 max-w-[1920px] w-full mx-auto transition-all duration-300`}>
      <div className="flex justify-between items-center h-full pl-[50px] pr-[60px]">
        <a href="/#">
          <img
            src={logo}
            alt="Header Logo"
            className="w-[188px] h-[90px]"
          />
        </a>
        <div className="hidden xl:flex">
          <Nav data={items} />
        </div>
        <div
          onClick={() => setIsNavMobileActive(!isNavMobileActive)}
          className="xl:hidden absolute right-[5%] bg-dark text-white p-2 rounded-md cursor-pointer"
        >
          <TiThMenuOutline className="text-3xl" />
        </div>
        <div className={`${isNavMobileActive ? "max-h-full" : "max-h-0"} ${isScrolled ? "top-[100px] lg:top-[110px] shadow-lg" : "top-[120px] lg:top-[150px]"} bg-white fixed w-full h-full left-0 -z-10 transition-all duration-300`}>
          <NavMobile
            data={items}
            Component={Socials}
          />
        </div>
        <div className="hidden xl:flex">
          <Socials />
        </div>
      </div>
    </header>
  );
}

export default Header;
