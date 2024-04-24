import prisma from "@/lib/prisma";

export async function POST(request: any) {
  //Untuk mengambil data dari FrontEnd
  console.log(request.json());

  const { anime_mal_id, user_email } = await request.json();
  const data = { anime_mal_id, user_email };

  const createCollection = await prisma.collection.create({ data });

  if (!createCollection) {
    return Response.json({ status: 500, isCreated: false });
  } else {
    return Response.json({ status: 200, isCreated: true });
  }
}
