"use client";
import Link from "next/link";
import { useEffect } from "react";
import ThemeToggle from "../Theme/ThemeToggle";
import brandLogo from "@/assets/logo/brand-logo.png";
import Image from "next/image";

const Navbar = () => {

   // Sticky Navbar 
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("main-navbar");
      if (!navbar) return;

      if (window.scrollY > 50) {
        navbar.classList.add(
          "bg-black/30",
          "backdrop-blur-md",
          "shadow-sm",
          "border-gray-500",
          "dark:border-zinc-900",
        );
        navbar.classList.remove("bg-transparent", "border-transparent");
      } else {
        navbar.classList.add("bg-transparent", "border-transparent");
        navbar.classList.remove(
          "bg-black/30",
          "backdrop-blur-md",
          "shadow-sm",
          "border-zinc-900",
        );
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div id="main-navbar" className="navbar fixed top-0 left-0 w-screen z-50 bg-transparent transition-all duration-300 ease-in-out border-b border-transparent">
  <div className="w-[clamp(90%,92vw,80rem)] mx-auto py-[clamp(0.5rem,1vw,1rem)] flex items-center justify-between">
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
          <Image src={brandLogo} alt="Logo" className="w-[clamp(1.5rem,2vw,1.75rem)] h-auto" />
          <span className="font-extrabold text-[clamp(1.25rem,2vw,1.5rem)] italic uppercase">
            aiso
          </span>
        </Link>
      </div>
    </div>
    
    {/* Desktop Center Links */}
    <div className="navbar-center hidden lg:flex">
      <ul className="flex items-center gap-[clamp(1rem,2vw,1.5rem)] px-1">
        <li>
          <Link href="/" className="hover:text-gray-500/85 transition-colors text-[clamp(0.85rem,0.6vw+0.5rem,1rem)]">
            Home
          </Link>
        </li>
        <li>
          <Link href="/explore" className="hover:text-gray-500/85 transition-colors text-[clamp(0.85rem,0.6vw+0.5rem,1rem)]">
            Explore
          </Link>
        </li>
        <li>
          <Link href="/how-it-works" className="hover:text-gray-500/85 transition-colors text-[clamp(0.85rem,0.6vw+0.5rem,1rem)]">
            How it works
          </Link>
        </li>
        <li>
          <Link href="/creator-create" className="hover:text-gray-500/85 transition-colors text-[clamp(0.85rem,0.6vw+0.5rem,1rem)]">
            Start a Campaign
          </Link>
        </li>
      </ul>
    </div>

    <div className="navbar-end w-auto gap-[clamp(0.25rem,0.5vw,0.5rem)]">
      <ThemeToggle />
      <div id="navright" className="flex items-center gap-[clamp(0.3rem,0.8vw,0.5rem)]">
        
        <span className="text-[clamp(0.75rem,0.5vw+0.5rem,0.875rem)] border border-gray-500/70 py-[clamp(0.3rem,0.5vw,0.5rem)] px-[clamp(0.5rem,0.8vw,0.75rem)] rounded-full flex items-center">
          <span className="text-[clamp(0.9rem,1vw,1.125rem)] mr-1">⚡</span> <b data-credits className="text-[clamp(0.9rem,1vw,1.125rem)]">50</b>&nbsp;credits
        </span>

        {/* Login Button */}
        <Link className="btn border-2 text-[clamp(0.75rem,0.5vw+0.6rem,1rem)] py-[clamp(0.4rem,0.6vw,0.6rem)] px-[clamp(0.75rem,1vw,1rem)] border-neutral-content transition-all duration-150 hover:-translate-y-0.5 active:translate-y-0 font-(family-name:--font-heading) rounded-lg hover:glass" href="login.html">
          Login
        </Link>

        {/* Register Button */}
        <Link className="btn primary text-[clamp(0.75rem,0.5vw+0.6rem,1rem)] py-[clamp(0.4rem,0.6vw,0.6rem)] px-[clamp(0.75rem,1vw,1rem)] bg-lime-300/75 transition-all duration-150 hover:-translate-y-0.5 active:translate-y-0 font-(family-name:--font-heading) rounded-lg" href="register.html">
          Register
        </Link>
      </div>
    </div>
  </div>
</div>
  );
};

export default Navbar;
