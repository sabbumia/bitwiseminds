import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer-wrapper footer-default">
      <div className="shape-mockup footer-bg-shape1" style={{ bottom: 0, left: 0 }}>
        <Image src="/assets/img/normal/footer-default-cta-thumb-3.png" alt="shape" width={300} height={400} />
      </div>
      <div className="shape-mockup footer-bg-shape2 shake" style={{ bottom: "8%", right: "4%" }}>
        <Image src="/assets/img/shape/shape1.png" alt="shape" width={60} height={60} />
      </div>
      <div className="shape-mockup footer-bg-shape3 jump" style={{ bottom: "35%", right: "6%" }}>
        <Image src="/assets/img/shape/shape2.png" alt="shape" width={40} height={40} />
      </div>
      <div className="shape-mockup footer-bg-shape4 shake" style={{ top: "35%", right: "3%" }}>
        <Image src="/assets/img/shape/shape3.png" alt="shape" width={50} height={50} />
      </div>

      <div className="container">
        {/* CTA Banner */}
        <div className="footer-cta-wrap" id="contact-sec">
          <div className="row gy-40 justify-content-xl-between justify-content-center align-items-center">
            <div className="col-xl-4 col-lg-6 order-xl-1">
              <div className="title-area mb-0">
                <h2 className="sec-title text-anim2" data-cue="slideInLeft">
                  Ready to Transform Your Business with Smart Technology?
                </h2>
              </div>
            </div>
            <div className="col-xl-5 order-xl-3">
              <div
                className="btn-wrap style2 justify-content-xl-end justify-content-center"
                data-cue="slideInRight"
              >
                <Link className="th-btn" href="/contact">
                  Free Consultation <span className="th-btn-icon"></span>
                </Link>
                <Link className="th-btn style2" href="/team">
                  Meet Our Experts <span className="th-btn-icon"></span>
                </Link>
              </div>
            </div>
            <div className="col-xl-auto align-self-end order-xl-2">
              <div className="footer-cta-thumb">
                <div className="img1" data-cue="slideInUp">
                  <Image
                    src="/assets/img/normal/footer-default-cta-thumb-1.png"
                    alt="IT solutions"
                    width={180}
                    height={220}
                  />
                </div>
                <div className="img2">
                  <Image
                    src="/assets/img/normal/footer-default-cta-thumb-2.png"
                    alt="Software development"
                    width={180}
                    height={220}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Widget Area */}
      <div className="widget-area">
        <div className="container">
          <div className="row justify-content-between">
            {/* About Widget */}
            <div className="col-sm-6 col-xl-auto" data-cue="slideInUp">
              <div className="widget footer-widget">
                <div className="th-widget-about">
                  <div className="about-logo">
                    <Link href="/">
                      <Image src="/assets/img/logo2.svg" alt="BitwiseMinds" width={160} height={45} />
                    </Link>
                  </div>
                  <p className="about-text">
                    BitwiseMinds delivers cutting-edge IT solutions — from custom software and web development to
                    cloud infrastructure and business automation — empowering businesses to grow and thrive.
                  </p>
                  <div className="info-box">
                    <div className="box-icon">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <p className="box-text">
                      <a href="mailto:hello@bitwiseminds.com" className="box-link">
                        hello@bitwiseminds.com
                      </a>
                    </p>
                  </div>
                  <div className="info-box">
                    <div className="box-icon">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <p className="box-text">
                      <a href="https://maps.google.com/" className="box-link">
                        42 Tech Avenue, Silicon District, New York
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-sm-6 col-xl-auto" data-cue="slideInUp">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Quick Links</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About Us</Link></li>
                    <li><Link href="/service">Our Services</Link></li>
                    <li><Link href="/gallery">Portfolio</Link></li>
                    <li><Link href="/contact">Free Consultation</Link></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="col-sm-6 col-xl-auto" data-cue="slideInUp">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Services</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li><Link href="/service">Web Design &amp; Development</Link></li>
                    <li><Link href="/service">Custom Software Dev</Link></li>
                    <li><Link href="/service">Cloud Solutions</Link></li>
                    <li><Link href="/service">IT Support Services</Link></li>
                    <li><Link href="/service">Business Automation</Link></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Resources */}
            <div className="col-sm-6 col-xl-auto" data-cue="slideInUp">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Resources</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li><Link href="/blog">Tech Blog</Link></li>
                    <li><Link href="/about">Case Studies</Link></li>
                    <li><Link href="/about">Documentation</Link></li>
                    <li><Link href="/about">Investors</Link></li>
                    <li><Link href="/contact">Terms &amp; Conditions</Link></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Support */}
            <div className="col-sm-6 col-xl-auto" data-cue="slideInUp">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Support</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li><Link href="/contact">Help Center</Link></li>
                    <li><Link href="/faq">FAQs</Link></li>
                    <li><Link href="/contact">Contact Us</Link></li>
                    <li><Link href="/about">Ticket Support</Link></li>
                    <li><Link href="/about">Live Chat</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container">
        <div className="copyright-wrap">
          <div className="row justify-content-center gy-3 align-items-center">
            <div className="col-lg-6" data-cue="slideInUp">
              <p className="copyright-text">
                <i className="fal fa-copyright"></i> Copyright 2025{" "}
                <Link href="/">BitwiseMinds</Link>. All Rights Reserved.
              </p>
            </div>
            <div className="col-lg-6 text-lg-end text-center" data-cue="slideInUp">
              <div className="th-social">
                <span className="text-theme">Follow Us:</span>
                <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
                <a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a>
                <a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a>
                <a href="https://www.github.com/"><i className="fab fa-github"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
