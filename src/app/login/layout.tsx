"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
  const pathName = usePathname();
  console.log("pathName", pathName);
  return (
    <main>
      <div className="flex justify-center items-center gap-[15px] mb-[24px]">
        <div>
          {" "}
          <Link href={"/login"}>Login</Link>
        </div>

        <div>
          {" "}
          <Link href={"/login/registrationAdmin"}>admin Registration</Link>
        </div>
        <div>
          {" "}
          <Link href={"/login/registrationUser"}>User Registration</Link>
        </div>
      </div>
      {pathName !== "/login" ? (
        <div>
          {" "}
          <Link href={"/"}>go to home</Link>
        </div>
      ) : null}
      {children}
    </main>
  );
}
