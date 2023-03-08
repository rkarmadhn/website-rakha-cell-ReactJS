import React, { Component } from "react";
import Slider from "react-slick";
import MoreCard from "../../../Atoms/is_mobile_view/moreCards/MoreCard";
import TitleRowKategori from "../../../Atoms/titleRowKategori/titleRowKategori";

export default class RowKategoriSamsung extends Component {
  render() {
    const cardSettings = {
      arrows: false,
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: "32px",
    };
    return (
      <>
        <TitleRowKategori text="Harga Service Samsung" />
        <Slider {...cardSettings}>
          <MoreCard />
          <MoreCard />
          <MoreCard />
        </Slider>
      </>
    );
  }
}
