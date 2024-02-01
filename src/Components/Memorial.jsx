import React, { useState, useEffect } from "react";
import vfwLogo from "../assets/Images/VFW-logo-footer.png";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import classNames from "classnames";
import { NavLink  } from "react-router-dom";
import { motion } from "framer-motion";
const Memorial = ({ isMobile }) => {
  const [description, setDescription] = useState();

  console.log(description);

  useEffect(() => {
    const getMemorial = async () => {
      try {
        const api = "http://localhost:1337/api/memorial-descriptions";
        const response = await axios.get(api);

        if (
          response.data &&
          response.data.data &&
          response.data.data[0] &&
          response.data.data[0].attributes
        ) {
          setDescription(response.data.data[0].attributes);
        } else {
          console.error("Invalid response format:", response);
        }
      } catch (error) {
        console.error("Error fetching memorial data:", error.message);
      }
       
    };

    getMemorial();
  }, []);

  return (
    <div className="w-full h-screen">
      <h1 className="p-10 text-white text-3xl font-Rothwell">
        Castro Valley Veteran Memorial
      </h1>
      <div
        className={classNames(
          "flex  aspect-auto text-white p-10",
          isMobile ? "w-full" : "w-1/2"
        )}
      >
        {description ? (
          <ReactMarkdown>{description.description}</ReactMarkdown>
        ) : null}
      </div>
      <div
        className={classNames(
          "w-1/4 aspect-square rounded p-10",
          isMobile ? "w-2/3" : null
        )}
      >
        <iframe
          title="Located"
          className="w-full h-full  rounded "
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3156.449907630672!2d-122.08947629999997!3d37.70911610000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f91f0cca646d3%3A0xc249012f5e1998aa!2sCastro%20Valley%20Veterans%20Memorial!5e0!3m2!1sen!2sus!4v1702279079949!5m2!1sen!2sus"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Memorial;
