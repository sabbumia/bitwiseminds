"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MaskedIcon from "@/components/common/MaskedIcon";

const teamMembers = [
  {
    id: "team_1",
    name: "Alex Morrison",
    role: "Chief Technology Officer",
    thumb: "/assets/img/team/team-1-1.png",
    bigImg: "/assets/img/team/team-big-1-1.png",
    bio: "Alex leads BitwiseMinds with 15+ years of enterprise software architecture experience. He drives our technical vision, ensuring every solution we build is scalable, secure, and future-proof. His passion for innovation keeps our team at the cutting edge of modern technology.",
  },
  {
    id: "team_2",
    name: "Rachel Thompson",
    role: "Lead Full-Stack Developer",
    thumb: "/assets/img/team/team-1-2.png",
    bigImg: "/assets/img/team/team-big-1-2.png",
    bio: "Rachel is a full-stack powerhouse with deep expertise in React, Node.js, and cloud-native architectures. She has spearheaded over 80 successful product launches and mentors our growing team of developers to deliver excellence on every project.",
  },
  {
    id: "team_3",
    name: "Marcus Okafor",
    role: "Senior UI/UX Designer",
    thumb: "/assets/img/team/team-1-3.png",
    bigImg: "/assets/img/team/team-big-1-3.png",
    bio: "Marcus brings a designer's eye and a developer's mind to every project. His user-centred design philosophy has earned multiple industry awards, and his interfaces consistently achieve above-average engagement and conversion metrics for our clients.",
  },
  {
    id: "team_4",
    name: "Laura Chen",
    role: "Project Manager & Scrum Master",
    thumb: "/assets/img/team/team-1-4.png",
    bigImg: "/assets/img/team/team-big-1-4.png",
    bio: "Laura keeps every project on track, on budget, and on brief. With a PMP certification and 10 years in agile delivery, she is the bridge between our clients and our development teams — ensuring clear communication, smooth sprints, and successful handovers.",
  },
];

export default function TeamSection() {
  const [activeTab, setActiveTab] = useState("team_1");
  const activeTeam = teamMembers.find((m) => m.id === activeTab);

  return (
    <section
      className="space overflow-hidden team-area-1"
      data-bg-src="/assets/img/bg/team-bg-1.png"
      style={{ backgroundImage: "url(/assets/img/bg/team-bg-1.png)" }}
    >
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-xxl-7 col-xl-7 col-md-8">
            <div className="title-area">
              <span className="sub-title subtitle-line text-anim" data-cue="slideInUp">
                <Image className="me-2" src="/assets/img/icon/subtitle-icon.svg" alt="icon" width={20} height={20} />
                Our Experts
              </span>
              <h2 className="sec-title text-anim2" data-cue="slideInUp">
                Passionate, Skilled & Driven
              </h2>
              <p className="fs-18 text-anim2" data-cue="slideInUp">
                Our team is built from the best — developers, designers, and strategists who love what they do.
              </p>
            </div>
          </div>
          <div className="col-auto">
            <div className="sec-btn">
              <Link className="th-btn style-border3" href="/team">Meet the Full Team</Link>
            </div>
          </div>
        </div>

        <div className="row gy-40">
          <div className="col-xl-4">
            <div className="team-nav-wrap">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                {teamMembers.map((member) => (
                  <li key={member.id} className="nav-item" role="presentation" data-cue="slideInUp">
                    <button
                      className={"nav-link" + (activeTab === member.id ? " active" : "")}
                      onClick={() => setActiveTab(member.id)}
                      type="button"
                    >
                      <span className="team-thumb-sm">
                        <Image src={member.thumb} alt={member.name} width={60} height={60} />
                      </span>
                      <span className="content-wrap">
                        <span className="box-title">{member.name}</span>
                        <span className="desi">{member.role}</span>
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-xl-8">
            <div className="team-content-wrap">
              {activeTeam && (
                <div className="tab-content" id="myTabContent">
                  <div className="tab-pane fade show active" data-cue="slideInUp">
                    <div className="team-tab-content">
                      <div
                        className="team-1-bg-mask"
                        data-mask-src="/assets/img/shape/team-1_mask.jpg"
                        style={{
                          maskImage: "url(/assets/img/shape/team-1_mask.jpg)",
                          WebkitMaskImage: "url(/assets/img/shape/team-1_mask.jpg)",
                        }}
                      ></div>
                      <div className="team-thumb">
                        <Image src={activeTeam.bigImg} alt={activeTeam.name} width={400} height={500} />
                      </div>
                      <div className="team-content">
                        <div className="top">
                          <h3 className="box-title">{activeTeam.name}</h3>
                          <p className="desi">{activeTeam.role}</p>
                        </div>
                        <div className="body-text mb-4">
                          <p className="mb-2">{activeTeam.bio}</p>
                        </div>
                        <div className="button-wrap mb-4">
                          <Link href="/contact" className="th-btn th-btn-xl">
                            <Image src="/assets/img/icon/phone.svg" alt="" width={20} height={20} /> Start a Project
                          </Link>
                        </div>
                        <div className="th-social">
                          <a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a>
                          <a href="https://www.github.com/"><i className="fab fa-github"></i></a>
                          <a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a>
                        </div>
                      </div>
                      <Link className="icon-btn style3" href="/team-details">
                        <MaskedIcon src="/assets/img/icon/arrow-right-1.svg" alt="View profile" width={24} height={24} />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Technology Partner Logos */}
        <div className="brand-wrap1 text-center overflow-hidden">
          <div className="container th-container">
            <div
              className="swiper th-slider"
              data-cue="slideInUp"
              id="brandSlider1"
              data-slider-options='{"breakpoints":{"0":{"slidesPerView":2},"576":{"slidesPerView":"2"},"768":{"slidesPerView":"3"},"992":{"slidesPerView":"3"},"1200":{"slidesPerView":"4"},"1400":{"slidesPerView":"5"}}}'
            >
              <div className="swiper-wrapper">
                {[1, 2, 3, 4, 5, 1, 2, 3, 4, 5].map((n, i) => (
                  <div key={i} className="swiper-slide">
                    <div className="brand-box">
                      <Image
                        src={`/assets/img/brand/brand1-${n}.svg`}
                        alt={`Technology partner ${n}`}
                        width={130}
                        height={50}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
