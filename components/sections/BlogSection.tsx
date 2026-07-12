import Link from "next/link";
import Image from "next/image";
import { daysAgo, currentYear } from "@/lib/dates";

const blogs = [
  {
    img: "/assets/img/blog/custom-software-business.jpg",
    title: `Why Every Business Needs a Custom Software Solution in ${currentYear()}`,
    date: daysAgo(0),
    author: "Alex Morrison",
  },
  {
    img: "/assets/img/blog/cloud-migration-guide.jpg",
    title: "Cloud Migration: A Step-by-Step Guide for SMEs",
    date: daysAgo(6),
    author: "Rachel Thompson",
  },
  {
    img: "/assets/img/blog/business-automation-savings.jpg",
    title: "How Business Automation Can Save You 20+ Hours Per Week",
    date: daysAgo(12),
    author: "Marcus Okafor",
  },
];

export default function BlogSection() {
  return (
    <section className="bg-smoke2 space overflow-hidden" id="blog-sec">
      <div className="container">
        <div className="title-area text-center">
          <span className="sub-title text-anim subtitle-line" data-cue="slideInUp">
            <Image className="me-2" src="/assets/img/icon/subtitle-icon.svg" alt="icon" width={20} height={20} />
            Tech Insights
          </span>
          <h2 className="sec-title text-anim" data-cue="slideInUp">Latest Articles &amp; Tech Insights</h2>
        </div>
        <div className="row gy-40 justify-content-center">
          {blogs.map((blog, i) => (
            <div key={i} className="col-xl-4 col-lg-6" data-cue="slideInUp">
              <div className="blog-card">
                <div className="blog-img">
                  <Link href="/blog-details">
                    <Image src={blog.img} alt={blog.title} width={400} height={260} />
                  </Link>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <Link href="/blog">
                      <i className="fas fa-user"></i>
                      {blog.author}
                    </Link>
                    <Link href="/blog">
                      <i className="fas fa-calendar"></i>
                      {blog.date}
                    </Link>
                  </div>
                  <h3 className="box-title">
                    <Link href="/blog-details">{blog.title}</Link>
                  </h3>
                  <div className="btn-wrap">
                    <Link href="/blog-details" className="link-btn th-btn-icon">Read More</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
