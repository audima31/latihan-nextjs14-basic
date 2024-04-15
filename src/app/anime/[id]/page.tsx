import ReactYoutube from "@/components/ReactYoutube";

const DetailAnimePage = async ({ params: { id } }: { params: { id: any } }) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime/${id}`
  );

  const detailData = await response.json();
  console.log(detailData.data);

  return (
    <div className="px-5 mt-20 sm:mt-11 py-3 text-white">
      <ReactYoutube youtubeId={detailData.data.trailer.youtube_id} />
      <h3>{detailData.data.title}</h3>
    </div>
  );
};

export default DetailAnimePage;
