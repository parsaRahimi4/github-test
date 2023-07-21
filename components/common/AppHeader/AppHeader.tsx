"use client";
import React from "react";
import style from "./AppHeader.module.css";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

function Header() {
  const links = [
    { id: 1, title: "home", href: "/", path: "/" },
    { id: 2, title: "popular", href: "/popular-most", path: "/popular-most" },
  ];

  const pathname = usePathname();
  console.log("plkj", pathname);

  return (
    <div className={style.container}>
      <div className={style.navbar}>
        {links?.map((val, index) => (
          <Link
            href={val?.href}
            title={val?.title}
            className={style.link}
            key={index}
            id={pathname == val?.path ? style.active : style.notActive}
          >
            {val?.title}
          </Link>
        ))}
      </div>
      <Image alt="logo" src={"/imgs/header/logo.svg"} width={40} height={40} />
    </div>
  );
}

export default Header;
