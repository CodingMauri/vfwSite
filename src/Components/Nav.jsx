import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="  h-[100px] sticky flex justify-evenly z-10  mx-auto">
        
        <NavLink>
            <h2 className = "text-white  font-Libel text-2xl ">Events</h2>
        </NavLink>
        <NavLink to = '/memorial'>
            <h2 className = "text-white font-Libel text-2xl ">Memorial</h2>
        </NavLink><NavLink>
            <h2 className = "text-white font-Libel text-2xl ">Brick Locator</h2>
        </NavLink>
    </div>
  );
};

export default Nav;
