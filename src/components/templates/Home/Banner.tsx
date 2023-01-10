import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const images = [
  "https://images.unsplash.com/photo-1671726805228-dc54c08408ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  "https://images.unsplash.com/photo-1673337615896-a849cef919e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1673212411859-651329b9e43d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1673291216480-8875ec52f1da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1661956600654-edac218fea67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1673207559693-705d2a40d4cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
];

function Banner() {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: true,
    drag: true,
    dragStarted: () => {
      resetTimeInterval();
    },
    dragEnded: () => {
      startInterval();
    },
  });

  const resetTimeInterval = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };
  const startInterval = () => {
    timeoutRef.current = setTimeout(() => {
      instanceRef.current?.next();
    }, 3000);
  };

  useEffect(() => {
    startInterval();
  }, []);
  return (
    <>
      <div ref={sliderRef} className="keen-slider">
        {images.map((img, index) => {
          return (
            <div
              key={index}
              className={`custom_slider keen-slider__slide number-slide${
                index + 1
              }`}
            >
              <Image src={img} alt="img" fill />
            </div>
          );
        })}
      </div>
    </>
  );
}

export { Banner };
