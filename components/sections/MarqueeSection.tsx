import Image from "next/image";

const marqueeItems = [
  "Innovation",
  "Development",
  "Cloud Solutions",
  "IT Support",
  "Automation",
  "Excellence",
  "Innovation",
  "Development",
  "Cloud Solutions",
  "IT Support",
  "Automation",
  "Excellence",
];

export default function MarqueeSection() {
  return (
    <div className="overflow-hidden space-bottom">
      <div className="container-fluid p-0" data-cue="slideInUp">
        <div
          className="swiper th-slider marquee-slider1"
          data-slider-options='{"breakpoints":{"0":{"slidesPerView":"auto"}},"autoplay":{"delay":0,"disableOnInteraction":false},"noSwiping":"true","speed":10000,"spaceBetween":0}'
        >
          <div className="swiper-wrapper">
            {marqueeItems.map((item, i) => (
              <div key={i} className="swiper-slide">
                <div className="marquee-card">
                  <div className="marquee-icon">
                    <Image src="/assets/img/icon/marquee-icon1-1.svg" alt="" width={30} height={30} />
                  </div>
                  <a target="_blank" href="#" rel="noreferrer">
                    {item}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
