"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

const InputSearch = () => {
  // useRef ini fungsinya mirip dengan onChange, yaitu untuk mengambil data inputan
  const searchRef: any = useRef();
  const router = useRouter();

  const handleSearch = (event: any) => {
    const keyword = searchRef.current.value;
    if (keyword.trim() == "") {
      return;
    } else if (keyword !== "") {
      //agar bisa dienter saat search
      if (event.key === "Enter" || event.type === "click") {
        event.preventDefault();
        router.push(`/search/${keyword}`);
      }
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <input
        placeholder=" Search..."
        className="w-full p-1 rounded-lg"
        ref={searchRef}
        onKeyDown={handleSearch}
      />
      <button
        className="absolute"
        style={{
          right: 0,
          bottom: -4,
          marginRight: "0.5rem", // Adjust this margin as needed
          marginBottom: "0.5rem", // Adjust this margin as needed
        }}
        onClick={handleSearch}
      >
        <MagnifyingGlass size={24} />
      </button>
    </div>
  );
};

export default InputSearch;
