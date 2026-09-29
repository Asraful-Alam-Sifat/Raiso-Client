import Link from "next/link";
import React from "react";
import ThemeToggle from "../Theme/ThemeToggle";
import brandLogo from "@/assets/logo/brand-logo.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className=" navbar bg-base-100 shadow-sm ">
      <div className="w-11/12 mx-auto py-2 flex items-center justify-between">
        <div className="navbar-start w-auto">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/explore">Explore</Link>
              </li>
              <li>
                <Link href="/how-it-works">How it works</Link>
              </li>
              <li>
                <Link href="/creator-create">Start a Campaign</Link>
              </li>
            </ul>
          </div>
          <div>
            <Link id="navbar-logo" className="flex items-baseline font-(family-name:--font-heading)" href="/">
              <Image src={brandLogo} alt="Logo" className="w-7 h-auto" />
              <span className="font-extrabold text-2xl italic uppercase">
                aiso
              </span>
            </Link>
          </div>
        </div>
       {/* Desktop Center Links */}
<div className="navbar-center hidden lg:flex">
  <ul className="flex items-center gap-6 px-1">
    <li>
      <Link href="/" className="hover:text-gray-500/85 transition-colors">
        Home
      </Link>
    </li>
    <li>
      <Link href="/explore" className="hover:text-gray-500/85 transition-colors">
        Explore
      </Link>
    </li>
    <li>
      <Link href="/how-it-works" className="hover:text-gray-500/85 transition-colors">
        How it works
      </Link>
    </li>
    <li>
      <Link href="/creator-create" className="hover:text-gray-500/85 transition-colors">
        Start a Campaign
      </Link>
    </li>
  </ul>
</div>

        <div className="navbar-end w-auto gap-1">
            <ThemeToggle />
          <div id="navright" className="space-x-2">
            
            <span className="text-sm border border-gray-500/70 px-2.5 py-2 rounded-full ">
              <span className="text-lg">⚡</span> <b data-credits className="text-lg">50</b> credits
            </span>
{/* Login Button */}
<Link className="btn border text-base border-neutral-content transition-all duration-150 hover:-translate-y-0.5 active:translate-y-0 font-(family-name:--font-heading)" href="login.html">
  Login
</Link>

{/* Register Button */}
<Link className="btn primary text-base bg-lime-300/75 transition-all duration-150 hover:-translate-y-0.5 active:translate-y-0 font-(family-name:--font-heading)" href="register.html">
  Register
</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
