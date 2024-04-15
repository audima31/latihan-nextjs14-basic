import { authUserSession } from "@/lib/auth-libs";
import Image from "next/image";

const DashboardPage = async () => {
  const user = await authUserSession();
  console.log(user);

  return (
    <div className="px-5 mt-20 sm:mt-11 py-3 text-white">
      <p>Welcome, {user?.name}</p>
      {user?.image && user?.name && (
        <Image src={user.image} alt={user.name} width={250} height={250} />
      )}
    </div>
  );
};

export default DashboardPage;
