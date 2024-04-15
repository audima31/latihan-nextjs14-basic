import HeaderComponent from "@/components/Header";
import CardList from "../components/CardList";
import Image from "next/image";
import CaraouselComponent from "@/components/Carousel";
const Home = async () => {
  // Get data top anime------------------------------------------------------------
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`
  );
  const topAnime = await response.json();
  // Memotong array topAnime, agar muncul datanya hanya 8
  const topAnime8 = topAnime.data.slice(0, 8);

  // Get data rekomendasi-----------------------------------------------------------
  const responseGetRekomendasi = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/recommendations/anime`
  );

  const responseGetRekomendasi2 = await responseGetRekomendasi.json();
  console.log(responseGetRekomendasi2.data);
  const responseGetRekomendasi3 = responseGetRekomendasi2.data.flatMap(
    (item: any) => item.entry
  );
  console.log(responseGetRekomendasi3);

  // Biar setiap di refresh, datanya rekomendasinya berubah
  function shuffle(data: any, gap: any) {
    const first = Math.floor(Math.random() * (data.length - gap) + 1);
    const last = first + gap;
    console.log(first, last);
    const dataRekomendasiResuffle = responseGetRekomendasi3.slice(first, last);

    return dataRekomendasiResuffle;
  }

  const rekomendasiAnime = shuffle(responseGetRekomendasi3, 8);

  return (
    <>
      <div className="">
        <CaraouselComponent />
      </div>
      {/* Anime Paling Populer */}
      <section className="px-5">
        <HeaderComponent
          title="Paling Populer"
          link="/populer"
          title2="Lihat Semua"
        />
        <CardList api={topAnime8} />
      </section>

      {/* Anime Rekomendasi */}
      <section className="px-5 mt-5">
        <HeaderComponent title="Rekomendasi" link="/terbaru" />
        <CardList api={rekomendasiAnime} />
      </section>
    </>
  );
};

export default Home;
