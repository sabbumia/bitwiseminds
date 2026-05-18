"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import MaskedIcon from "@/components/common/MaskedIcon";

const slides = [
  { bg: "/assets/img/hero/hero_bg_1_1.jpg" },
  { bg: "/assets/img/hero/hero_bg_1_2.jpg" },
  { bg: "/assets/img/hero/hero_bg_1_3.jpg" },
];

const heroContent = [
  { line1: "Smart Technology,", line2: "Real Solutions" },
  { line1: "Custom Software", line2: "Built for You" },
  { line1: "Your Business,", line2: "Digitally Transformed" },
];

export default function HeroSection() {
  const swiperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    let swiperInstance: unknown = null;

    const initSwiper = () => {
      if (!(window as unknown as Record<string, unknown>).Swiper) return;
      const SwiperClass = (window as unknown as Record<string, unknown>).Swiper as new (
        el: HTMLElement,
        opts: unknown
      ) => { destroy: () => void };
      if (!swiperRef.current) return;
      swiperInstance = new SwiperClass(swiperRef.current, {
        effect: "fade",
        loop: true,
        speed: 1000,
        autoplay: { delay: 6000, disableOnInteraction: false },
        navigation: {
          prevEl: ".hero-slider-prev",
          nextEl: ".hero-slider-next",
        },
      });
      document.querySelectorAll<HTMLElement>("[data-bg-src]").forEach((el) => {
        const src = el.getAttribute("data-bg-src");
        if (src) el.style.backgroundImage = `url(${src})`;
      });
    };

    const timer = setTimeout(initSwiper, 500);
    return () => {
      clearTimeout(timer);
      if (swiperInstance && (swiperInstance as { destroy: () => void }).destroy) {
        (swiperInstance as { destroy: () => void }).destroy();
      }
    };
  }, []);

  return (
    <div className="th-hero-wrapper hero-1" id="hero">
      <div
        className="swiper th-slider hero-slider1"
        id="heroSlider1"
        ref={swiperRef}
        data-slider-options='{"effect":"fade","autoHeight":"true"}'
      >
        <div className="swiper-wrapper">
          {slides.map((slide, i) => (
            <div key={i} className="swiper-slide">
              <div
                className="th-hero-bg"
                data-bg-src={slide.bg}
                data-overlay="title"
                data-opacity="5"
                data-mask-src="/assets/img/hero/hero-bg1-mask.png"
                style={{ backgroundImage: `url(${slide.bg})` }}
              ></div>
              <div className="hero-inner">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="hero-style1">
                        <h1 className="hero-title text-white">
                          <span className="title1" data-ani="slideinup" data-ani-delay="0.3s">
                            {heroContent[i]?.line1 ?? "Smart Technology,"}
                          </span>
                          <span className="title2" data-ani="slideinup" data-ani-delay="0.4s">
                            <span className="text-theme">{heroContent[i]?.line2 ?? "Real Solutions"}</span>
                          </span>
                        </h1>
                        <p className="hero-text text-white" data-ani="slideinup" data-ani-delay="0.6s">
                          We build innovative software, deliver reliable IT support, and drive digital
                          transformation so your business can scale with confidence.
                        </p>
                        <div className="btn-wrap" data-ani="slideinup" data-ani-delay="0.7s">
                          <Link href="/contact" className="th-btn th-btn-lg">
                            Get Free Consultation
                          </Link>
                          <Link href="/service" className="th-btn th-btn-lg style-border">
                            Explore Our Services
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Prev / Next arrows — use MaskedIcon so the CSS mask reveals the bg-color */}
      <div className="icon-box">
        <button
          className="slider-arrow style-border default hero-slider-prev"
          data-slider-prev="#heroSlider1"
        >
          <MaskedIcon src="/assets/img/icon/arrow-left.svg" alt="Previous slide" width={23} height={20} />
        </button>
        <button
          className="slider-arrow style-border default hero-slider-next"
          data-slider-next="#heroSlider1"
        >
          <MaskedIcon src="/assets/img/icon/arrow-right.svg" alt="Next slide" width={23} height={20} />
        </button>
      </div>

      {/* Scroll-down circle tag */}
      <div className="circle-tag scroll-down">
        <span className="circle-title-anime">*** TRUSTED BY 200+ BUSINESSES WORLDWIDE</span>
        <a href="#about-sec" className="icon-btn style2">
          <MaskedIcon src="/assets/img/icon/arrow-down.svg" alt="Scroll down" width={24} height={24} />
        </a>
      </div>

      <div className="client-group-wrap">
        <div className="thumb">
          <Image src="/assets/img/normal/client-group-thumb1.png" alt="clients" width={120} height={40} />
        </div>
        <div className="box-content">
          <div className="star-rating"></div>
          <div className="box-text">4.9 rating based on 200+ client reviews</div>
        </div>
      </div>

      <div className="hero-counter-wrap">
        <div className="counter-card">
          <h2 className="box-number"><span className="counter-number">500</span>+</h2>
          <p className="box-text">Projects Completed</p>
        </div>
        <div className="counter-card">
          <h2 className="box-number"><span className="counter-number">50</span>+</h2>
          <p className="box-text">Expert Developers</p>
        </div>
        <div className="counter-card">
          <h2 className="box-number"><span className="counter-number">100</span>%</h2>
          <p className="box-text">Client Satisfaction</p>
        </div>
      </div>
    </div>
  );
}
