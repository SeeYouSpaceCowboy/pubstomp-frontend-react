import React, { Component } from 'react'
import Slider from 'react-slick'

export default class MultipleItems extends Component {
  render() {
    const settings = {
      autoplay: true,
      autoplaySpeed: 5000,
      infinite: true,
      speed: 1500,
      slidesToShow: 4,
      slidesToScroll: 4
    };
    return (
      <div>
        <Slider className="slick-slider" {...settings}>
          <div><h3><img className="slick-image" src="https://static-cdn.jtvnw.net/ttv-boxart/League%20of%20Legends-136x190.jpg" alt="lol" /></h3></div>
          <div><h3><img className="slick-image" src="https://static-cdn.jtvnw.net/ttv-boxart/Counter-Strike:%20Global%20Offensive-136x190.jpg" alt="cs go" /></h3></div>
          <div><h3><img className="slick-image" src="https://static-cdn.jtvnw.net/ttv-boxart/Hearthstone-136x190.jpg" alt="hearthstone" /></h3></div>
          <div><h3><img className="slick-image" src="https://static-cdn.jtvnw.net/ttv-boxart/Overwatch-136x190.jpg" alt="overwatch" /></h3></div>
          <div><h3><img className="slick-image" src="https://static-cdn.jtvnw.net/ttv-boxart/Grand%20Theft%20Auto%20V-136x190.jpg" alt="gta5" /></h3></div>
          <div><h3><img className="slick-image" src="https://static-cdn.jtvnw.net/ttv-boxart/Dota%202-136x190.jpg" alt="dota2" /></h3></div>
          <div><h3><img className="slick-image" src="https://static-cdn.jtvnw.net/ttv-boxart/World%20of%20Warcraft-136x190.jpg" alt="wow" /></h3></div>
          <div><h3><img className="slick-image" src="https://static-cdn.jtvnw.net/ttv-boxart/Minecraft-136x190.jpg" alt="minecraft" /></h3></div>
        </Slider>
      </div>
    );
  }
}
