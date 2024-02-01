import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { stack as Menu } from "react-burger-menu";
import classNames from "classnames";
import vfwLogo from "../assets/Images/VFW-logo-footer.png";

const Nav = ({ isMobile }) => {
  const [opacity, setOpacity] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    setOpacity(scrollTop > 10 ? 1 : 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Ensure to add an empty dependency array to run the effect only once

  const navbarStyle = {
    backgroundColor: `rgba(0,0,0, ${opacity})`,
  };

  var styles = {
    bmBurgerButton: {
      position: "fixed",
      width: "36px",
      height: "30px",
      left: "36px",
      top: "36px",
      zIndex: 100,
    },
    bmBurgerBars: {
      background: "#ffffff",
    },
    bmBurgerBarsHover: {
      background: "#a90000",
    },
    bmCrossButton: {
      height: "24px",
      width: "24px",
    },
    bmCross: {
      background: "#141414",
    },
    bmMenuWrap: {
      position: "fixed",
      height: "100%",
    },
    bmMenu: {
      background: "#141414",
      padding: "2.5em 1.5em 0",
      fontSize: "1.15em",
    },
    bmMorphShape: {
      fill: "#373a47",
    },
    bmItemList: {
      color: "#141414",
      padding: "0.8em",
    },
    bmItem: {
      display: "inline-block",
    },
    bmOverlay: {
      background: "#141414",
    },
  };

  return (
    <>
      {isMobile ? (
        <div className="fixed z-50 top-0 right-0">
          <Menu right isOpen={isOpen} menuClicked={toggleMenu} styles={styles}>
            <div>
              <NavLink
                to="/"
                onClick={toggleMenu}
                className="text-white font-Libel text-2xl"
              >
                Home
              </NavLink>
              <NavLink>
                <h2 className="text-white  font-Libel text-2xl ">Events</h2>
              </NavLink>
              <NavLink onClick={toggleMenu} to="/memorial">
                <h2 className="text-white font-Libel text-2xl ">Memorial</h2>
              </NavLink>
              <NavLink>
                <h2 className="text-white font-Libel text-2xl ">
                  Brick Locator
                </h2>
              </NavLink>
            </div>
          </Menu>
        </div>
      ) : (
        <>
          <div
            className="w-full fixed z-30 ease-in-out duration-300 h-[100px] pt-5"
            style={navbarStyle}
          >
            <div className="w-full h-[100px] flex justify-evenly mx-auto">
              <div className="w-1/2">
                <img
                  className={classNames(
                    "h-11",
                    opacity > 0 ? "opacity-1" : "opacity-0"
                  )}
                  src={vfwLogo}
                  alt="logo"
                ></img>
              </div>
              <NavLink to="/" className="text-white font-Libel text-2xl">
                Home
              </NavLink>
              <NavLink>
                <h2 className="text-white  font-Libel text-2xl ">Events</h2>
              </NavLink>
              <NavLink to="/memorial">
                <h2 className="text-white font-Libel text-2xl ">Memorial</h2>
              </NavLink>
              <NavLink>
                <h2 className="text-white font-Libel text-2xl ">
                  Brick Locator
                </h2>
              </NavLink>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Nav;
