import { authUserSession } from "@/lib/auth-libs";
import prisma from "@/lib/prisma";
import { CaretCircleLeft } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Page = async () => {
  const user = await authUserSession();

  const dataCollection = await prisma.collection.findMany({
    where: { user_email: user?.email },
  });

  console.log(dataCollection);

  // const router = useRouter();
  // const handleBack = (event: any) => {
  //   event.preventDefault();
  //   router.back();
  // };
  return (
    <div className="px-5 mt-24 sm:mt-16 py-3 text-white ">
      <div className="flex justify-between items-center">
        {/* <button onClick={handleBack}>
          <CaretCircleLeft size={30} />
        </button> */}
        <h3 className="text-xl text-center">
          Halaman Koleksi{" "}
          <label className="text-[#fd1b44] font-bold">Anime Saya</label>
        </h3>
      </div>

      {dataCollection.length == 0 ? (
        <p className="flex justify-center items-center min-h-screen">
          Belum Ada Data Collection
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-5">
          {dataCollection.map((collection: any, index: any) => {
            return (
              <Link
                key={index}
                href={`/anime/${collection.anime_mal_id}`}
                className="relative border-2 border-color-[#fd1b44] borderAnime"
              >
                <Image
                  src={collection.anime_image}
                  alt=""
                  width={200}
                  height={200}
                  className="w-full"
                />
                <div className="absolute flex items-center justify-center bottom-0 w-full bg-[#fd1b44] h-12">
                  <h5 className="text-lg font-semibold text-center">
                    <p>{collection.anime_title}</p>
                  </h5>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default Page;
