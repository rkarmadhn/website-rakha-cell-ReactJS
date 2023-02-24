import React, { Component } from "react";
import Slider from "react-slick";
import CardComment from "../../UI/molecules/CardComment/CardComment";
export default class CommentSection extends Component {
  render() {
    const settings = {
      arrows: false,
      autoplay: true,
      autoplaySpeed: 4000,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      className: "center",
      centerMode: true,
      centerPadding: "60px",
      responsive: [
        { breakpoint: 1024, settings: { slidesToShow: 3 } },
        { breakpoint: 768, settings: { slidesToShow: 1 } },
      ],
    };
    return (
      <div className="py-8 md:px-4 px-2">
        <h3 className="text-3xl text-center italic mb-2">Review</h3>
        <Slider {...settings} className='position-relative'>
          <CardComment />
          <CardComment />
          <CardComment />
          <CardComment />
          <CardComment />
          <CardComment />
        </Slider>
      </div>
    );
  }
}
