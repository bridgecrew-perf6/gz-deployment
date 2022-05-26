import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>
        Our company assures of trust, quality, branded products. We aim to
        maintain our consumer services at our first priority and delivering the
        consumer satisfaction. Our founders discovered that the dopest people of
        our land were in search of affordable, durable and ultra fashionable
        electronics products to groove to. This is our only online retail store.
      </p>

      <p>
        <b> Connect with us: </b>
        <br />
        <span> Toll-free: 4242424242 </span>
        <span> </span>
        <span>Mail: gadgetzone@gmail.com</span>
      </p>

      <p>
        {" "}
        <b>©2016-2022 GADGET ZONE (GZ) All rights reserverd </b>
      </p>

      <p className="icons">
        <AiFillInstagram href="https://www.instagram.com/" target="blank_" />
        <AiOutlineTwitter />
      </p>
    </div>
  );
};

export default Footer;
