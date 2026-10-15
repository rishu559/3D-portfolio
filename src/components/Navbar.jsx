import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../style";
import { navLinks, socialLinks } from "../constants";
import { menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary/95 backdrop-blur-sm border-b border-black-200`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p className="text-ink text-[18px] font-bold cursor-pointer flex font-display tracking-tight">
            Rishu&nbsp;
            <span className="sm:block hidden font-normal text-ink-muted">
              Shukla
            </span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10 items-center">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-ink" : "text-secondary"
              } hover:text-ink text-[16px] font-medium cursor-pointer transition-colors`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
          <li>
            <a
              href={socialLinks.resume}
              download="RishuShukla_Resume2026.pdf"
              className="text-ink hover:text-ink-muted text-[16px] font-medium border-b border-ink/30 hover:border-ink transition-colors"
            >
              Resume
            </a>
          </li>
        </ul>

        <div className="sm:hidden flex justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } bg-tertiary border border-black-200 absolute top-20 right-3 min-w-[140px] z-10 rounded-xl shadow-card`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4 p-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-ink" : "text-secondary"
                  } font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(false);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
              <li>
                <a
                  href={socialLinks.resume}
                  download="RishuShukla_Resume2026.pdf"
                  className="text-ink font-medium text-[16px]"
                  onClick={() => setToggle(false)}
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
