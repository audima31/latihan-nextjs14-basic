import { authUserSession } from "@/lib/auth-libs";
import Image from "next/image";
import Link from "next/link";

const DashboardPage = async () => {
  const user = await authUserSession();
  // console.log(user)

  return (
    <div className="px-5 mt-28 sm:mt-24 py-3 text-white flex flex-col justify-center items-center ">
      <h5 className="text-2xl font-bold">Welcome, {user?.name}</h5>
      {user?.image && user?.name && (
        <Image src={user.image} alt={user.name} width={250} height={250} />
      )}
      <div className="flex flex-wrap py-8 gap-4 sm:gap-2 ">
        <Link
          href="/users/dashboard/collection"
          className="bg-[#fd1b44e8] hover:bg-[#333333] transition-all py-3 px-3 text-xl "
        >
          My Collections
        </Link>
        <Link
          href="/users/dashboard/comments"
          className="bg-[#fd1b44e8] hover:bg-[#333333] transition-all py-3 px-3 text-xl"
        >
          My Comments
        </Link>
        {/* 
        <Link
          href="users/dashboard/collection"
          className="bg-[#fd1b44e8] hover:bg-[#333333] transition-all py-3 px-3 text-xl"
        >
          My Collection
        </Link>

        <Link
          href="users/dashboard/collection"
          className="bg-[#fd1b44e8] hover:bg-[#333333] transition-all py-3 px-3 text-xl"
        >
          My Collection
        </Link> */}
      </div>
    </div>
  );
};

export default DashboardPage;
