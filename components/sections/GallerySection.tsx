import Image from "next/image";

const portfolioItems = [
  { img: "/assets/img/gallery/project-ecommerce-platform.jpg", label: "E-commerce Platform" },
  { img: "/assets/img/gallery/project-saas-dashboard.jpg", label: "SaaS Dashboard" },
  { img: "/assets/img/gallery/project-mobile-application.jpg", label: "Mobile App" },
  { img: "/assets/img/gallery/project-corporate-website.jpg", label: "Corporate Website" },
  { img: "/assets/img/gallery/project-erp-system.jpg", label: "ERP System" },
  { img: "/assets/img/gallery/project-cloud-infrastructure.jpg", label: "Cloud Infrastructure" },
];

export default function GallerySection() {
  return (
    <div className="overflow-hidden overflow-hidden space z-index-common">
      <div className="shape-mockup gallery-bg-shape1-1 d-xxl-block d-none jump" style={{ left: "4%", top: "20%" }}>
        <Image src="/assets/img/shape/shape1-16.png" alt="" width={60} height={60} />
      </div>
      <div className="shape-mockup gallery-bg-shape1-1 d-xxl-block d-none shake" style={{ right: "4%", top: "20%" }}>
        <Image src="/assets/img/shape/shape1-17.png" alt="" width={60} height={60} />
      </div>

      <div className="container-fluid p-0">
        <div className="title-area text-center">
          <span className="sub-title text-anim subtitle-line" data-cue="slideInUp">
            <Image className="me-2" src="/assets/img/icon/subtitle-icon.svg" alt="icon" width={20} height={20} />
            Our Portfolio
          </span>
          <h2 className="sec-title text-anim" data-cue="slideInUp">Our Recent Project Successes</h2>
          <p className="fs-18 text-anim2" data-cue="slideInUp">
            Real solutions delivered for real businesses across diverse industries
          </p>
        </div>

        <div className="gallery-1-wrap">
          {/* Large card */}
          <div className="gallery-card">
            <div className="gallery-img">
              <Image src={portfolioItems[0].img} alt={portfolioItems[0].label} width={400} height={500} />
              <a href={portfolioItems[0].img} className="icon-btn th-popup-image">
                <i className="fa-regular fa-magnifying-glass"></i>
              </a>
            </div>
          </div>

          {/* Stacked pair */}
          <div className="gallery-card-wrap">
            <div className="gallery-card">
              <div className="gallery-img">
                <Image src={portfolioItems[1].img} alt={portfolioItems[1].label} width={400} height={240} />
                <a href={portfolioItems[1].img} className="icon-btn th-popup-image">
                  <i className="fa-regular fa-magnifying-glass"></i>
                </a>
              </div>
            </div>
            <div className="gallery-card">
              <div className="gallery-img">
                <Image src={portfolioItems[2].img} alt={portfolioItems[2].label} width={400} height={240} />
                <a href={portfolioItems[2].img} className="icon-btn th-popup-image">
                  <i className="fa-regular fa-magnifying-glass"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Large card */}
          <div className="gallery-card">
            <div className="gallery-img">
              <Image src={portfolioItems[3].img} alt={portfolioItems[3].label} width={400} height={500} />
              <a href={portfolioItems[3].img} className="icon-btn th-popup-image">
                <i className="fa-regular fa-magnifying-glass"></i>
              </a>
            </div>
          </div>

          {/* Stacked pair */}
          <div className="gallery-card-wrap">
            <div className="gallery-card">
              <div className="gallery-img">
                <Image src={portfolioItems[4].img} alt={portfolioItems[4].label} width={400} height={240} />
                <a href={portfolioItems[4].img} className="icon-btn th-popup-image">
                  <i className="fa-regular fa-magnifying-glass"></i>
                </a>
              </div>
            </div>
            <div className="gallery-card">
              <div className="gallery-img">
                <Image src={portfolioItems[5].img} alt={portfolioItems[5].label} width={400} height={240} />
                <a href={portfolioItems[5].img} className="icon-btn th-popup-image">
                  <i className="fa-regular fa-magnifying-glass"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
