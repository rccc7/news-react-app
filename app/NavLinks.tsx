//Since this component needs to use hooks (usePathName) we must declare this component to be
//considered as a client component. That is, in the whole application only this portion will be considered as client
"use client";
import React from "react";
import { categories } from "../constants";
import NavLink from "./NavLink";
import { usePathname } from "next/navigation";

function NavLinks() {
  const pathName = usePathname();

  const isActive = (path: string) => {
    return pathName?.split("/").pop() === path;
    // 👆👆👆 mysite.com/news/technology -> technology
  };
  return (
    <nav
      className="grid grid-cols-4 md:grid-cols-7 text-xs md:text-sm 
    gap-4 pb-10 max-w-6xl mx-auto border-b"
    >
      {categories.map((category) => (
        <NavLink
          key={category}
          category={category}
          isActive={isActive(category)}
        />
      ))}
    </nav>
  );
}

export default NavLinks;
