"use client";
import Breadcrumb from "@/components/common/Breadcrumb";
import Image from "next/image";

const projects = [
  { img: "/assets/img/gallery/project-ecommerce-platform.jpg", category: "cat-1", label: "E-commerce Platform" },
  { img: "/assets/img/gallery/project-saas-dashboard.jpg", category: "cat-2", label: "SaaS Dashboard" },
  { img: "/assets/img/gallery/project-mobile-application.jpg", category: "cat-3", label: "Mobile Application" },
  { img: "/assets/img/gallery/project-corporate-website.jpg", category: "cat-1", label: "Corporate Website" },
  { img: "/assets/img/gallery/project-erp-system.jpg", category: "cat-2", label: "ERP System" },
  { img: "/assets/img/gallery/project-cloud-infrastructure.jpg", category: "cat-3", label: "Cloud Infrastructure" },
  { img: "/assets/img/gallery/project-ecommerce-platform.jpg", category: "cat-1", label: "Healthcare Portal" },
  { img: "/assets/img/gallery/project-saas-dashboard.jpg", category: "cat-2", label: "FinTech Application" },
  { img: "/assets/img/gallery/project-mobile-application.jpg", category: "cat-3", label: "Real Estate Platform" },
  { img: "/assets/img/gallery/project-corporate-website.jpg", category: "cat-1", label: "Logistics Dashboard" },
  { img: "/assets/img/gallery/project-erp-system.jpg", category: "cat-2", label: "Booking System" },
  { img: "/assets/img/gallery/project-cloud-infrastructure.jpg", category: "cat-3", label: "Analytics Platform" },
];

export default function GalleryPage() {
  return (
    <main>
      <Breadcrumb title="Our Portfolio" items={[{ label: "Home", href: "/" }, { label: "Portfolio" }]} />
      <section className="space bg-smoke2 overflow-hidden">
        <div className="container">
          <div className="title-area text-center">
            <span className="sub-title text-anim subtitle-line" data-cue="slideInUp">
              <Image className="me-2" src="/assets/img/icon/subtitle-icon.svg" alt="icon" width={20} height={20} />
              Project Showcase
            </span>
            <h2 className="sec-title text-anim" data-cue="slideInUp">Our Work Speaks for Itself</h2>
            <p className="fs-18 text-anim2" data-cue="slideInUp">Explore our portfolio of successful projects across web, software, cloud, and automation</p>
          </div>
          <div className="filter-menu filter-menu-active text-center" data-cue="slideInUp">
            <button className="th-btn style-border3 active" data-filter="*">All Projects</button>
            <button className="th-btn style-border3" data-filter=".cat-1">Web &amp; E-commerce</button>
            <button className="th-btn style-border3" data-filter=".cat-2">Software &amp; SaaS</button>
            <button className="th-btn style-border3" data-filter=".cat-3">Cloud &amp; DevOps</button>
          </div>
          <div className="row gy-24 filter-active masonary-active">
            {projects.map((project, i) => (
              <div key={i} className={`col-xl-4 col-md-6 filter-item ${project.category}`} data-cue="slideInUp">
                <div className="gallery-card">
                  <div className="gallery-img">
                    <Image src={project.img} alt={project.label} width={400} height={300} />
                    <a href={project.img} className="icon-btn th-popup-image">
                      <i className="fa-regular fa-magnifying-glass"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
