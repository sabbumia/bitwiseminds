"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="preloader">
      <button className="th-btn preloaderCls" onClick={() => setVisible(false)}>
        Cancel Preloader
      </button>
      <div className="preloader-inner">
        <div className="bounce">
          <Image src="/assets/img/logo-icon.svg" alt="BitwiseMinds" width={60} height={60} />
        </div>
        <span className="loader">
          BitwiseMinds
          <span className="loading-text">BitwiseMinds</span>
        </span>
      </div>
    </div>
  );
}
