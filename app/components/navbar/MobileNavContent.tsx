"use client";
import { SheetClose } from "@/components/ui/sheet";
import { navbarLinks } from "@/lib/data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNavContent = () => {
  const pathname = usePathname();
  return (
    <section className="flex h-full flex-col gap-6 pt-16">
      {navbarLinks.map((el) => (
        <SheetClose asChild key={el.href}>
          <Link
            href={el.href}
            className={cn(
              pathname === el.href
                ? "text-teal-500"
                : "text-white hover:text-teal-500",
              "flex items-center gap-3 rounded-lg px-3 py-2 transition-all"
            )}
          >
            <el.icon className="size-6" />
            {el.name}
          </Link>
        </SheetClose>
      ))}
    </section>
  );
};

export default MobileNavContent;
