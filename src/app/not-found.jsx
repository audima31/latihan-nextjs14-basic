"use client";

import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  const handleBack = (event) => {
    event.preventDefault();
    router.back();
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-white">
      <h2 className="text-2xl">404 | Page is not found</h2>
      <button onClick={handleBack} className="mt-2 text-[#fd1b44] ">
        Kembali
      </button>
    </div>
  );
}
