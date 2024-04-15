import HeaderComponent from "@/components/Header";
import CardList from "@/components/CardList";
const SearchPage = async ({ params }: any) => {
  const keyword = params.keyword;
  const decodeKeyword = decodeURI(keyword);

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`
  );
  const searchAnime = await response.json();

  return (
    <>
      <section className="px-5 mt-20 sm:mt-11 py-3">
        <h1 className="text-white text-lg py-3 mb-4 ">
          Hasil pencarian untuk{" "}
          <label className="text-[#fd1b44]">{decodeKeyword}</label>
        </h1>
        <CardList api={searchAnime.data} />
      </section>
    </>
  );
};

export default SearchPage;
