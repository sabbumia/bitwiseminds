"use client";
import { useState } from "react";

const colors = ["#FF4F38", "#3282FB", "#6D30FB", "#27AE60", "#FF7E02"];

export default function ColorScheme() {
  const [active, setActive] = useState(true);

  const changeColor = (color: string) => {
    document.documentElement.style.setProperty("--theme-color", color);
  };

  return (
    <div className={"color-scheme-wrap" + (active ? " active" : "")}>
      <button className="switchIcon" onClick={() => setActive(!active)}>
        <i className="fa-solid fa-palette"></i>
      </button>
      <h3 className="color-scheme-wrap-title text-center">Color Switcher</h3>
      <div className="color-switch-btns">
        {colors.map((color) => (
          <button
            key={color}
            data-color={color}
            style={{ "--theme-color": color } as React.CSSProperties}
            onClick={() => changeColor(color)}
          >
            <i className="fa-solid fa-droplet"></i>
          </button>
        ))}
      </div>
    </div>
  );
}
