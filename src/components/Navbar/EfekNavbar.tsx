"use client";
import { useEffect } from "react";

const NavbarEffect = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar") as HTMLElement;
      if (navbar) {
        if (window.scrollY > 100) {
          navbar.style.backgroundColor = "#18191c";
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

  return null;
};

export default NavbarEffect;
