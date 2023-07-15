import React from "react";

function Nav({ data }) {
  return (
    <nav>
      <ul className="flex gap-x-[58px]">
        {data.map(({ href, name }, index) => (
          <li key={index}>
            <a
              href={href}
              className="link hover:border-b-2 hover:border-dark transition duration-300"
            >
              {name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
