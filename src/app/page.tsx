import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <h1 className="mb-4">This is Home Layout </h1>
      <ul>
        {" "}
        <li className="pb-4">
          <Link href="/login">Login</Link>
        </li>
        <li className="pb-4">
          <Link href="/blog">Blog</Link>
        </li>
      </ul>
    </div>
  );
}
