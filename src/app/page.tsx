import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-[1400px] mx-auto px-4">
      <span>Home layout </span>
      <div>
        {" "}
        <Link href="/login">Login</Link>
      </div>
    </div>
  );
}
