import React, { useEffect, useState } from "react";
import axios from "axios";
import vfwlogo from "../assets/Images/VFW-logo-footer.png";
import vfwimage from "../assets/Images/vfw-1.jpeg";
import classNames from "classnames";
import { motion } from "framer-motion";
import Home from "./Home";

const Hero = ({ isMobile, data, loading }) => {
  //Making the Call to the backend strapi database

  // const apiKey = process.env.REACT_APP_STRAPI_KEY;

  const api = `http://localhost:1337/api/landing-pages?populate[0]=image`;

  const [heroImage, setHeroImage] = useState("");
  useEffect(() => {
    const getHeroImage = async () => {
      await axios
        .get(api)
        .then((res) => setHeroImage(res.data.data[0].attributes.image.data.attributes))
        .catch((err) => console.log(err));
    };

    getHeroImage();
  }, []);

  console.log(heroImage);

  if (loading) return <p>Loading...</p>;
  //Adjusting for a seperate branch

  //Variant for animation

  const slideIn = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,

      x: 0,
      transition: {
        duration: 1.5,
      },
    },
  };

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
            src={`http://localhost:1337${heroImage.url}`}
            alt="vfw"
          />
        </div>

        <div
          className={classNames(
            "flex flex-col justify-start p-10 z-10 ",
            isMobile ? "w-full" : "w-1/2"
          )}
        >
          <motion.img
            variants={slideIn}
            initial="hidden"
            animate="visible"
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
                "text-white font-serif pt-1",
                isMobile ? "text-xs" : "text-sm"
              )}
            >
              {data[2].description}
            </p>
          </div>
        </div>
      </div>
      <Home isMobile={isMobile} data={data} />
    </>
  );
};

export default Hero;
