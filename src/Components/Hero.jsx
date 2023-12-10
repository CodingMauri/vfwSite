import React, {useMemo} from "react";
import vfwlogo from "../assets/Images/VFW-logo-footer.png";
import vfwimage from "../assets/Images/vfw-1.jpeg";
import classNames from "classnames";

import Nav from "./Nav";
import Home from "./Home";
import useFetch from "./hooks/useFetch";

const Hero = ({isMobile}) => {
  

  //Making the Call to the backend strapi database

  // const apiKey = process.env.REACT_APP_STRAPI_KEY;

  const endpoints = ["events", "abouts", "commanders-messages", ]
  
  const {loading,data} = useFetch(endpoints)

  console.log(data)
  



  if (loading) return <p>Loading...</p>
  //Adjusting for a seperate branch


  return (
    <>
      <div className="w-full h-screen items-center bg-red-500 flex relative">
        <div
          className={classNames(
            " absolute w-screen h-screen z-10 ",
            isMobile
              ? " bg-gradient-to-t from-black  to-transparent"
              : "bg-gradient-to-r from-black via-black to-transparent"
          )}
        />
        <div className="absolute h-screen w-screen z-0">
          <img
            className="w-full h-full object-cover"
            src={vfwimage}
            alt="vfw"
          />
        </div>

        <div className={classNames("flex flex-col justify-start p-10 z-10 ", isMobile ? "w-full" : "w-1/2")}>
          <img
            src={vfwlogo}
            className=" w-[350px] object-contain h-[200px]"
            alt="vfwlogo"
          />

          <div className="w-full leading-6">
            <h1
              className={classNames(
                "text-white font-Rothwell",
                isMobile ? "text-xl" : "text-3xl"
              )}
            >
              Post 9601
            </h1>
            <p
              className={classNames(
                "text-white font-serif pt-1", isMobile ? "text-xs" : "text-sm"
              )}
            >
            {data[1].about}
            </p>
          </div>
        </div>
      
      </div>
      <Home isMobile={isMobile } data = {data}/>
    </>
  );
};

export default Hero;
