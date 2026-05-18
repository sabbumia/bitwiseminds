import type { Metadata } from "next";
import Breadcrumb from "@/components/common/Breadcrumb";
import Image from "next/image";
import Link from "next/link";
import MaskedIcon from "@/components/common/MaskedIcon";

export const metadata: Metadata = {
  title: "Our Services - BitwiseMinds IT Solutions",
};

const services = [
  { img: "/assets/img/service/service_card_1_1.jpg", title: "Website Design & Development", text: "Custom, high-performance websites built to convert visitors into clients, optimised for speed and SEO." },
  { img: "/assets/img/service/service_card_1_2.jpg", title: "Custom Software Development", text: "Bespoke software solutions engineered to your exact requirements — scalable, secure, and future-ready." },
  { img: "/assets/img/service/service_card_1_3.jpg", title: "Cloud Solutions", text: "End-to-end cloud strategy, migration, and management across AWS, Azure, and Google Cloud platforms." },
  { img: "/assets/img/service/service_card_1_4.jpg", title: "IT Support Services", text: "24/7 managed IT support keeping your infrastructure, systems, and teams running without interruption." },
  { img: "/assets/img/service/service_card_1_5.jpg", title: "UI/UX Design", text: "User-centred design that transforms complex workflows into intuitive, beautiful digital experiences." },
  { img: "/assets/img/service/service_card_1_6.jpg", title: "Business Automation", text: "Intelligent automation tools that eliminate repetitive tasks, reduce errors, and drive operational efficiency." },
  { img: "/assets/img/service/service_card_1_7.jpg", title: "E-commerce Development", text: "High-converting online stores with powerful product management, payment gateways, and analytics." },
  { img: "/assets/img/service/service_card_1_8.jpg", title: "Technical Consulting", text: "Strategic technology advisory to help you make confident decisions about your digital infrastructure." },
  { img: "/assets/img/service/service_card_1_1.jpg", title: "Website Maintenance", text: "Ongoing website care — updates, security patches, backups, and performance optimisation, handled for you." },
  { img: "/assets/img/service/service_card_1_2.jpg", title: "Software Maintenance", text: "Proactive monitoring, bug fixing, and iterative improvements to keep your software performing at its best." },
  { img: "/assets/img/service/service_card_1_3.jpg", title: "Hosting & Deployment", text: "Reliable, secure hosting with CI/CD pipelines, auto-scaling, and zero-downtime deployment strategies." },
  { img: "/assets/img/service/service_card_1_4.jpg", title: "Bug Fixing & Optimisation", text: "Rapid diagnosis and resolution of performance issues, memory leaks, and critical production bugs." },
];

export default function ServicePage() {
  return (
    <main>
      <Breadcrumb
        title="Our Services"
        items={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />
      <section className="space bg-smoke2 overflow-hidden">
        <div className="container">
          <div className="title-area text-center">
            <span className="sub-title subtitle-line text-anim" data-cue="slideInUp">
              <Image className="me-2" src="/assets/img/icon/subtitle-icon.svg" alt="icon" width={20} height={20} />
              What We Offer
            </span>
            <h2 className="sec-title text-anim2" data-cue="slideInUp">Complete IT &amp; Software Services</h2>
            <p className="fs-18 text-anim2" data-cue="slideInUp">
              Everything your business needs to build, grow, and maintain a powerful digital presence
            </p>
          </div>
          <div className="row gy-40">
            {services.map((svc, i) => (
              <div key={i} className="col-xl-3 col-lg-4 col-md-6" data-cue="slideInUp">
                <div className="service-card">
                  <Link className="icon-btn style3" href="/service-details">
                    <MaskedIcon src="/assets/img/icon/arrow-right.svg" alt="view" width={20} height={20} />
                  </Link>
                  <div
                    className="box-img"
                    style={{
                      maskImage: "url(/assets/img/shape/service_card_mask1_1.jpg)",
                      WebkitMaskImage: "url(/assets/img/shape/service_card_mask1_1.jpg)",
                    }}
                  >
                    <Image src={svc.img} alt={svc.title} width={320} height={280} />
                  </div>
                  <div className="box-content">
                    <h3 className="box-title"><Link href="/service-details">{svc.title}</Link></h3>
                    <p className="box-text">{svc.text}</p>
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
