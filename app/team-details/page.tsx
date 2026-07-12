import type { Metadata } from "next";
import Breadcrumb from "@/components/common/Breadcrumb";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = { title: "Team Details - BitwiseMinds IT Solutions" };

export default function TeamDetailsPage() {
  return (
    <main>
      <Breadcrumb title="Team Details" items={[{ label: "Home", href: "/" }, { label: "Our Team", href: "/team" }, { label: "Alex Morrison" }]} />
      <section className="space bg-smoke2 overflow-hidden">
        <div className="container">
          <div className="row gx-60">
            <div className="col-xl-5 col-lg-6">
              <div className="team-details-img" data-cue="slideInUp">
                <Image src="/assets/img/team/daniel-park-cloud-architect.jpg" alt="Alex Morrison - CTO" width={520} height={620} />
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              <div className="team-details-content" data-cue="slideInUp">
                <span className="sub-title subtitle-line text-anim">
                  <Image className="me-2" src="/assets/img/icon/subtitle-icon.svg" alt="icon" width={20} height={20} />
                  Meet Our Expert
                </span>
                <h2 className="sec-title">Alex Morrison</h2>
                <p className="desi text-theme mb-4">Chief Technology Officer</p>
                <p className="mb-3">Alex leads BitwiseMinds with 15+ years of enterprise software architecture and cloud infrastructure experience. His vision drives our technical strategy, ensuring every solution we deliver is built to last — scalable, secure, and ahead of the curve.</p>
                <p className="mb-4">A passionate advocate for clean code and developer excellence, Alex mentors our engineering team and maintains our high standards of delivery.</p>
                <div className="row gy-4 mb-4">
                  {[
                    { label: "Experience", value: "15+ Years" },
                    { label: "Speciality", value: "Cloud Architecture & Full-Stack" },
                    { label: "Location", value: "New York, USA" },
                    { label: "Availability", value: "Project Consultation Available" },
                  ].map((info, i) => (
                    <div key={i} className="col-sm-6">
                      <div className="info-box">
                        <h5 className="box-title">{info.label}:</h5>
                        <p className="box-text">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="btn-wrap mb-4"><Link href="/contact" className="th-btn">Start a Project</Link></div>
                <div className="th-social">
                  <a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a>
                  <a href="https://www.github.com/"><i className="fab fa-github"></i></a>
                  <a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
