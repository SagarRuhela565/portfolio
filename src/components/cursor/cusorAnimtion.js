import React, { useState, useEffect } from "react";

const Cursor = () => {
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const parent = document.querySelector(".cursor-in");

    const move = (e) => {
      setCursorX(e.pageX);
      setCursorY(e.pageY);
    };

    const enter = () => setVisible(true);
    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);

    if (parent) {
      parent.addEventListener("mouseenter", enter);
      parent.addEventListener("mouseleave", leave);
    }

    return () => {
      window.removeEventListener("mousemove", move);
      if (parent) {
        parent.removeEventListener("mouseenter", enter);
        parent.removeEventListener("mouseleave", leave);
      }
    };
  }, []);

  return (
    <>
      <div
        className="cursor-horving"
        style={{
          left: `calc(${cursorX}px - var(--size)/2)`,
          top: `calc(${cursorY}px - var(--size)/2)`,
          display: visible ? "block" : "none",   // hide when outside parent
          pointerEvents: "none",
          // position: "absolute",
        }}
      ></div>
    </>
  );
};

export default Cursor;
