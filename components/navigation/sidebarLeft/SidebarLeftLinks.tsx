"use client";

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarLeftLinks = () => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <ul className="mt-20 flex flex-col gap-4">
      {sidebarLinks.map((link) => (
        <Link
          key={link.label}
          href={link.route}
          className={`flex items-center rounded-lg ${isActive(link.route) ? "primary-gradient" : ""} gap-4 p-4`}
        >
          <Image
            src={link.imgURL}
            alt={link.label}
            width={20}
            height={20}
            className={cn("text-black", {
              "invert-colors": !isActive(link.route),
            })}
          />
          <p
            className={`base-bold hidden lg:block dark:text-light-900 text-dark-100 ${isActive(link.route) ? "text-light-900" : ""}`}
          >
            {link.label}
          </p>
        </Link>
      ))}
    </ul>
  );
};

export default SidebarLeftLinks;
