import React, { Component } from "react";
import Slider from "react-slick";
import MoreCard from "../../../Atoms/is_mobile_view/moreCards/MoreCard";
import TitleRowKategori from "../../../Atoms/titleRowKategori/TitleRowKategori";

export default class RowKategoriIphone extends Component {
  render() {
    const cardSettings = {
      arrows: false,
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
    };
    return (
      <>
        <TitleRowKategori text="Harga Service Iphone" />
        <Slider {...cardSettings} className='slick_kategori'>
          <MoreCard />
          <MoreCard />
          <MoreCard />
        </Slider>
      </>
    );
  }
}
