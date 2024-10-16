import { cn } from "@/lib/utils";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import React from "react";

interface Props {
  href: string;
  className?: string;
}

const DownArrow = ({ href, className }: Props) => {
  return (
    <Link href={href} className={cn("mt-20", className)}>
      <ArrowDown className="size-8 animate-bounce text-teal-500" />
    </Link>
  );
};

export default DownArrow;
