import type { FC } from "react";
import { Logo } from "./Logo";

export const Header: FC = () => {
  return (
    <header className="bg-indigo-600 h-16">
      <nav className="h-full w-full" aria-label="Top">
        <div className="flex h-full px-2 sm:px-4 md:px-6 lg:px-8 w-full items-center justify-between border-indigo-500">
          <Logo /> 
          <a href="#" className="inline-block rounded-md border border-transparent bg-white py-2 px-4 text-base font-medium text-indigo-600 hover:bg-indigo-50">Выйти</a>
        </div>
      </nav>
    </header>
  )
}