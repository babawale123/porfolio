import { useState } from "react";
import "./work.scss";

export default function Work() {
  const [currentSlider, setCurrentSlider] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Amazon cloned React js",
      desc: "Amazon Clone",
      img: "assets/home.png",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Disney cloned React js",
      desc: "Disney cloned app",
      img: "assets/disney-clone.png",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Tesla cloned react js",
      desc: "Tesla cloned app",
      img: "assets/testla-clone-app.png",
    },

    {
      id: "4",
      icon: "./assets/writing.png",
      title: "Porfolio Design react js",
      desc: "Porfolio Design",
      img: "assets/portfolio.png",
    },
  ];

  const handleClick = (way) => {
    way == "left"
      ? setCurrentSlider(currentSlider > 0 ? currentSlider - 1 : 2)
      : setCurrentSlider(
          currentSlider < data.length - 1 ? currentSlider + 1 : 0
        );
  };

  return (
    <div className="work" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlider * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
