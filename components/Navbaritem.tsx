"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface NavbarItemProps {
  title: string;
  param: string;
}

export default function Navbaritem({ title, param }: NavbarItemProps) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  return (
    <Link
      className={`m-4 hover:text-amber-600 font-semibold ${
        genre === param
          ? "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
          : ""
      }`}
      href={`/?genre=${param}`}
    >
      {title}
    </Link>
  );
}
