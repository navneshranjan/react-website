import React, { useState } from "react";
import { Button } from "./Button";
import "../App.css";
import "./HeroSection.css";
import Video from "../assets/videos/video-1.mp4";
import { VideoPlayer } from "./VideoPlayer";
import { Link } from "react-router-dom";
// import Trailer from "../assets/videos/video-1.mp4";

function HeroSection() {
  const vdo = () => {
    return <VideoPlayer />;
  };

  return (
    <div className="hero-container">
      <video src={Video} autoPlay loop muted />
      <h1>ADVANTURE AWAIT</h1>
      <p>what are you waiting for ?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER
          <i className="far fa-play-circle" />
        </Button>
        <Button>
          <Link to="./vdo">play</Link>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
