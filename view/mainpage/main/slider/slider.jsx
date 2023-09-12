import Slider from "react-slick";
import burger from "../../../images/main__burger_img.png";
import Image from "next/image";
import SampleNextArrow from "./sliderarrow";
import SamplePrevArrow from "./sliderarrow copy";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.scss";
export const MySlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <Image src={burger} alt="burger" />
        </div>
        <div>
          <Image src={burger} alt="burger" />
        </div>
        <div>
          <Image src={burger} alt="burger" />
        </div>
        <div>
          <Image src={burger} alt="burger" />
        </div>
        <div>
          <Image src={burger} alt="burger" />
        </div>
      </Slider>
    </div>
  );
};
