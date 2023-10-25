import { useState } from "react";

function ImgSlider() {
  const img = [
    <img src="/src/Component/176h0h.jpg" alt="" srcset="" />,
    <img src="/src/Component/1ur9b0.jpg" alt="" srcset="" />,
    <img src="/src/Component/24zoa8.jpg" alt="" srcset="" />,
    <img src="/src/Component/2eeunw.jpg" alt="" srcset="" />,
    <img src="/src/Component/2oo7h0.jpg" alt="" srcset="" />,
    <img src="/src/Component/30b1gx.jpg" alt="" srcset="" />,
    <img src="/src/Component/3umnr3.jpg" alt="" srcset="" />,
    <img src="/src/Component/3vfrmx.jpg" alt="" srcset="" />,
    <img src="/src/Component/4fhsie.png" alt="" srcset="" />,
    <img src="/src/Component/5youx3.jpg" alt="" srcset="" />,
    "https://i.imgflip.com/5youx3.jpg"
    
  ];

  const [slider, setSlider] = useState(0);
  return (
    <>
    <h1>Get Your Memes Here</h1>
    <div className="dis">
        <p onClick={() => setSlider((prev) => prev - 1)} className="triangle-left"></p>
      <p> {img[slider]} </p> <br />      
      <p onClick={() => setSlider((next) => next +1)} className="triangle-right"></p>
    </div>
    </>
  );
}
export default ImgSlider;

  