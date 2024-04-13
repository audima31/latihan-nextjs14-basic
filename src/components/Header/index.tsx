const { default: Link } = require("next/link");

const HeaderComponent = (data: any) => {
  return (
    <div className="flex justify-between items-center py-3">
      <h1 className="text-white text-lg py-3 font-semibold">{data.title}</h1>
      <Link
        href={`${data.link}`}
        className="text-white underline hover:text-gray-400 transition-all "
      >
        {data.title2}
      </Link>
    </div>
  );
};

export default HeaderComponent;
