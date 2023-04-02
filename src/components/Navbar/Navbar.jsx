import React, { useState } from "react";
import Link from "../Link/Link";
import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "About",
      path: "/about",
    },
    {
      id: 3,
      name: "Contact",
      path: "/contact",
    },
    {
      id: 4,
      name: "Products",
      path: "/products",
    },
    {
      id: 5,
      name: "Services",
      path: "/services",
    },
  ];
  return (
    <nav className="bg-cyan-400 mx-4">
      <div onClick={() => setOpen(!open)} className="md:hidden cursor-pointer">
        <span>
          {open === true ? (
            <XMarkIcon className="h-6 w-6 text-purple-500" />
          ) : (
            <Bars4Icon className="h-6 w-6 text-purple-500" />
          )}
        </span>
      </div>
      <ul className={`md:flex text-xl absolute md:static pl-8 pb-2 bg-cyan-400 duration-500 ${open ? "top-6" : "-top-48"}`}>
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
