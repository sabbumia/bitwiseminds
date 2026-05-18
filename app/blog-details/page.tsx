import type { Metadata } from "next";
import Breadcrumb from "@/components/common/Breadcrumb";
import Image from "next/image";
import Link from "next/link";
import MaskedIcon from "@/components/common/MaskedIcon";

export const metadata: Metadata = { title: "Blog Details - BitwiseMinds IT Solutions" };

const comments = [
  { img: "/assets/img/blog/comment-author-1.jpg", name: "James Harrington", date: "25 Jun, 2025", time: "10:30am", text: "Excellent article from the BitwiseMinds team. We recently migrated to custom software and the productivity gains have been extraordinary. The ROI was clear within 6 months.", replies: [{ img: "/assets/img/blog/comment-author-2.jpg", name: "Rachel Thompson", date: "25 Jun, 2025", time: "02:15pm", text: "Thank you, James! You're absolutely right — the ROI timeline really depends on the complexity of the solution, but for most mid-sized businesses we typically see positive ROI within 3–9 months." }] },
  { img: "/assets/img/blog/comment-author-3.jpg", name: "Sophia Patel", date: "26 Jun, 2025", time: "09:00am", text: "This perfectly captures why we switched to BitwiseMinds last year. Their automation system has saved us over 25 hours per week in manual data entry.", replies: [] },
];

