"use client";

import Link from "next/link";
import InputSearch from "./InputSearch";
import { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar") as HTMLElement;
      if (navbar) {
        if (window.scrollY > 100) {
          navbar.style.backgroundColor = "#18191c"; // Ubah warna menjadi merah saat di-scroll
        } else {
          navbar.style.backgroundColor = "transparent"; // Kembalikan warna aslinya jika tidak di-scroll
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className="navbar flex flex-col sm:flex-row items-center sm:items-start sm:justify-between px-5 py-3 z-10"
      style={{
        width: "100%",
        position: "fixed",
        transition: "background-color 0.4s ease",
      }}
    >
      <Link href="/" className="text-white font-bold text-xl">
        AnimeIndo
      </Link>
      <InputSearch />
    </nav>
  );
};

export default Navbar;
