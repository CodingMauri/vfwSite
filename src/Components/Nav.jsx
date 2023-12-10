import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { stack  as Menu } from "react-burger-menu";
const Nav = ({ isMobile }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  var styles = {
    bmBurgerButton: {
      position: "fixed",
      width: "36px",
      height: "30px",
      left: "36px",
      top: "36px",
      zIndex:100
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
        <div className=" fixed z-50 top-0 right-0 ">
          <Menu   right styles={styles} >
            <div>
              <NavLink to = "/" className = "text-white font-Libel text-2xl">Home</NavLink>
              <NavLink>
                <h2 className="text-white  font-Libel text-2xl ">Events</h2>
              </NavLink>
              <NavLink isOpen = {false} to="/memorial">
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
        <div className = "w-full absolute bottom-0 h-[100px]">

          <div className="sticky  w-full h-[100px] flex justify-evenly z-40  mx-auto">
          <NavLink to = "/" className = "text-white font-Libel text-2xl">Home</NavLink>
            <NavLink>
              <h2 className="text-white  font-Libel text-2xl ">Events</h2>
            </NavLink>
            <NavLink to="/memorial">
              <h2 className="text-white font-Libel text-2xl ">Memorial</h2>
            </NavLink>
            <NavLink>
              <h2 className="text-white font-Libel text-2xl ">Brick Locator</h2>
            </NavLink>
          </div>
        </div>
        </>
      )}
    </>
  );
};

export default Nav;
