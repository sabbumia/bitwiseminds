"use client";
import { useState } from "react";
import Image from "next/image";

const faqs = [
  {
    id: 1,
    question: "What types of businesses does BitwiseMinds work with?",
    answer:
      "We work with businesses of all sizes — from startups and SMEs to large enterprises. Our services are tailored to your specific industry, budget, and growth stage. Whether you need a simple website or a complex enterprise system, we have the expertise to deliver.",
  },
  {
    id: 2,
    question: "How long does a typical software development project take?",
    answer:
      "Project timelines vary based on complexity and scope. A standard website typically takes 4–8 weeks, while custom software development can range from 3 to 12 months. After our discovery consultation, we provide a detailed project plan with clear milestones and delivery dates.",
  },
  {
    id: 3,
    question: "Do you provide ongoing support after project completion?",
    answer:
      "Absolutely. We offer comprehensive post-launch support and maintenance packages. Our IT support team is available 24/7 for critical issues, and we provide regular updates, security patches, performance monitoring, and feature enhancements to keep your systems running optimally.",
  },
  {
    id: 4,
    question: "Can you work with our existing systems and technologies?",
    answer:
      "Yes — we are technology-agnostic and experienced with a wide range of platforms, frameworks, and legacy systems. We specialise in seamless integrations, API development, and system migrations that minimise disruption to your existing operations.",
  },
  {
    id: 5,
    question: "How is the project managed and how will I stay informed?",
    answer:
      "Every project is assigned a dedicated Project Manager who acts as your single point of contact. We use agile methodology with regular sprint reviews, progress reports, and a shared project dashboard so you always have full visibility into timelines and deliverables.",
  },
];

export default function FaqSection() {
  const [openId, setOpenId] = useState<number>(1);

  return (
    <div className="space overflow-hidden">
      <div className="container">
        <div className="row gy-40 gx-60">
          <div className="col-xxl-7 col-xl-7">
            <div className="title-area">
              <span className="sub-title text-anim subtitle-line" data-cue="slideInUp">
                <Image className="me-2" src="/assets/img/icon/subtitle-icon.svg" alt="icon" width={20} height={20} />
                Quick Answers
              </span>
              <h2 className="sec-title text-anim2" data-cue="slideInLeft">Frequently Asked Questions</h2>
            </div>

            <div className="faq-wrap1 pe-xl-4">
              <div className="accordion" id="faqAccordion">
                {faqs.map((faq) => (
                  <div key={faq.id} className="accordion-card" data-cue="slideInUp">
                    <div className="accordion-header" id={`collapse-item-${faq.id}`}>
                      <button
                        className={"accordion-button" + (openId !== faq.id ? " collapsed" : "")}
                        type="button"
                        onClick={() => setOpenId(openId === faq.id ? 0 : faq.id)}
                        aria-expanded={openId === faq.id}
                      >
                        <span className="count">{faq.id}.</span> {faq.question}
                      </button>
                    </div>
                    <div
                      id={`collapse-${faq.id}`}
                      className={"accordion-collapse collapse" + (openId === faq.id ? " show" : "")}
                    >
                      <div className="accordion-body">
                        <p className="faq-text">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-xxl-5 col-xl-5 align-self-center" data-cue="slideInUp">
            <div className="faq-img-box1 global-img" data-cue="slideInUp">
              <Image
                src="/assets/img/faq/faq-support-specialist.jpg"
                alt="BitwiseMinds FAQ"
                width={520}
                height={580}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
