import ImageDragon from "./dragon.png";
import gsap from "gsap";
import { useRef, useEffect } from "react";

export function Dragon() {
  const boxRef = useRef();

  useEffect(() => {
    gsap.to(boxRef.current, {
      duration: 5,
      ease: "elastic.inOut(1.75,1.75)",
      x: 250,
      y: 200,
      repeat: -1,
      yoyo: true,
    });
  });

  return (
    <div className="img-dragon">
      <img ref={boxRef} src={ImageDragon} alt="true" />
    </div>
  );
}
