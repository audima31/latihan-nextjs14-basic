import ReactYoutube from "@/components/ReactYoutube";
import { authUserSession } from "@/lib/auth-libs";
import CollectionButton from "./CollectionButton";
import Image from "next/image";

const DetailAnimePage = async ({ params: { id } }: { params: { id: any } }) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime/${id}`
  );

  function capitalizeFirstLetter(word: any) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  const detailData = await response.json();
  const detailDataAnime = detailData.data;
  const user = await authUserSession();
  console.log(detailDataAnime);

  console.log(detailData.data.title);

  return (
    <div className="px-5 mt-20 sm:mt-16 py-3 text-white ">
      <div className="grid grid-cols-[35%_auto]">
        <div>
          <h2 className="text-2xl font-bold">{detailDataAnime.title}</h2>
          <div className="flex gap-1 items-center mt-3">
            <p className=" text-lg font-bold text-[#fd1b44]">
              {detailDataAnime.score}{" "}
              <label className="text-sm text-white font-normal">/ 10</label>
            </p>
            <p>|</p>
            <p>{detailDataAnime.year}</p>
            <p>|</p>
            <p>{capitalizeFirstLetter(detailDataAnime.genres[0].type)}</p>
          </div>
          <p className="mt-3" style={{ width: "80%" }}>
            {detailDataAnime.background}
          </p>

          <div className="mt-5">
            {user ? (
              <CollectionButton
                user_email={user?.email}
                anime_mal_id={detailDataAnime.mal_id}
                anime_image={detailDataAnime.images.webp.image_url}
                anime_title={detailDataAnime.title}
                score={detailDataAnime.score}
                popularity={detailDataAnime.popularity}
                year={detailDataAnime.year}
                synopsis={detailDataAnime.synopsis}
                background={detailDataAnime.background}
              />
            ) : (
              <></>
            )}
          </div>
        </div>
        <div>
          {/* <Image
            src={detailDataAnime.images.webp.image_url}
            width={350}
            height={350}
            className="w-full max-h-80 object-cover"
            alt="image"
          /> */}
          <ReactYoutube youtubeId={detailDataAnime.trailer.youtube_id} />
        </div>
      </div>

      <div className="mt-10">
        <p className="mb-5 text-lg font-semibold">
          {detailDataAnime.duration} | {detailDataAnime.rating}
        </p>
        <p className="">{detailDataAnime.synopsis}</p>
      </div>
    </div>
  );
};

export default DetailAnimePage;
