import React, { Component } from "react";
import Slider from "react-slick";
import CardComment from "../../UI/molecules/CardComment/CardComment";
import FormComment from "../../UI/organisms/FormComment/FormComment";
import './CommentSection.scss'
export default class CommentSection extends Component {
  render() {
    const settings = {
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2500,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [{ breakpoint: 1024, settings: { slidesToShow: 1, autoplaySpeed: 2500 } }],
    };
    return (
      <div className=" sm:grid sm:grid-cols-2 lg:grid-cols-3 py-8">
        <Slider {...settings} className="slider-comment lg:col-span-2">
          <CardComment />
          <CardComment />
          <CardComment />
          <CardComment />
          <CardComment />
          <CardComment />
        </Slider>
        <FormComment />
      </div>
    );
  }
}
