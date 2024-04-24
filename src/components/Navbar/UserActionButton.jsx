import { authUserSession } from "@/lib/auth-libs";
import Link from "next/link";

export const UserActionButton = async () => {
  const user = await authUserSession();
  // console.log("Data User: ", user);

  const actionLabel = user ? "Sign Out" : "Sign In";
  const actionURL = user ? "/api/auth/signout" : "/api/auth/signin";

  return (
    <div>
      {user ? (
        <Link href="/users/dashboard" className="text-white me-5">
          Profile
        </Link>
      ) : null}
      <Link
        href={actionURL}
        className="text-white bg-[#fd1b44] px-5 py-2 rounded "
      >
        {actionLabel}
      </Link>
    </div>
  );
};

export default UserActionButton;
