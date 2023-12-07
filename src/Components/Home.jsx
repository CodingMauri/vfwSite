import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import classNames from "classnames";
import vfwimage from "../assets/Images/vfw-1.jpeg";
const Home = ({ isMobile }) => {
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
        {/* Slider Container Start */}
        <div className="w-full h-1/3 flex justify-center pt-10">
          <div className="w-[90%] h-[250px] p-7 mb-9">
            <Slider {...settings}>
              {data.map((image) => (
                <>
                  <img
                    className=" w-full h-[279px] mx-auto object-cover rounded  "
                    src={image.images}
                    id={image.id}
                    alt="vfw"
                  ></img>
                </>
              ))}
            </Slider>
          </div>
        </div>
        {/* Slider Container End  */}

        {/* TEXT-AREA-START */}

        <div
          className={classNames(
            "w-full h-full p-10",
            isMobile ? "flex flex-col" : "flex"
          )}
        >
          <div
            className={classNames("h-full  ", isMobile ? "w-full" : "w-1/2")}
          >
            <div className="w-full h-full ">
              <h2
                className={classNames(
                  "text-white text-3xl font-Rothwell p-10",
                  isMobile ? "text-2xl" : null
                )}
              >
                Upcoming Events
              </h2>
              <div className=" w-[90%] leading-4 p-6 ">
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
              <div className={classNames(" w-1/3 aspect-square rounded p-4 ", isMobile ? " w-11/12": null)}>
                <iframe
                  title = "Located"
                  className="w-full h-full rounded"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3157.110012879915!2d-122.0875749241977!3d37.69361531683099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f9188123c6b5b%3A0x13bc47104e62b9a8!2sThe%20Moose%20-%20Hayward-Castro%20Valley%20Lodge%201491!5e0!3m2!1sen!2sus!4v1701658735475!5m2!1sen!2sus"
xs                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="border-r border-2 border-white mr-12"></div>
          <div
            className={classNames(" h-full  ", isMobile ? "w-full" : "w-1/2")}
          >
            <div className="w-full h-full ">
              <h2
                className={classNames(
                  "text-white text-3xl font-Rothwell p-10",
                  isMobile ? "text-2xl" : null
                )}
              >
                Commanders Message
              </h2>
              <div className="w-[80%] leading-4 p-6 ">
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
          {/* TEXT AREA END */}
        </div>
        </div>
     

    </>
  );
};

export default Home;
