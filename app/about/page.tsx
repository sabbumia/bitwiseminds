import type { Metadata } from "next";
import Breadcrumb from "@/components/common/Breadcrumb";
import Image from "next/image";
import Link from "next/link";
import MaskedIcon from "@/components/common/MaskedIcon";

export const metadata: Metadata = {
  title: "About Us - BitwiseMinds IT Solutions",
};

const milestones = [
  { year: "2025", img: "/assets/img/normal/why-modern-workspace.jpg", text: "BitwiseMinds was founded by a team of passionate developers with a vision to make enterprise-grade technology accessible to every business." },
  { year: "2025", img: "/assets/img/normal/why-code-quality.jpg", text: "Expanded our team to 4+ developers and launched our dedicated cloud solutions practice, helping 50+ businesses migrate to modern infrastructure." },
  { year: "2026", img: "/assets/img/normal/why-agile-delivery.jpg", text: "Crossed 5+ projects delivered and established partnerships with AWS, Google Cloud, and Microsoft Azure as a certified solutions provider." },
  // { year: "2016", img: "/assets/img/normal/why-team-collaboration.jpg", text: "Opened our UI/UX design studio, bringing award-winning design thinking to every digital product we build for our growing client base." },
  // { year: "2018", img: "/assets/img/normal/why-agile-delivery.jpg", text: "Delivered our 200th project milestone and introduced our flagship IT support packages, providing 24/7 managed services to SMEs across 15 countries." },
  // { year: "2020", img: "/assets/img/normal/why-modern-workspace.jpg", text: "Launched our Business Automation practice, helping clients save thousands of hours annually through intelligent workflow automation and AI integration." },
  // { year: "2022", img: "/assets/img/normal/why-code-quality.jpg", text: "Surpassed 400 completed projects and received the Regional IT Excellence Award for innovation in custom software development." },
  // { year: "2023", img: "/assets/img/normal/why-team-collaboration.jpg", text: "Grew our team to 60+ specialists and expanded into e-commerce development, helping clients generate $50M+ in online revenue." },
  // { year: "2024", img: "/assets/img/normal/why-agile-delivery.jpg", text: "Crossed 500+ projects delivered and established partnerships with AWS, Google Cloud, and Microsoft Azure as a certified solutions provider." },
];

export default function AboutPage() {
  return (
    <main>
      <Breadcrumb
        title="About Us"
        items={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />

      {/* About */}
      <div className="overflow-hidden space overflow-hidden" id="about-sec">
        <div className="container">
          <div className="about-wrap1">
            <div className="row gy-40 gx-60 align-items-center flex-row-reverse">
              <div className="col-xxl-7 align-self-center">
                <div className="img-box1" data-cue="slideInUp" data-delay="300">
                  <div
                    className="img1"
                    style={{
                      maskImage: "url(/assets/img/normal/about-thumb-mask1-1.png)",
                      WebkitMaskImage: "url(/assets/img/normal/about-thumb-mask1-1.png)",
                    }}
                  >
                    <Image src="/assets/img/normal/about-office-collaboration.jpg" alt="BitwiseMinds office" width={600} height={540} />
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
                    1+ Years of Powering Digital Innovation
                  </h2>
                  <p className="fs-18 mt-4" data-cue="slideInUp">
                    Since 2025, BitwiseMinds has been at the forefront of technology — building products that solve real
                    business problems. We partner with startups and enterprises alike, delivering software that scales
                    and IT support that never sleeps.
                  </p>
                </div>
                <div className="about1-list-wrap" data-cue="slideInUp">
                  <div className="checklist list-two-column style2">
                    <ul>
                      <li>4+ Expert Developers</li>
                      <li>Agile Methodology</li>
                      <li>Cloud-Native Expertise</li>
                      <li>ISO-Aligned Processes</li>
                      <li>24/7 IT Support</li>
                      <li>On-Time Delivery</li>
                    </ul>
                  </div>
                </div>
                <div className="btn-wrap mt-50" data-cue="slideInUp">
                  <Link className="th-btn" href="/contact">Start a Project</Link>
                  <div className="info-card">
                    <div className="box-icon style2">
                      <Image src="/assets/img/icon/phone-black.svg" alt="phone" width={24} height={24} />
                    </div>
                    <div className="box-content">
                      <h4 className="box-title">Call us:</h4>
                      <p className="box-text"><a className="text-title" href="tel:01878009399">+880 1878009399</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="why-sec-2 overflow-hidden space-bottom overflow-hidden">
        <div className="container">
          <div className="row gy-40 gx-80 justify-content-center">
            <div className="col-xxl-12">
              <div className="title-area text-center">
                <span className="sub-title text-anim subtitle-line" data-cue="slideInUp">
                  <Image className="me-2" src="/assets/img/icon/subtitle-icon.svg" alt="icon" width={20} height={20} />
                  Our Journey
                </span>
                <h2 className="sec-title text-anim" data-cue="slideInUp">Our Growth Through the Years</h2>
              </div>
            </div>
          </div>
          <div className="slider-area why-slider1_2">
            <div
              className="swiper th-slider"
              id="whySlider1_2"
              data-slider-options='{"autoHeight":true,"autoplay":false,"breakpoints":{"0":{"slidesPerView":1},"767":{"slidesPerView":"2"},"1200":{"slidesPerView":"3"},"1400":{"slidesPerView":"4"}}}'
            >
              <div className="swiper-wrapper">
                {milestones.map((item, i) => (
                  <div key={i} className="swiper-slide" data-cue="slideInUp">
                    <div className="why-inner-card">
                      <div className="top">
                        <h4 className="box-title">{item.year}</h4>
                        <div className="icon">
                          <Image src="/assets/img/shape/why-shape-inner.png" alt="" width={40} height={40} />
                        </div>
                      </div>
                      <div className="box-img">
                        <Image src={item.img} alt={`BitwiseMinds ${item.year}`} width={300} height={200} />
                      </div>
                      <div className="box-content">
                        <p className="box-text">{item.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pagination-wrap">
                <button data-slider-prev="#whySlider1_2" className="slider-arrow default style-border2 slider-prev">
                  <MaskedIcon src="/assets/img/icon/arrow-left.svg" alt="prev" width={20} height={20} />
                </button>
                <div className="slider-pagination"></div>
                <button data-slider-next="#whySlider1_2" className="slider-arrow default style-border2 slider-next">
                  <MaskedIcon src="/assets/img/icon/arrow-right.svg" alt="next" width={20} height={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="counter-area-1 space bg-white">
        <div className="container">
          <div className="row gy-40 justify-content-center">
            {[
              { num: "6", suffix: "+", label: "Projects Delivered" },
              { num: "6", suffix: "+", label: "Happy Clients" },
              { num: "4", suffix: "+", label: "Expert Developers" },
              { num: "1", suffix: "+", label: "Years Experience" },
            ].map((counter, i) => (
              <div key={i} className="col-sm-6 col-xl-3">
                <div className="counter-card-grid" data-cue="slideInUp">
                  <h2 className="box-number">
                    <span className="counter-number">{counter.num}</span>{counter.suffix}
                  </h2>
                  <p className="box-text">{counter.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
