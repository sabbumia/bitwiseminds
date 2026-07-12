"use client";
import { useState } from "react";
import Breadcrumb from "@/components/common/Breadcrumb";
import MarqueeSection from "@/components/sections/MarqueeSection";
import Image from "next/image";
import Link from "next/link";
import MaskedIcon from "@/components/common/MaskedIcon";

const faqs = [
  { id: 1, q: "What technologies do you use for web development?" },
  { id: 2, q: "How long does a typical web project take to complete?" },
  { id: 3, q: "Do you provide post-launch support and maintenance?" },
  { id: 4, q: "Can you redesign our existing website without downtime?" },
  { id: 5, q: "Is the website built to be SEO-friendly and mobile responsive?" },
];
const faqAnswer = "Absolutely. Every project we deliver is built with industry best practices, responsive design, and performance in mind. Our team is happy to discuss the specifics of your requirements during your free consultation.";

const categories = [
  { label: "Web Development", count: 18 },
  { label: "Custom Software", count: 14 },
  { label: "Cloud Solutions", count: 11 },
  { label: "IT Support", count: 22 },
  { label: "UI/UX Design", count: 9 },
  { label: "Automation", count: 15 },
];

export default function ServiceDetailsPage() {
  const [openFaq, setOpenFaq] = useState(1);

  return (
    <main>
      <Breadcrumb title="Website Design & Development" items={[{ label: "Home", href: "/" }, { label: "Service Details" }]} />

      <section className="bg-smoke2 space-top space-extra-bottom">
        <div className="container">
          <div className="row gx-60">
            <div className="col-xl-8 col-lg-7">
              <div className="page-single">
                <div className="page-img gsap-parallax mb-25">
                  <Image src="/assets/img/service/service-detail-engineers.jpg" alt="Website Design & Development" width={800} height={480} />
                  <ul className="service-cat">
                    <li><Image src="/assets/img/icon/service-cat-icon.svg" alt="" width={20} height={20} /></li>
                    <li><a href="#">React,</a></li>
                    <li><a href="#">Next.js,</a></li>
                    <li><a href="#">Node.js,</a></li>
                    <li><a href="#">Cloud</a></li>
                  </ul>
                </div>
                <h3 className="mb-3">Service Overview</h3>
                <p className="mb-4">Our Website Design &amp; Development service delivers visually stunning, technically robust websites tailored to your brand. We build every solution with performance, accessibility, and conversion in mind.</p>
                <p className="mb-4">Whether you&apos;re launching a new business or refreshing an outdated digital presence, our team brings together world-class design thinking and engineering excellence to create websites that stand out.</p>
                <h4 className="mt-n2 mb-20">What&apos;s Included</h4>
                <div className="checklist list-two-column style2 sv-details mb-30">
                  <ul>
                    <li>Custom responsive UI/UX design</li>
                    <li>SEO-optimised code structure</li>
                    <li>CMS integration (WordPress, Contentful, etc.)</li>
                    <li>Performance optimisation &amp; Core Web Vitals</li>
                    <li>SSL security &amp; GDPR compliance</li>
                    <li>Analytics &amp; conversion tracking setup</li>
                  </ul>
                </div>
                <div className="page-img-wrap mt-40">
                  <div className="row">
                    <div className="col-md-6"><div className="page-img radius-20"><Image src="/assets/img/service/service-detail-planning.jpg" alt="Development process" width={380} height={260} /></div></div>
                    <div className="col-md-6"><div className="page-img radius-20"><Image src="/assets/img/service/service-detail-security.jpg" alt="Design system" width={380} height={260} /></div></div>
                  </div>
                </div>
                <p className="mt-4 mb-35">We follow an agile development process with regular checkpoints, keeping you informed and in control at every stage.</p>
                <h5 className="box-title mb-3">Our Development Approach</h5>
                <p className="mb-30">We use a component-driven architecture that makes your website easy to maintain and extend. Our team conducts thorough user testing, performance benchmarking, and cross-browser compatibility checks.</p>
                <div className="service-quote mb-30">
                  <div className="icon"><i className="fa-regular fa-quote-right"></i></div>
                  <p className="desc">&quot;A great website is not just a digital brochure — it&apos;s your most powerful sales tool, working 24/7 to attract, engage, and convert your ideal customers.&quot;</p>
                  <h4 className="box-title">Alex Morrison, CTO — BitwiseMinds</h4>
                </div>
                <h5 className="box-title mb-3">Frequently Asked Questions</h5>
                <div className="faq-wrap1 pe-xl-4">
                  <div className="accordion" id="faqAccordion">
                    {faqs.map((faq) => (
                      <div key={faq.id} className="accordion-card style-2" data-cue="slideInUp">
                        <div className="accordion-header">
                          <button className={"accordion-button" + (openFaq !== faq.id ? " collapsed" : "")} onClick={() => setOpenFaq(openFaq === faq.id ? 0 : faq.id)}>
                            <span className="count">{faq.id}.</span> {faq.q}
                          </button>
                        </div>
                        <div className={"accordion-collapse collapse" + (openFaq === faq.id ? " show" : "")}>
                          <div className="accordion-body"><p className="faq-text">{faqAnswer}</p></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="blog-navigation mt-5">
                  <div>
                    <a href="#" className="nav-btn prev">
                      <span className="thumb"><Image src="/assets/img/blog/nav-prev-post.jpg" alt="" width={80} height={60} /></span>
                      <span className="nav-text"><span className="icon-btn"><MaskedIcon src="/assets/img/icon/arrow-left.svg" alt="" width={18} height={18} /></span>Previous</span>
                    </a>
                  </div>
                  <a href="#" className="blog-btn"><i className="fa-solid fa-grid"></i></a>
                  <div>
                    <a href="#" className="nav-btn next">
                      <span className="thumb"><Image src="/assets/img/blog/nav-next-post.jpg" alt="" width={80} height={60} /></span>
                      <span className="nav-text"><span className="icon-btn"><MaskedIcon src="/assets/img/icon/arrow-right.svg" alt="" width={18} height={18} /></span>Next</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-5">
              <aside className="sidebar-area sidebar-sticky rounded-0 p-0 bg-transparent">
                <div className="widget widget_search">
                  <form className="search-form"><input type="text" placeholder="Search services..." /><button type="submit"><i className="far fa-search"></i></button></form>
                </div>
                <div className="widget widget_categories">
                  <h3 className="widget_title">Service Categories</h3>
                  <ul>
                    {categories.map((cat, i) => (
                      <li key={i}>
                        <Link href="/service"><Image className="icon" src="/assets/img/theme-img/btn-icon.svg" alt="" width={16} height={16} />{cat.label}</Link>
                        <span>({cat.count})</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="widget widget_tag_cloud">
                  <h3 className="widget_title">Technologies</h3>
                  <div className="tagcloud">
                    {["React", "Next.js", "Node.js", "AWS", "Python", "Docker", "TypeScript", "MongoDB"].map((tag) => (
                      <Link key={tag} href="/service">{tag}</Link>
                    ))}
                  </div>
                </div>
                <div className="widget widget_banner" style={{ backgroundImage: "url(/assets/img/widget/widget-it-support-cta.jpg)" }}>
                  <div className="widget-banner text-center">
                    <h3 className="title">Need Help? Let&apos;s Talk About Your Project</h3>
                    <div className="logo"><Image src="/assets/img/logo3.svg" alt="BitwiseMinds" width={120} height={40} /></div>
                    <h4 className="subtitle">Free Consultation Available</h4>
                    <h5 className="link"><a href="tel:01878009399">+880 1878009399</a></h5>
                    <Link href="/contact" className="th-btn">Book a Call</Link>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
        <MarqueeSection />
      </section>
    </main>
  );
}
