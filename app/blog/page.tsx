import type { Metadata } from "next";
import Breadcrumb from "@/components/common/Breadcrumb";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = { title: "Tech Blog - BitwiseMinds IT Solutions" };

const posts = [
  { img: "/assets/img/blog/blog-s-1-1.jpg", title: "Why Every Business Needs Custom Software in 2025", date: "24 Jun, 2025", author: "Alex Morrison", category: "Software Dev" },
  { img: "/assets/img/blog/blog-s-1-2.jpg", title: "Cloud Migration: A Complete Guide for SMEs", date: "20 Jun, 2025", author: "Rachel Thompson", category: "Cloud" },
  { img: "/assets/img/blog/blog-s-1-3.jpg", title: "Business Automation: Save 20+ Hours Per Week", date: "16 Jun, 2025", author: "Marcus Okafor", category: "Automation" },
  { img: "/assets/img/blog/blog-s-1-4.jpg", title: "The True Cost of Poor IT Support for Your Business", date: "12 Jun, 2025", author: "Laura Chen", category: "IT Support" },
  { img: "/assets/img/blog/blog-s-1-5.jpg", title: "UI/UX Design Principles That Convert Visitors to Clients", date: "08 Jun, 2025", author: "Marcus Okafor", category: "Design" },
  { img: "/assets/img/blog/blog-s-1-6.jpg", title: "Choosing the Right Tech Stack for Your Web Project", date: "04 Jun, 2025", author: "Rachel Thompson", category: "Web Dev" },
];

export default function BlogPage() {
  return (
    <main>
      <Breadcrumb title="Tech Blog" items={[{ label: "Home", href: "/" }, { label: "Tech Blog" }]} />
      <section className="space bg-smoke2 overflow-hidden">
        <div className="container">
          <div className="title-area text-center mb-50">
            <span className="sub-title subtitle-line text-anim" data-cue="slideInUp">
              <Image className="me-2" src="/assets/img/icon/subtitle-icon.svg" alt="icon" width={20} height={20} />
              Tech Insights
            </span>
            <h2 className="sec-title text-anim2" data-cue="slideInUp">Articles, Guides &amp; Industry Insights</h2>
          </div>
          <div className="row gy-40">
            {posts.map((post, i) => (
              <div key={i} className="col-xl-4 col-lg-6" data-cue="slideInUp">
                <div className="blog-card">
                  <div className="blog-img">
                    <Link href="/blog-details"><Image src={post.img} alt={post.title} width={400} height={260} /></Link>
                    <span className="blog-category">{post.category}</span>
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <Link href="/blog"><i className="fas fa-user"></i>{post.author}</Link>
                      <Link href="/blog"><i className="fas fa-calendar"></i>{post.date}</Link>
                    </div>
                    <h3 className="box-title"><Link href="/blog-details">{post.title}</Link></h3>
                    <div className="btn-wrap"><Link href="/blog-details" className="link-btn th-btn-icon">Read More</Link></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="th-pagination mt-50 text-center">
            <ul>
              <li><a href="#"><i className="far fa-arrow-left"></i></a></li>
              <li><a href="#" className="active">1</a></li>
              <li><a href="#">2</a></li>
              <li><a href="#"><i className="far fa-arrow-right"></i></a></li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