export default function BlogDetailsPage() {
  return (
    <main>
      <Breadcrumb title="Blog Details" items={[{ label: "Home", href: "/" }, { label: "Tech Blog", href: "/blog" }, { label: "Blog Details" }]} />

      <section className="th-blog-wrapper blog-details space-top space-extra-bottom">
        <div className="container">
          <div className="th-blog blog-single" data-cue="slideInUp">
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="title-area text-center">
                  <span className="sub-title subtitle-line text-anim" data-cue="slideInUp">
                    <Image className="me-2" src="/assets/img/icon/subtitle-icon.svg" alt="icon" width={20} height={20} />
                    Software Development
                  </span>
                  <h2 className="sec-title text-anim2" data-cue="slideInUp">Why Every Business Needs Custom Software in 2025: The Definitive Guide</h2>
                </div>
              </div>
            </div>
            <div className="blog-inner-img mb-55">
              <Image src="/assets/img/blog/blog_inner_1.jpg" alt="Custom Software Development 2025" width={1100} height={550} style={{ width: "100%", height: "auto" }} />
              <div className="blog-meta">
                <Link href="/blog"><i className="fas fa-user"></i>Alex Morrison</Link>
                <Link href="/blog"><i className="fas fa-calendar"></i>24 Jun, 2025</Link>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="blog-content">
                  <h4 className="fw-semibold mb-15">1. Off-the-Shelf Software Holds Your Business Back</h4>
                  <p className="mb-15 fs-18">Generic software solutions are designed to serve the average user. But your business is not average — it has unique workflows, customers, and goals. When you rely on off-the-shelf tools, you&apos;re constantly adapting your processes to fit the software rather than the software fitting your processes.</p>
                  <div className="checklist mb-50">
                    <ul>
                      <li>Automating your exact workflows without workarounds</li>
                      <li>Integrating seamlessly with your existing tools and data</li>
                      <li>Scaling precisely as your business grows — no unnecessary modules</li>
                    </ul>
                  </div>
                  <h4 className="fw-semibold mb-15">2. The Real Cost of &ldquo;Free&rdquo; or Cheap Software</h4>
                  <p className="mb-0 fs-18">Many businesses underestimate the hidden costs of generic software — per-seat licensing fees, manual workarounds, integration failures, and the opportunity cost of inefficient processes.</p>
                  <p className="mb-30 fs-18">At BitwiseMinds, we work with clients to build a detailed business case before every project, ensuring you can confidently project returns before committing.</p>
                  <div className="blog-inner-img mb-40">
                    <Image src="/assets/img/blog/blog_inner_2.jpg" alt="Software ROI" width={900} height={450} style={{ width: "100%", height: "auto" }} />
                  </div>
                  <h4 className="fw-semibold mb-15">3. Custom Software as a Competitive Advantage</h4>
                  <p className="fs-18">In 2025, the businesses winning in their markets are those using technology as a strategic differentiator. Custom software lets you deliver superior customer experiences that generic platforms can&apos;t replicate.</p>
                  <blockquote className="bg-white">
                    <p>&quot;Software is eating the world. The businesses that build their own tools don&apos;t just keep up — they set the pace. Custom software is no longer a luxury; it&apos;s a survival strategy.&quot;</p>
                    <cite>Alex Morrison, CTO — BitwiseMinds</cite>
                  </blockquote>
                  <h4 className="fw-semibold mt-40 mb-15">4. How to Get Started with BitwiseMinds</h4>
                  <p className="mb-20 fs-18">Getting started is simpler than you might think. Our process begins with a free 60-minute discovery call where we listen to your challenges and goals.</p>
                  <p className="mb-0 fs-18">From there, we produce a clear proposal with timelines, costs, and expected outcomes. No jargon, no ambiguity — just a straightforward path forward.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="share-links clearfix">
                <div className="row justify-content-between">
                  <div className="col-md-auto">
                    <span className="share-links-title">Tags:</span>
                    <div className="tagcloud">
                      <Link href="/blog">Software</Link>
                      <Link href="/blog">Technology</Link>
                      <Link href="/blog">Business</Link>
                    </div>
                  </div>
                  <div className="col-md-auto text-xl-end">
                    <span className="share-links-title">Share:</span>
                    <div className="th-social style2 align-items-center">
                      <a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a>
                      <a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a>
                      <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="blog-navigation">
                <div>
                  <a href="#" className="nav-btn prev">
                    <span className="thumb"><Image src="/assets/img/blog/blog-navigation-1-1.jpg" alt="" width={80} height={60} /></span>
                    <span className="nav-text"><span className="icon-btn"><MaskedIcon src="/assets/img/icon/arrow-left.svg" alt="" width={18} height={18} /></span>Previous</span>
                  </a>
                </div>
                <a href="#" className="blog-btn"><i className="fa-solid fa-grid"></i></a>
                <div>
                  <a href="#" className="nav-btn next">
                    <span className="thumb"><Image src="/assets/img/blog/blog-navigation-1-2.jpg" alt="" width={80} height={60} /></span>
                    <span className="nav-text"><span className="icon-btn"><MaskedIcon src="/assets/img/icon/arrow-right.svg" alt="" width={18} height={18} /></span>Next</span>
                  </a>
                </div>
              </div>

              <div className="th-comments-wrap" data-cue="slideInUp">
                <h2 className="blog-inner-title h4"><i className="fas fa-comments"></i> Comments ({comments.length + 1})</h2>
                <ul className="comment-list">
                  {comments.map((comment, i) => (
                    <li key={i} className="th-comment-item">
                      <div className="th-post-comment">
                        <div className="comment-avater"><Image src={comment.img} alt={comment.name} width={70} height={70} /></div>
                        <div className="comment-content">
                          <h3 className="name">{comment.name}</h3>
                          <span className="commented-on">{comment.date}<span className="ms-2">{comment.time}</span></span>
                          <p className="text">{comment.text}</p>
                          <div className="reply_and_edit"><a href="#" className="reply-btn"><i className="fas fa-reply"></i>Reply</a></div>
                        </div>
                      </div>
                      {comment.replies.length > 0 && (
                        <ul className="children">
                          {comment.replies.map((reply, j) => (
                            <li key={j} className="th-comment-item">
                              <div className="th-post-comment">
                                <div className="comment-avater"><Image src={reply.img} alt={reply.name} width={70} height={70} /></div>
                                <div className="comment-content">
                                  <h3 className="name">{reply.name}</h3>
                                  <span className="commented-on">{reply.date}<span className="ms-2">{reply.time}</span></span>
                                  <p className="text">{reply.text}</p>
                                  <div className="reply_and_edit"><a href="#" className="reply-btn"><i className="fas fa-reply"></i>Reply</a></div>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="th-comment-form" data-cue="slideInUp">
                <div className="form-title">
                  <h3 className="blog-inner-title h4 mb-2">Leave a Comment</h3>
                  <p className="form-text">Your email address will not be published. Required fields are marked *</p>
                </div>
                <form className="row">
                  <div className="col-md-6 form-group"><input type="text" placeholder="Your Name*" className="form-control" /></div>
                  <div className="col-md-6 form-group"><input type="email" placeholder="Email Address*" className="form-control" /></div>
                  <div className="col-12 form-group"><input type="text" placeholder="Website (optional)" className="form-control" /></div>
                  <div className="col-12 form-group"><textarea className="form-control" rows={4} placeholder="Share your thoughts..."></textarea></div>
                  <div className="col-12"><button type="submit" className="th-btn">Post Comment</button></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
