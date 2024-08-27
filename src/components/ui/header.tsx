// @flow strict
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const Header: FC = () => {
  return (
    <nav className="bg-red-500 mb-18">
      <div className="flex items-center justify-between">
        <div className="flex flex-shrink-0 items-center">
          <aside className="flex items-center gap-[2px]">
            {/* <p className="text-3xl font-bold">No</p> */}
            <Link href="/">
              <Image
                src="/dd.png"
                width={70}
                height={70}
                alt="logo"
                className="shadow-sm"
              />
            </Link>
            {/* <p className="text-3xl font-bold">xiz</p> */}
          </aside>

          <Link
            href="/"
            className="text-[#16f2b3] mt-6 text-xl font-bold"
          >
            Yogesh Marketing Expert
          </Link>
        </div>

        <ul
          className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100"
          id="navbar-default"
        >
          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/about"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                ABOUT
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/services"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                SERVICES
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/contact"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                CONTACT
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
