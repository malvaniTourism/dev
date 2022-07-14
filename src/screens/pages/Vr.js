import React, { Component } from 'react';
import { render } from 'react-dom';

import { Pannellum, PannellumVideo } from "pannellum-react";
import ad from '../../assets/img/others/1.png';

import myImage from "../../assets/img/alma.jpg";
// import myVideo from "./images/video.mp4";


const Vr = () => (
  <div>
    <h1>Pannellum React Component</h1>
    <Pannellum
        width="100%"
        height="500px"
        image={myImage}
        pitch={10}
        yaw={180}
        hfov={110}
        autoLoad
        onLoad={() => {
            console.log("panorama loaded");
        }}
    >
      <Pannellum.Hotspot
        type="info"
        pitch={11}
        yaw={-167}
        text="Info Hotspot Text 3"
        URL="https://github.com/farminf/pannellum-react"
      />

      <Pannellum.Hotspot
        type="info"
        pitch={31}
        yaw={-107}
        text="Info Hotspot Text 4"
        URL="https://github.com/farminf/pannellum-react"
      />
    </Pannellum>

   
    </div>
);

export default Vr;  