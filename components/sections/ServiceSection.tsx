import Link from "next/link";
import Image from "next/image";
import MaskedIcon from "@/components/common/MaskedIcon";

const services = [
  {
    img: "/assets/img/service/service_card_1_1.jpg",
    title: "Website Design & Development",
    text: "We craft visually stunning, high-performance websites tailored to your brand and business goals.",
  },
  {
    img: "/assets/img/service/service_card_1_2.jpg",
    title: "Custom Software Development",
    text: "End-to-end bespoke software solutions built to solve your unique operational challenges.",
  },
  {
    img: "/assets/img/service/service_card_1_3.jpg",
    title: "Cloud Solutions",
    text: "Scalable, secure cloud infrastructure and migration services to future-proof your business.",
  },
  {
    img: "/assets/img/service/service_card_1_4.jpg",
    title: "IT Support Services",
    text: "Reliable 24/7 IT support keeping your systems running smoothly and your team productive.",
  },
  {
    img: "/assets/img/service/service_card_1_5.jpg",
    title: "UI/UX Design",
    text: "User-centred design that delivers intuitive, beautiful digital experiences your clients love.",
  },
  {
    img: "/assets/img/service/service_card_1_6.jpg",
    title: "Business Automation",
    text: "Streamline workflows, reduce manual effort, and boost efficiency with smart automation tools.",
  },
  {
    img: "/assets/img/service/service_card_1_7.jpg",
    title: "E-commerce Development",
    text: "Powerful, conversion-optimised online stores built on modern, scalable platforms.",
  },
  {
    img: "/assets/img/service/service_card_1_8.jpg",
    title: "Technical Consulting",
    text: "Expert strategic guidance to help you make confident, informed technology decisions.",
  },
];

export default function ServiceSection() {
  return (
    <section className="space bg-white overflow-hidden" id="service-sec">
      <div className="service-bg-shape1-1 shape-mockup shake d-xxl-block d-none" style={{ top: "20%", right: "5%" }}>
        <Image src="/assets/img/shape/shape1-7.png" alt="" width={55} height={55} />
      </div>
      <div className="service-bg-shape1-2 shape-mockup shake d-xxl-block d-none" style={{ top: "20%", left: "5%" }}>
        <Image src="/assets/img/shape/shape1-8.png" alt="" width={55} height={55} />
      </div>
      <div className="service-bg-shape1-3 shape-mockup heartbeat d-xxl-block d-none" style={{ top: "50%", left: "5%" }}>
        <Image src="/assets/img/shape/shape1-9.png" alt="" width={45} height={45} />
      </div>
      <div className="service-bg-shape1-4 shape-mockup shake d-xxl-block d-none" style={{ bottom: "10%", left: "5%" }}>
        <Image src="/assets/img/shape/shape1-10.png" alt="" width={45} height={45} />
      </div>

      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-xxl-5 col-xl-7 col-md-8">
            <div className="title-area">
              <span className="sub-title subtitle-line text-anim" data-cue="slideInUp">
                <Image className="me-2" src="/assets/img/icon/subtitle-icon.svg" alt="icon" width={20} height={20} />
                Our Services
              </span>
              <h2 className="sec-title text-anim2" data-cue="slideInUp">
                Our Complete IT & Software Services
              </h2>
            </div>
          </div>
          <div className="col-auto">
            <div className="sec-btn">
              <Link className="th-btn style-border3" href="/service">View All Services</Link>
            </div>
          </div>
        </div>

        <div className="slider-area service-slider1">
          <div
            className="swiper th-slider"
            id="serviceSlider1"
            data-slider-options='{"autoHeight":true,"breakpoints":{"0":{"slidesPerView":1},"767":{"slidesPerView":"2"},"1200":{"slidesPerView":"3"},"1400":{"slidesPerView":"4"}}}'
          >
            <div className="swiper-wrapper">
              {services.map((svc, i) => (
                <div key={i} className="swiper-slide" data-cue="slideInUp">
                  <div className="service-card">
                    <Link className="icon-btn style3" href="/service-details">
                      <MaskedIcon src="/assets/img/icon/arrow-right.svg" alt="view" width={20} height={20} />
                    </Link>
                    <div
                      className="box-img"
                      data-mask-src="/assets/img/shape/service_card_mask1_1.jpg"
                      style={{
                        maskImage: "url(/assets/img/shape/service_card_mask1_1.jpg)",
                        WebkitMaskImage: "url(/assets/img/shape/service_card_mask1_1.jpg)",
                      }}
                    >
                      <Image src={svc.img} alt={svc.title} width={320} height={280} />
                    </div>
                    <div className="box-content">
                      <h3 className="box-title">
                        <Link href="/service-details">{svc.title}</Link>
                      </h3>
                      <p className="box-text">{svc.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="pagination-wrap">
              <button data-slider-prev="#serviceSlider1" className="slider-arrow default style-border2 slider-prev">
                <MaskedIcon src="/assets/img/icon/arrow-left.svg" alt="prev" width={20} height={20} />
              </button>
              <div className="slider-pagination"></div>
              <button data-slider-next="#serviceSlider1" className="slider-arrow default style-border2 slider-next">
                <MaskedIcon src="/assets/img/icon/arrow-right.svg" alt="next" width={20} height={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
