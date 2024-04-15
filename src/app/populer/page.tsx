"use client";

import CardList from "@/components/CardList";
import HeaderMenuComponent from "@/components/HeaderMenu";
import PaginationComponent from "@/components/Pagination";
import { useEffect, useState } from "react";

const PopulerPage = () => {
  const [page, setPage] = useState(1);
  const [dataAnime, setDataAnime] = useState([]);
  const [dataLastAnime, setDataLastAnime] = useState();

  const fetchData = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`
    );
    const data = await response.json();
    setDataAnime(data.data);
    setDataLastAnime(data.pagination.last_visible_page);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div className="px-5 mt-20 sm:mt-11 py-3 text-white">
      <HeaderMenuComponent title={"Anime Terpopuler"} />
      <CardList api={dataAnime} />
      <PaginationComponent
        page={page}
        lastPage={dataLastAnime}
        setPage={setPage}
      />
    </div>
  );
};

export default PopulerPage;
