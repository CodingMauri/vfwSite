import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import vfwimage from "../assets/Images/vfw-1.jpeg";
const Home = () => {
  //Need state to store image data

  const data = [
    {
      id: 1,
      images: vfwimage,
    },
    {
      id: 2,
      images: vfwimage,
    },
    {
      id: 3,
      images: vfwimage,
    },
  ];

  //Settings for Carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="w-full h-full ">
        <div className="w-full h-1/3 flex justify-center pt-10">
          <div className="w-[90%] h-[250px]">
            <Slider>
              {data.map((image) => (
                <>
                  <img
                    className="w-full h-[250px] object-cover rounded "
                    src={image.images}
                    id={image.id}
                    alt="vfw"
                  ></img>
                </>
              ))}
            </Slider>
          </div>
        </div>

        <div className="flex w-full h-full p-10">
          <div className="w-1/2 h-full  ">
            <div className = "w-full h-full ">
              <h2 className="text-white text-3xl font-Rothwell p-10">
                Upcoming Events
              </h2>
              <div className="leading-4 p-6 w-2/3">
                <p className="text-white text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Gravida in fermentum et sollicitudin ac orci phasellus egestas
                  tellus. Elementum nisi quis eleifend quam. Vel fringilla est
                  ullamcorper eget nulla facilisi etiam dignissim diam. Elit at
                  imperdiet dui accumsan sit amet nulla facilisi morbi. Viverra
                  tellus in hac habitasse. Gravida cum sociis natoque penatibus
                  et magnis dis parturient montes. Mauris a diam maecenas sed
                  enim. Suscipit tellus mauris a diam maecenas sed enim ut sem.
                  Enim lobortis scelerisque fermentum dui faucibus. Orci a
                  scelerisque purus semper eget duis at tellus at. Gravida arcu
                  ac tortor dignissim convallis.
                </p>
              </div>
            </div>
          </div>
          <div className="border-r border-2 border-white mr-12"></div>
          <div className="w-1/2 h-full  ">
            <div className = "w-full h-full ">
              <h2 className="text-white text-3xl font-Rothwell p-10">
                Commanders Message
              </h2>
              <div className="leading-4 p-6 w-2/3">
                <p className="text-white text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Gravida in fermentum et sollicitudin ac orci phasellus egestas
                  tellus. Elementum nisi quis eleifend quam. Vel fringilla est
                  ullamcorper eget nulla facilisi etiam dignissim diam. Elit at
                  imperdiet dui accumsan sit amet nulla facilisi morbi. Viverra
                  tellus in hac habitasse. Gravida cum sociis natoque penatibus
                  et magnis dis parturient montes. Mauris a diam maecenas sed
                  enim. Suscipit tellus mauris a diam maecenas sed enim ut sem.
                  Enim lobortis scelerisque fermentum dui faucibus. Orci a
                  scelerisque purus semper eget duis at tellus at. Gravida arcu
                  ac tortor dignissim convallis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
