import React from "react";
import vfwlogo from "../assets/Images/VFW-logo-footer.png";
import vfwimage from "../assets/Images/vfw-1.jpeg";
import classNames from "classnames";

import Nav from "./Nav";
import Home from "./Home";

const Hero = ({isMobile}) => {
  // const [setIsMobileView, isMobileView] = useState(false)

  // const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   const handleMobileView = () => {
  //     setIsMobile(window.innerWidth <= 768);
  //   };

  //   //Listening for window resize events
  //   window.addEventListener("resize", handleMobileView);

  //   return () => {
  //     window.removeEventListener("resize", handleMobileView);
  //   };
  // });

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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi
              enim nunc faucibus a pellentesque sit amet porttitor eget.
              Vehicula ipsum a arcu cursus vitae congue mauris. Bibendum neque
              egestas congue quisque egestas. Ac tortor dignissim convallis
              aenean et tortor at risus viverra. Adipiscing enim eu turpis
              egestas pretium aenean. Enim diam vulputate ut pharetra sit amet
              aliquam id diam. Ornare suspendisse sed nisi lacus sed viverra
              tellus. Lorem ipsum dolor sit amet consectetur adipiscing. Magna
              ac placerat vestibulum lectus mauris ultrices. Hendrerit gravida
              rutrum quisque non tellus orci ac. Massa massa ultricies mi quis
              hendrerit dolor magna eget est. Cursus eget nunc scelerisque
              viverra mauris in. Sapien pellentesque habitant morbi tristique
              senectus et.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 w-full">
          <Nav />
        </div>
      </div>
      <Home isMobile={isMobile }/>
    </>
  );
};

export default Hero;
