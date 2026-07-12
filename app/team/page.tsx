import type { Metadata } from "next";
import Breadcrumb from "@/components/common/Breadcrumb";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = { title: "Our Team - BitwiseMinds IT Solutions" };

const teamMembers = [
  { img: "/assets/img/team/sazzad.jpg", name: "Sazzad Hossain", role: "Chief Technology Officer" },
  { img: "/assets/img/team/rachel-thompson-lead-developer.jpg", name: "Rachel Thompson", role: "Lead Full-Stack Developer" },
  { img: "/assets/img/team/marcus-okafor-uiux-designer.jpg", name: "Marcus Okafor", role: "Senior UI/UX Designer" },
  { img: "/assets/img/team/laura-chen-project-manager.jpg", name: "Laura Chen", role: "Project Manager & Scrum Master" },
  { img: "/assets/img/team/daniel-park-cloud-architect.jpg", name: "Daniel Park", role: "Cloud Solutions Architect" },
  { img: "/assets/img/team/priya-sharma-backend-developer.jpg", name: "Priya Sharma", role: "Backend Developer" },
  { img: "/assets/img/team/tom-bradley-devops-engineer.jpg", name: "Tom Bradley", role: "DevOps Engineer" },
  { img: "/assets/img/team/sofia-reyes-automation-specialist.jpg", name: "Sofia Reyes", role: "Business Automation Specialist" },
];

export default function TeamPage() {
  return (
    <main>
      <Breadcrumb title="Our Team" items={[{ label: "Home", href: "/" }, { label: "Our Team" }]} />
      <section className="space bg-smoke2 overflow-hidden">
        <div className="container">
          <div className="title-area text-center">
            <span className="sub-title subtitle-line text-anim" data-cue="slideInUp">
              <Image className="me-2" src="/assets/img/icon/subtitle-icon.svg" alt="icon" width={20} height={20} />
              Meet the Team
            </span>
            <h2 className="sec-title text-anim2" data-cue="slideInUp">Passionate Experts Behind Every Solution</h2>
            <p className="fs-18 text-anim2" data-cue="slideInUp">4+ talented developers, designers, and strategists united by a love for building great technology</p>
          </div>
          <div className="row gy-40">
            {teamMembers.map((member, i) => (
              <div key={i} className="col-xl-3 col-lg-4 col-md-6" data-cue="slideInUp">
                <div className="team-card">
                  <div className="team-thumb"><Image src={member.img} alt={member.name} width={300} height={340} /></div>
                  <div className="team-info">
                    <h4 className="box-title"><Link href="/team-details">{member.name}</Link></h4>
                    <p className="desi">{member.role}</p>
                    <div className="th-social">
                      <a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a>
                      <a href="https://www.github.com/"><i className="fab fa-github"></i></a>
                      <a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a>
                    </div>
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
