import { MoveDown } from "lucide-react";
import Link from "next/link";
import React from "react";

interface Props {
  href: string;
}

const DownArrow = ({ href }: Props) => {
  return (
    <Link href={href}>
      <MoveDown className="mt-20 size-10 animate-bounce text-teal-500" />
    </Link>
  );
};

export default DownArrow;
