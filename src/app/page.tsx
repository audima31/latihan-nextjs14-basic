import HeaderComponent from "@/components/Header";
import CardList from "../components/CardList";
import Image from "next/image";
import CaraouselComponent from "@/components/Carousel";
const Home = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`
  );
  const topAnime = await response.json();
  // Memotong array topAnime, agar muncul datanya hanya 8
  const topAnime8 = topAnime.data.slice(0, 8);

  return (
    <>
      <div className="">
        <CaraouselComponent />
        {/* <Image
          src="https://placehold.co/600x400.png"
          alt="..."
          width={600}
          height={400}
        /> */}
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

      {/* Anime Paling Terbaru */}
      <section className="px-5 mt-5">
        <HeaderComponent title="Terbaru" link="/terbaru" title2="Lihat Semua" />
        <CardList api={topAnime8} />
      </section>
    </>
  );
};

export default Home;
