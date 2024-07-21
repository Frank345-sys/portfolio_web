import React, { useState, useEffect, useRef, useCallback } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import useTheme from "../utils/useTheme";
import Toggle from "../components/Toggle";

function Header() {
  const menuRef = useRef(null);
  const [theme, toggleTheme, changeThemeManual] = useTheme();

  const [isDark, setIsDark] = useState(theme === "light" ? false : true);

  const handleChange = useCallback((e) => {
    if (e.matches) {
      changeThemeManual("dark");
    } else {
      changeThemeManual("light");
    }
    setIsDark(e.matches);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [handleChange]);

  const handleChangeTheme = () => {
    setIsDark(!isDark);
    toggleTheme();
  };

  const [openAndCloseMenu, setOpenAndCloseMenu] = useState(true);
  const [showHeader, setShowHeader] = useState(true);
  const [showBoxShadow, setShowBoxShadow] = useState(true);
  const lastScrollY = useRef(0);

  const handleScroll = useCallback(() => {
    if (window.scrollY > lastScrollY.current) {
      setShowHeader(false);
    } else {
      setShowHeader(true);
    }
    setShowBoxShadow(!window.scrollY > 0);
    lastScrollY.current = window.scrollY;
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  /*
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    if (window.scrollY > lastScrollY) {
      setShowHeader(false);
    } else {
      setShowHeader(true);
    }
    setShowBoxShadow(!window.scrollY > 0);
    setLastScrollY(window.scrollY);
  }, [lastScrollY]);

  useEffect(() => {
    console.log("Se ejecuto useEffect Header");

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);
  */

  useEffect(() => {
    if (openAndCloseMenu) {
      document.body.style.overflowY = "auto";
    } else {
      document.body.style.overflowY = "hidden";
    }
  }, [openAndCloseMenu]);

  const closeOrOpenNav = () => {
    setOpenAndCloseMenu(!openAndCloseMenu);
  };

  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      closeOrOpenNav();
    }
  };

  return (
    <header
      className={`header ${showHeader ? "visible" : "hidden"} ${
        showBoxShadow ? "header_box-shadow-hidden" : ""
      }`}
    >
      <div className="header__content">
        <Toggle
          isChecked={isDark}
          hanleChangeTheme={handleChangeTheme}
        ></Toggle>
        <ul className="nav-bar-pc">
          <li>
            <a href="#main">
              <b>Inicio</b>
            </a>
          </li>
          <li>
            <a href="#about-me">
              <b>Sobre mi</b>
            </a>
          </li>
          <li>
            <a href="#trajectory">
              <b>Trayectoria</b>
            </a>
          </li>
          <li>
            <a href="#projects">
              <b>Proyectos</b>
            </a>
          </li>
          <li>
            <a href="#contact">
              <b>Contacto</b>
            </a>
          </li>
        </ul>
      </div>

      <div className="header__content-movil">
        <button className="header__button-menu" onClick={closeOrOpenNav}>
          <SwitchTransition>
            <CSSTransition
              key={openAndCloseMenu}
              nodeRef={menuRef}
              timeout={300}
              classNames="fade"
              unmountOnExit
            >
              <i
                className={`bx ${openAndCloseMenu ? "bx-menu" : "bx-x"} `}
                ref={menuRef}
              ></i>
            </CSSTransition>
          </SwitchTransition>
        </button>
        <div
          className={`header__content-nav-bar-movil ${
            openAndCloseMenu
              ? ""
              : "header__content-nav-bar-movil_visibility-visible"
          }`}
          onClick={handleOutsideClick}
        >
          <ul
            className={`nav-bar-movil ${
              openAndCloseMenu ? "" : "nav-bar-movil_visibility-visible"
            }`}
          >
            <li>
              <a
                href="#main"
                onClick={() => {
                  closeOrOpenNav();
                }}
              >
                <b>Inicio</b>
              </a>
            </li>
            <li>
              <a
                href="#about-me"
                onClick={() => {
                  closeOrOpenNav();
                }}
              >
                <b>Sobre mi</b>
              </a>
            </li>
            <li>
              <a
                href="#trajectory"
                onClick={() => {
                  closeOrOpenNav();
                }}
              >
                <b>Trayectoria</b>
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={() => {
                  closeOrOpenNav();
                }}
              >
                <b>Proyectos</b>
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => {
                  closeOrOpenNav();
                }}
              >
                <b>Contacto</b>
              </a>
            </li>
            <li>
              <Toggle
                isChecked={isDark}
                hanleChangeTheme={handleChangeTheme}
              ></Toggle>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
