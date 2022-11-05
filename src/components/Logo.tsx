import Link from "next/link";
import Image from "next/image";
import type { FC } from "react";

export const Logo: FC<{className?: string}> = ({className}) => {
  return (
    <Link className={className} href="/">
      <span className="sr-only">Your Company</span>
      <Image priority={false} width={48} height={48} className="h-12 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=white" alt="" />
    </Link>
  )
}
