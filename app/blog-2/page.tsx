import type { Metadata } from "next";
import Breadcrumb from "@/components/common/Breadcrumb";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = { title: "Blog with Sidebar - BitwiseMinds IT Solutions" };

const posts = [
  { img: "/assets/img/blog/blog-s-2-1.jpg", title: "Why Every Business Needs Custom Software in 2025", date: "24 Jun, 2025", author: "Alex Morrison" },
  { img: "/assets/img/blog/blog-s-2-2.jpg", title: "How to Choose the Right IT Support Partner", date: "18 Jun, 2025", author: "Laura Chen" },
  { img: "/assets/img/blog/blog-s-2-3.jpg", title: "Cloud vs On-Premise: Which Is Right for Your Business?", date: "12 Jun, 2025", author: "Rachel Thompson" },
];

const recentPosts = [
  { img: "/assets/img/blog/blog-s-1-1.jpg", title: "Custom Software vs Off-the-Shelf", date: "24 Jun, 2025" },
  { img: "/assets/img/blog/blog-s-1-2.jpg", title: "Cloud Migration Checklist for SMEs", date: "18 Jun, 2025" },
  { img: "/assets/img/blog/blog-s-1-3.jpg", title: "10 Signs Your Business Needs Automation", date: "12 Jun, 2025" },
];

export default function Blog2Page() {
  return (
    <main>
      <Breadcrumb title="Blog with Sidebar" items={[{ label: "Home", href: "/" }, { label: "Blog with Sidebar" }]} />
      <section className="space bg-smoke2 overflow-hidden">
        <div className="container">
          <div className="row gx-40">
            <div className="col-xl-8 col-lg-7">
              <div className="row gy-40">
                {posts.map((post, i) => (
                  <div key={i} className="col-12" data-cue="slideInUp">
                    <div className="blog-card style2">
                      <div className="blog-img"><Link href="/blog-details"><Image src={post.img} alt={post.title} width={760} height={400} /></Link></div>
                      <div className="blog-content">
                        <div className="blog-meta">
                          <Link href="/blog"><i className="fas fa-user"></i>{post.author}</Link>
                          <Link href="/blog"><i className="fas fa-calendar"></i>{post.date}</Link>
                        </div>
                        <h3 className="box-title"><Link href="/blog-details">{post.title}</Link></h3>
                        <p className="box-text mb-4">Discover actionable insights and expert strategies from the BitwiseMinds team to help your business leverage technology for measurable growth.</p>
                        <Link href="/blog-details" className="th-btn">Read Full Article</Link>
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
            <div className="col-xl-4 col-lg-5">
              <aside className="sidebar-area">
                <div className="widget widget_search">
                  <form className="search-form"><input type="text" placeholder="Search articles..." /><button type="submit"><i className="far fa-search"></i></button></form>
                </div>
                <div className="widget widget_recent_posts">
                  <h3 className="widget_title">Recent Posts</h3>
                  {recentPosts.map((rp, i) => (
                    <div key={i} className="recent-post">
                      <div className="recent-post-img"><Link href="/blog-details"><Image src={rp.img} alt={rp.title} width={80} height={70} /></Link></div>
                      <div className="recent-post-content">
                        <h6 className="box-title"><Link href="/blog-details">{rp.title}</Link></h6>
                        <span className="recent-post-date"><i className="fas fa-calendar me-1"></i>{rp.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="widget widget_categories">
                  <h3 className="widget_title">Categories</h3>
                  <ul>
                    {[{ label: "Software Development", count: 18 }, { label: "Cloud & DevOps", count: 12 }, { label: "IT Support", count: 9 }, { label: "UI/UX Design", count: 7 }, { label: "Business Automation", count: 14 }].map((cat, i) => (
                      <li key={i}><Link href="/blog"><Image className="icon" src="/assets/img/theme-img/btn-icon.svg" alt="" width={16} height={16} />{cat.label}</Link><span>({cat.count})</span></li>
                    ))}
                  </ul>
                </div>
                <div className="widget widget_tag_cloud">
                  <h3 className="widget_title">Tags</h3>
                  <div className="tagcloud">
                    {["React", "Node.js", "AWS", "Python", "Automation", "Cloud", "UI/UX", "Security"].map((tag) => (
                      <Link key={tag} href="/blog">{tag}</Link>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
