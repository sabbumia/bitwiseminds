import Link from "next/link";
import Image from "next/image";

export default function AboutSection() {
  return (
    <div className="overflow-hidden space overflow-hidden" id="about-sec">
      <div className="about-bg-shape1-1 shape-mockup moving" style={{ bottom: 0, left: 0 }}>
        <Image src="/assets/img/shape/shape1-1.png" alt="" width={180} height={180} />
      </div>
      <div className="about-bg-shape1-2 shape-mockup shake d-xxl-block d-none" style={{ top: 0, left: "5%" }}>
        <Image src="/assets/img/shape/shape1-2.png" alt="" width={60} height={60} />
      </div>
      <div className="about-bg-shape1-3 shape-mockup spin d-xxl-block d-none" style={{ top: "25%", left: "6%" }}>
        <Image src="/assets/img/shape/shape1-3.png" alt="" width={50} height={50} />
      </div>
      <div className="about-bg-shape1-4 shape-mockup shake d-xl-block d-none" style={{ top: "35%", right: "5%" }}>
        <Image src="/assets/img/shape/shape1-4.png" alt="" width={60} height={60} />
      </div>
      <div className="about-bg-shape1-5 shape-mockup shake d-xl-block d-none" style={{ top: "50%", right: "7%" }}>
        <Image src="/assets/img/shape/shape1-5.png" alt="" width={55} height={55} />
      </div>
      <div
        className="about-bg-shape1-6 shape-mockup heartbeat d-xxl-block d-none"
        style={{ bottom: "25%", right: "6%" }}
      >
        <Image src="/assets/img/shape/shape1-6.png" alt="" width={55} height={55} />
      </div>

      <div className="container">
        <div className="about-wrap1">
          <div className="row gy-40 gx-60 align-items-center flex-row-reverse">
            <div className="col-xxl-7 align-self-center">
              <div className="img-box1" data-cue="slideInUp" data-delay="300">
                <div
                  className="img1"
                  data-mask-src="/assets/img/normal/about-thumb-mask1-1.png"
                  style={{
                    maskImage: "url(/assets/img/normal/about-thumb-mask1-1.png)",
                    WebkitMaskImage: "url(/assets/img/normal/about-thumb-mask1-1.png)",
                  }}
                >
                  <Image src="/assets/img/normal/about-office-collaboration.jpg" alt="BitwiseMinds team at work" width={600} height={540} />
                </div>
                <div className="year-counter-wrap">
                  <h4 className="box-title text-white">
                    <span className="counter-number">6</span>+
                  </h4>
                  <p className="box-text text-white">Projects Delivered</p>
                </div>
              </div>
            </div>

            <div className="col-xxl-5">
              <div className="title-area mb-40">
                <span className="sub-title subtitle-line text-anim" data-cue="slideInUp">
                  <Image className="me-2" src="/assets/img/icon/subtitle-icon.svg" alt="icon" width={20} height={20} />
                  Our Story
                </span>
                <h2 className="sec-title text-anim2" data-cue="slideInLeft" data-delay="300">
                  We are fully committed to your digital success
                </h2>
                <p className="fs-18 mt-4" data-cue="slideInUp">
                  Since 2025, BitwiseMinds has been building innovative software and delivering reliable IT
                  solutions. To us, your business isn&apos;t just a client — it&apos;s a long-term partnership we invest
                  in every day.
                </p>
              </div>
              <div className="about1-list-wrap" data-cue="slideInUp">
                <div className="checklist list-two-column style2">
                  <ul>
                    <li>Skilled Developers</li>
                    <li>Full-Stack Expertise</li>
                    <li>Cloud Integration</li>
                    <li>Agile Delivery</li>
                    <li>24/7 IT Support</li>
                    <li>Scalable Solutions</li>
                  </ul>
                </div>
              </div>
              <div className="btn-wrap mt-50" data-cue="slideInUp">
                <Link className="th-btn" href="/about">Learn More</Link>
                <div className="info-card">
                  <div className="box-icon style2">
                    <Image src="/assets/img/icon/phone-black.svg" alt="phone" width={24} height={24} />
                  </div>
                  <div className="box-content">
                    <h4 className="box-title">Call us:</h4>
                    <p className="box-text">
                      <a className="text-title" href="tel:01878009399">+880 1878009399</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
