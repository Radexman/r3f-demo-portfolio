import { useState } from "react";
import { NAV_LINKS } from "../constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleHamburgerMenu() {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }

  const NavItems = () => {
    return (
      <ul className="nav-ul text-white-600">
        {NAV_LINKS.map(({ id, name, href }) => (
          <li key={id} className="nav-li">
            <a href={href} className="nav-li_a" onClick={() => {}}>
              {name}
            </a>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-black/90">
      <div className="mx-auto max-w-7xl">
        <div className="c-space mx-auto flex items-center justify-between p-5">
          <a
            href="/"
            className="text-xl font-bold text-neutral-400 transition-colors hover:text-white"
          >
            Adrian
          </a>
          <button
            onClick={toggleHamburgerMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              alt={isOpen ? "Close hamburger menu" : "Open hamburger menu"}
              className="h-6 w-6"
            />
          </button>
          <nav className="hidden sm:flex">
            <NavItems />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
