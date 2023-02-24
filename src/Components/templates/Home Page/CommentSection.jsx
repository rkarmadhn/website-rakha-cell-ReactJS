import React, { Component } from "react";
import Slider from "react-slick";
import CardComment from "../../UI/molecules/CardComment/CardComment";
import FormComment from "../../UI/organisms/FormComment/FormComment";
export default class CommentSection extends Component {
  render() {
    const settings = {
      arrows: false,
      autoplay: true,
      autoplaySpeed: 1000,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        { breakpoint: 1024, settings: { slidesToShow: 2, autoplaySpeed: 1500, } },
        { breakpoint: 768, settings: { slidesToShow: 1, autoplaySpeed: 2000, } },
      ],
    };
    return (
      <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 py-8">
        <Slider {...settings} className="lg:col-span-2">
          <CardComment />
          <CardComment />
          <CardComment />
          <CardComment />
        </Slider>
        <FormComment/>
      </div>
    );
  }
}
