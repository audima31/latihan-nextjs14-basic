import Image from "next/image";
import Link from "next/link";

const CardList = (data: any) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-8 gap-4 ">
      {data.api.map((data: any) => {
        return (
          <Link
            href={`/${data.mal_id}`}
            className="cursor-pointer  text-white hover:text-[#fd1b44]"
            key={data.mal_id}
          >
            <div className="shadow-lg  ">
              <Image
                src={data.images.webp.image_url}
                alt="..."
                width={600}
                height={400}
                className="rounded-2xl w-full max-h-80 min-h-80 object-cover"
              />
              <h3 className="text-center mt-2 font-semibold">{data.title}</h3>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default CardList;
