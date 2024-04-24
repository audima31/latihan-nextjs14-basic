import ReactYoutube from "@/components/ReactYoutube";
import { authUserSession } from "@/lib/auth-libs";
import CollectionButton from "./CollectionButton";

const DetailAnimePage = async ({ params: { id } }: { params: { id: any } }) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime/${id}`
  );

  const detailData = await response.json();
  const user = await authUserSession();

  console.log(detailData.data.title);

  return (
    <div className="px-5 mt-20 sm:mt-11 py-3 text-white">
      <ReactYoutube youtubeId={detailData.data.trailer.youtube_id} />
      <h3>{detailData.data.title}</h3>
      {user ? (
        <CollectionButton
          user_email={user?.email}
          anime_mal_id={detailData.data.mal_id}
          anime_image={detailData.data.images.webp.image_url}
          anime_title={detailData.data.title}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default DetailAnimePage;
