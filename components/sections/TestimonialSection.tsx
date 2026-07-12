import Image from "next/image";

const testimonials = [
  {
    img: "/assets/img/testimonial/david-harrington.jpg",
    name: "David Harrington",
    role: "CEO, NexaRetail",
    text: '"BitwiseMinds completely transformed our e-commerce platform. The new system is faster, more reliable, and our conversion rate jumped by 40%. Their team was professional, proactive, and delivered everything on time. I highly recommend them to any business serious about digital growth."',
  },
  {
    img: "/assets/img/testimonial/sarah-mitchell.jpg",
    name: "Sarah Mitchell",
    role: "Operations Director, FinFlow",
    text: '"Working with BitwiseMinds on our custom ERP system was a game-changer. They took time to understand our complex workflows and built a solution that saves us 20+ hours per week. The ongoing IT support has been exceptional — always responsive and knowledgeable."',
  },
  {
    img: "/assets/img/testimonial/james-caldwell.jpg",
    name: "James Caldwell",
    role: "Founder, StartupLaunch",
    text: '"From our initial consultation to final delivery, BitwiseMinds exceeded every expectation. The mobile app they built for us has over 10,000 active users and consistently receives 5-star reviews. They genuinely care about your product\'s success."',
  },
  {
    img: "/assets/img/testimonial/emily-lawson.jpg",
    name: "Emily Lawson",
    role: "Marketing Manager, BrandSpark",
    text: '"Our new website from BitwiseMinds loads in under 2 seconds and looks stunning on every device. Their UI/UX team is incredibly talented — they designed an experience that our customers love. Lead generation has tripled since the launch."',
  },
];

export default function TestimonialSection() {
  return (
    <section className="testi-area-1 space overflow-hidden bg-white" id="testi-sec">
      <div className="service-bg-shape1-1 shape-mockup shake d-xxl-block d-none" style={{ top: "20%", left: "5%" }}>
        <Image src="/assets/img/shape/shape1-18.png" alt="" width={55} height={55} />
      </div>
      <div className="service-bg-shape1-2 shape-mockup shake d-xxl-block d-none" style={{ top: "20%", right: "5%" }}>
        <Image src="/assets/img/shape/shape1-19.png" alt="" width={55} height={55} />
      </div>
      <div className="service-bg-shape1-3 shape-mockup heartbeat d-xxl-block d-none" style={{ bottom: "27%", left: "5%" }}>
        <Image src="/assets/img/shape/shape1-20.png" alt="" width={50} height={50} />
      </div>
      <div className="service-bg-shape1-3 shape-mockup jump d-xxl-block d-none" style={{ top: "65%", right: "5%" }}>
        <Image src="/assets/img/shape/shape1-21.png" alt="" width={50} height={50} />
      </div>
      <div className="service-bg-shape1-3 shape-mockup moving d-xxl-block d-none" style={{ bottom: "0%", left: "5%" }}>
        <Image src="/assets/img/shape/shape1-22.png" alt="" width={60} height={60} />
      </div>

      <div className="container">
        <div className="title-area text-center">
          <span className="sub-title text-anim subtitle-line" data-cue="slideInUp">
            <Image className="me-2" src="/assets/img/icon/subtitle-icon.svg" alt="icon" width={20} height={20} />
            Testimonials
          </span>
          <h2 className="sec-title text-anim" data-cue="slideInUp">Trusted by Businesses Worldwide.</h2>
          <p className="fs-18 text-anim2" data-cue="slideInUp">
            Hear directly from the clients who rely on BitwiseMinds to power their digital success.
          </p>
        </div>

        <div className="row gy-50 flex-row-reverse">
          <div className="slider-area testi-slider1" data-cue="slideInUp">
            <div
              className="swiper th-slider has-shadow"
              id="testiSlide1"
              data-slider-options='{"autoHeight":"true","breakpoints":{"0":{"slidesPerView":1},"768":{"slidesPerView":"1"},"992":{"slidesPerView":"1"},"1200":{"slidesPerView":"2"},"1600":{"slidesPerView":"2"}}}'
            >
              <div className="swiper-wrapper">
                {testimonials.map((testi, i) => (
                  <div key={i} className="swiper-slide">
                    <div className="testi-card">
                      <div className="testi-1-quote">
                        <Image src="/assets/img/icon/quote_icon.svg" alt="quote" width={40} height={40} />
                      </div>
                      <div
                        className="testi-bg-mask"
                        data-mask-src="/assets/img/shape/testi_card_mask1_1.jpg"
                        style={{
                          maskImage: "url(/assets/img/shape/testi_card_mask1_1.jpg)",
                          WebkitMaskImage: "url(/assets/img/shape/testi_card_mask1_1.jpg)",
                        }}
                      ></div>
                      <div className="testi-card-profile">
                        <div className="testi-card-avater">
                          <Image src={testi.img} alt={testi.name} width={60} height={60} />
                        </div>
                        <div className="testi-card-profile-detaile">
                          <h3 className="box-title">{testi.name}</h3>
                          <p className="box-desig">{testi.role}</p>
                        </div>
                      </div>
                      <div className="testi-card_review">
                        {Array(5)
                          .fill(0)
                          .map((_, j) => (
                            <i key={j} className="fa-sharp fa-solid fa-star"></i>
                          ))}
                      </div>
                      <p className="box-text">{testi.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="slider-pagination-wrap mt-30">
                <button data-slider-prev="#testiSlide1" className="slider-arrow default">
                  <i className="far fa-arrow-left"></i>
                </button>
                <div className="slider-pagination"></div>
                <button data-slider-next="#testiSlide1" className="slider-arrow default">
                  <i className="far fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
