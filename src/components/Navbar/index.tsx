import Link from "next/link";
import InputSearch from "./InputSearch";
import UserActionButton from "./UserActionButton";
import NavbarEffect from "./EfekNavbar";

const Navbar = () => {
  return (
    <>
      <NavbarEffect />
      <nav
        className="navbar flex flex-col sm:flex-row items-center  sm:justify-between px-5 py-3 z-10"
        style={{
          width: "100%",
          position: "fixed",
          transition: "background-color 0.4s ease",
        }}
      >
        <Link href="/" className="text-white font-bold text-xl">
          AnimeIndo
        </Link>
        <InputSearch />
        <UserActionButton />
      </nav>
    </>
  );
};

export default Navbar;
