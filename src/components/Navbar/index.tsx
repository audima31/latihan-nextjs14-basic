import Link from "next/link";

const Navbar = (props: any) => {
  return (
    <nav
      className="flex flex-col sm:flex-row  items-center sm:items-start sm:justify-between px-5 py-3 z-10"
      style={{
        backgroundColor: "#18191c",
        width: "100%",
        position: "sticky",
        top: 0,
      }}
    >
      <Link href="/" className="text-white font-bold text-xl">
        AnimeIndo
      </Link>
      <div>
        <input type="text" placeholder=" Search..." />
      </div>
    </nav>
  );
};

export default Navbar;
