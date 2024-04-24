"use client";

import React, { useState } from "react";

const CollectionButton = (dataImport: any) => {
  const [isCreated, setIsCreated] = useState(false);

  const handleCollection = async (event: any) => {
    event.preventDefault();
    console.log(dataImport.anime_image);

    const response = await fetch("/api/post", {
      method: "POST",
      body: JSON.stringify({
        anime_mal_id: dataImport.anime_mal_id.toString(),
        user_email: dataImport.user_email,
        anime_image: dataImport.anime_image,
        anime_title: dataImport.anime_title,
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
          className="px-2 py-1 bg-color-accent"
        >
          Add To Collection
        </button>
      )}
    </>
  );
};

export default CollectionButton;
