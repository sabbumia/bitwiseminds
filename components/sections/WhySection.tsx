import Link from "next/link";
import Image from "next/image";

const whyCards = [
  { num: "01", title: "Expert Development Team" },
  { num: "02", title: "Clean, Scalable & Secure Code" },
  { num: "03", title: "Tailored Solutions for Every Business" },
  { num: "04", title: "Fast, Agile & On-Time Delivery" },
  { num: "05", title: "Innovation is Our Core Strength" },
];

export default function WhySection() {
  return (
    <div className="why-sec-1 overflow-hidden space overflow-hidden">
      <div className="why-bg-shape1-1 shape-mockup jump d-xxl-block d-none" style={{ top: "10%", left: "10%" }}>
        <Image src="/assets/img/shape/why-bg-shape1-1.png" alt="" width={70} height={70} />
      </div>
      <div className="why-bg-shape1-2 shape-mockup heartbeat d-xxl-block d-none" style={{ top: "8%", left: "14%" }}>
        <Image src="/assets/img/shape/shape1-13.png" alt="" width={50} height={50} />
      </div>
      <div className="why-bg-shape1-3 shape-mockup shake d-xxl-block d-none" style={{ top: "30%", left: "8%" }}>
        <Image src="/assets/img/shape/shape1-11.png" alt="" width={55} height={55} />
      </div>
      <div className="why-bg-shape1-4 shape-mockup shake d-xxl-block d-none" style={{ top: "7%", right: "8%" }}>
        <Image src="/assets/img/shape/shape1-14.png" alt="" width={55} height={55} />
      </div>
      <div className="why-bg-shape1-5 shape-mockup shake d-xxl-block d-none" style={{ top: "18%", right: "12%" }}>
        <Image src="/assets/img/shape/shape1-12.png" alt="" width={45} height={45} />
      </div>
      <div className="why-bg-shape1-6 shape-mockup shake d-xxl-block d-none" style={{ top: "32%", right: "7%" }}>
        <Image src="/assets/img/shape/shape1-15.png" alt="" width={55} height={55} />
      </div>

      <div className="container">
        <div className="row gy-40 gx-80 justify-content-center">
          <div className="col-xxl-12">
            <div className="title-area text-center">
              <span className="sub-title text-anim subtitle-line" data-cue="slideInUp">
                <Image className="me-2" src="/assets/img/icon/subtitle-icon.svg" alt="icon" width={20} height={20} />
                Our Advantages
              </span>
              <h2 className="sec-title text-anim" data-cue="slideInUp">Why Choose BitwiseMinds?</h2>
              <p className="fs-18 text-anim2" data-cue="slideInUp">
                Trusted by startups to enterprises — we deliver technology that works
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xxl-12">
            <div className="why-wrap1">
              <div className="why-card-wrap">
                {whyCards.map((card, i) => (
                  <div key={i} className="why-card" data-cue="slideInUp">
                    <div className="box-number">{card.num}</div>
                    <div className="box-details">
                      <h4 className="box-title">{card.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
              <div className="btn-wrap justify-content-center">
                <Link className="th-btn" href="/contact">Start a Project</Link>
              </div>
              <div className="why-img-box1" data-cue="slideInUp">
                <Image src="/assets/img/normal/why-thumb1-1.png" alt="Why BitwiseMinds" width={700} height={500} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="video-area-1 overflow-hidden space-top">
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-lg-12">
              <div className="video-wrap1">
                <div className="video-thumb1-1" data-cue="slideInUp" data-overlay="title" data-opacity="4">
                  <Image
                    src="/assets/img/normal/video-thumb1-1.jpg"
                    alt="BitwiseMinds in action"
                    width={1920}
                    height={600}
                    style={{ width: "100%", height: "auto" }}
                  />
                  <a
                    href="https://www.youtube.com/watch?v=ehNKdTRS5N8"
                    className="video-btn th-popup-video"
                  >
                    <span className="play-btn style2">
                      <i className="fa-sharp fa-solid fa-play"></i>
                    </span>
                    <span className="video-text">Watch Our Story</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
