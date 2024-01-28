import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "app/styles/pager.scss";
import Image from "next/image";
import Link from "next/link";
import FullscreenBanner from "./FullscreenBanner";

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 2,
  };

  return (
    <div className="slider-banner">
      <Slider {...settings}>
        <FullscreenBanner
          title="GDL Consultores"
          color="var(--primary)"
          color2="var(--secondary-trans)"
          imgPath="/bannerBG1.jpg"
        />

        <FullscreenBanner
          title="Second slide"
          color="var(--secondary)"
          color2="var(--secondary-trans)"
          imgPath="/bannerIMG1.avif"
        />

        <FullscreenBanner
          title="Second slide"
          color="var(--secondary)"
          color2="var(--primary-trans)"
          imgPath="/bannerBG1.jpg"
        />
      </Slider>
      <style jsx>
        {`
          .slider-banner {
            overflow: hidden;
          }
        `}
      </style>
      ;
    </div>
  );
};

export default ImageSlider;
