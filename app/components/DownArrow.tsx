import { ArrowDown } from "lucide-react";
import Link from "next/link";
import React from "react";

interface Props {
  href: string;
}

const DownArrow = ({ href }: Props) => {
  return (
    <Link href={href} className="mt-20">
      <ArrowDown className="size-8 animate-bounce text-teal-500" />
    </Link>
  );
};

export default DownArrow;
