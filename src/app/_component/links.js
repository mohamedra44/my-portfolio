import Link from "next/link";

export default function Links({ LinksName }) {
  return LinksName.map((ele) => {
    if (ele === "Home") {
      return (
        <Link href={`/`} key={ele} className="hover:bg-second p-2.5 rounded-lg">
          {ele}
        </Link>
      );
    } else {
      return (
        <Link
          href={`/${ele}`}
          key={ele}
          className="hover:bg-second p-2.5 rounded-lg"
        >
          {ele}
        </Link>
      );
    }
  });
}
