import React from "react";

function NavMobile({ data, Component }) {
  return (
    <nav className="w-full h-full flex flex-col justify-evenly overflow-hidden">
      <ul className="flex flex-col justify-center items-center gap-y-6 py-6 mb-8">
        {data.map(({ href, name }, index) => (
          <li key={index}>
            <a
              href={href}
              className="text-2xl font-primary uppercase"
            >
              {name}
            </a>
          </li>
        ))}
      </ul>
      <div className="text-2xl">
        <Component />
      </div>
    </nav>
  );
}

export default NavMobile;
