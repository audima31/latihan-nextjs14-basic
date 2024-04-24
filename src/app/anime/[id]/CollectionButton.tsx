"use client";

import React, { useState } from "react";

const CollectionButton = (dataImport: any) => {
  const [isCreated, setIsCreated] = useState(false);
  console.log(dataImport);

  const handleCollection = async (event: any) => {
    event.preventDefault();
    console.log(dataImport.anime_image);
    console.log(dataImport.popularity);

    const response = await fetch("/api/post", {
      method: "POST",
      body: JSON.stringify({
        anime_mal_id: dataImport.anime_mal_id.toString(),
        user_email: dataImport.user_email,
        anime_image: dataImport.anime_image,
        anime_title: dataImport.anime_title,
        score: dataImport.score,
        popularity: dataImport.popularity,
        year: dataImport.year,
        synopsis: dataImport.synopsis,
        background: dataImport.background,
      }),
    });
    const collection = await response.json();
    if (collection.status == 200) {
      setIsCreated(true);
    }
    return;
  };

  return (
    <>
      {isCreated ? (
        <p className="text-color-primary">Berhasil Ditambahkan Ke Koleksi</p>
      ) : (
        <button
          onClick={handleCollection}
          className="px-2 py-2 bg-color-accent bg-[#fd1b44] text-white rounded-md hover:bg-[#e61920] transition-all font-bold"
        >
          Add To Collection
        </button>
      )}
    </>
  );
};

export default CollectionButton;
