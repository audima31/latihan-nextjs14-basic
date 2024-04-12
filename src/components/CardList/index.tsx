import Image from "next/image";
import Link from "next/link";

const CardList = (data: any) => {
  return (
    <div>
      <Link href={`/${data.id}`} className="cursor-pointer">
        <div className="shadow-lg">
          <Image
            src={data.image}
            alt="..."
            width={600}
            height={400}
            className="rounded-2xl w-full object-cover"
          />
          <h3 className="text-center text-white">{data.title}</h3>
        </div>
      </Link>
    </div>
  );
};

export default CardList;
