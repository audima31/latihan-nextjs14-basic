import HeaderComponent from "@/components/Header";
import CardList from "../components/CardList";

export const Home = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`
  );
  const topAnime = await response.json();

  // Memotong array topAnime, agar muncul datanya hanya 8
  const topAnime8 = topAnime.data.slice(0, 8);

  return (
    <section className="px-5">
      <HeaderComponent
        title="Paling Populer"
        link="/populer"
        title2="Lihat Semua"
      />
      <CardList api={topAnime8} />
    </section>
  );
};
