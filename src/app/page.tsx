import CardList from "../components/CardList";
import Link from "next/link";

const Home = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`
  );
  const dataAnime = await response.json();

  // Memotong array dataAnime
  const limitData = dataAnime.data.slice(0, 8);

  return (
    <div className="px-5">
      <div className="flex justify-between items-center py-3">
        <h1 className="text-white text-2xl py-3 font-semibold">
          Paling Popular
        </h1>
        <Link
          href={"/populer"}
          className="text-white underline hover:text-gray-400 transition-all "
        >
          Lihat Semua
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-8 gap-4">
        {limitData.map((data: any) => {
          return (
            <div key={data.mal_id}>
              <CardList
                title={data.title}
                image={data.images.webp.image_url}
                id={data.mal_id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
