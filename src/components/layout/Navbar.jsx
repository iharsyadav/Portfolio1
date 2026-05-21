import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#resume", label: "Resume" },
  { href: "#projects", label: "Projects" },
  { href: "#lab", label: "Lab" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      
      {/* NAVBAR */}
      <nav
        className={`
          glass
          flex items-center justify-between
          px-4 md:px-6
          py-3
          rounded-[30px]
          border border-white/40
          transition-all duration-300

          ${
            scrolled
              ? "shadow-2xl backdrop-blur-2xl scale-[0.98]"
              : "shadow-lg"
          }
        `}
      >

        {/* LOGO */}
        <a
          href="#home"
          className="flex items-center gap-3"
        >
          <div className="h-11 w-11 rounded-2xl bg-pink-300 flex items-center justify-center font-bold text-lg shadow-md">
            H
          </div>

          <div className="hidden sm:block">
            <h1 className="font-black text-lg leading-none">
              Harsh.dev
            </h1>

            <p className="text-xs text-zinc-500">
              Frontend Developer
            </p>
          </div>
        </a>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="
                  px-4 py-2
                  rounded-2xl
                  text-sm font-medium
                  text-zinc-600
                  hover:text-zinc-950
                  hover:bg-white/60
                  transition-all duration-300
                "
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA BUTTON */}
        <a
          href="#contact"
          className="
            hidden md:flex
            items-center justify-center
            px-5 py-2.5
            rounded-2xl
            bg-mint
            font-semibold
            shadow-lg
            hover:scale-105
            transition-all
          "
        >
          Let's Talk
        </a>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="
            md:hidden
            h-11 w-11
            rounded-2xl
            bg-lavender
            flex items-center justify-center
            shadow-md
          "
        >
          {open ? (
            <HiX className="text-2xl" />
          ) : (
            <HiOutlineMenuAlt3 className="text-2xl" />
          )}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div
          className="
            md:hidden
            glass
            mt-3
            p-4
            rounded-[28px]
            border border-white/40
            shadow-xl
            animate-fade-up
          "
        >
          <ul className="flex flex-col gap-2">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="
                    block
                    px-4 py-3
                    rounded-2xl
                    text-sm font-medium
                    hover:bg-white/60
                    transition
                  "
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="
              mt-4
              flex items-center justify-center
              rounded-2xl
              bg-pink-300
              py-3
              font-semibold
            "
          >
            Let's Talk
          </a>
        </div>
      )}
    </header>
  );
}