import React from "react";
import vfwlogo from "../assets/Images/VFW-logo-footer.png";
import vfwimage from "../assets/Images/vfw-1.jpeg";
import Nav from "./Nav";
import Home from "./Home"

const Hero = () => {
  return (
    <>
      <div className="w-full h-screen items-center bg-red-500 flex relative">
        <div className=" absolute w-screen h-screen bg-gradient-to-r from-black via-black to-transparent z-10 " />
        <div className="absolute h-screen w-screen z-0">
          <img
            className="w-full h-full object-cover"
            src={vfwimage}
            alt="vfw"
          />
        </div>

        <div className="flex flex-col w-1/2 justify-start p-10 z-10 ">
          <img
            src={vfwlogo}
            className=" w-[350px] object-contain h-[200px]"
            alt="vfwlogo"
          />

          <div className="w-full leading-6">
            <h1 className="text-white font-Rothwell text-3xl">Post 9601</h1>
            <p className="text-white md:text-sm sm:text-xs font-serif pt-1">
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
      <div className =  "absolute bottom-0 w-full">
          <Nav />
      </div>
      </div>
      <Home />
    </>
  );
};

export default Hero;
