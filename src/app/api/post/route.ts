import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// export async function POST(request: any) {
//   //Untuk mengambil data dari FrontEnd
//   console.log(request.json());

//   const { anime_mal_id, user_email } = await request.json();
//   const data = { anime_mal_id, user_email };

//   const createCollection = await prisma.collection.create({ data });

//   if (!createCollection) {
//     return NextResponse.json({ status: 500, isCreated: false });
//   } else {
//     return NextResponse.json({ status: 200, isCreated: true });
//   }
// }

export const POST = async (request: NextRequest) => {
  const { anime_mal_id, user_email, anime_image, anime_title } =
    await request.json();

  const data = { anime_mal_id, user_email, anime_image, anime_title };

  const createCollection = await prisma.collection.create({ data });

  if (!createCollection) {
    return NextResponse.json({ status: 500, isCreated: false });
  } else {
    return NextResponse.json({ status: 200, isCreated: true });
  }
};
