import React from "react";
import { useState, useEffect } from "react";

export default function Home() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    "Full Stack Developer",
    "Software Developer",
    "UI/UX Designer",
  ];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="home">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 rowStyle">
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>{`Hi I am Aniket Tamrakar`}</h1>
            <h2>
              <span>{text}</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              nemo nihil molestias, at quos repellat consectetur facilis quasi
              aliquid eum voluptas fugit explicabo dolorum facere impedit!
              Eligendi facilis porro voluptas.
            </p>
            <button className="btn">Let's Connect</button>
          </div>
          <div className="col-12 col-md-6">
            <img
              src="../img/pngwing.com.png"
              className="header-img"
              alt="header-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
