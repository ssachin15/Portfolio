import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

export function Header() {
  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Skills", href: "/skills" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Logo - Top Left */}
      <div className="fixed top-4 md:top-5 left-4 md:left-6 z-[60] cursor-pointer">
        <p className="
          font-mono font-bold 
          text-lg sm:text-xl md:text-2xl   /* 👈 responsive */
          bg-gradient-to-r from-indigo-400/80 via-white/80 to-rose-400/80 
          bg-clip-text text-transparent 
          tracking-wide
          hover:from-indigo-400 hover:via-white hover:to-rose-400
          transition-all duration-300
        ">
          Sachin.dev
        </p>
      </div>

      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-12 md:pt-16">
        <nav className={cn(
          "flex items-center gap-4 px-6 py-3",
          "rounded-xl border border-white/[0.1]",
          "bg-white/[0.05] backdrop-blur-lg",
          "shadow-lg"
        )}>
          {links.map((link) => (
            <NavLink
              key={link.label}
              to={link.href}
              className={({ isActive }) =>
                cn(
                  "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",

                  isActive
                    ? "bg-gradient-to-r from-indigo-500/30 to-rose-500/30 text-white border border-indigo-400/40 hover:shadow-[0_0_15px_rgba(99,102,241,0.3)]"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </header>
    </>
  );
}

