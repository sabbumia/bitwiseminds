"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [sticky, setSticky] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />

      <header className="th-header header-default">
        <div className={"sticky-wrapper" + (sticky ? " sticky" : "")}>
          <div className="menu-area">
            <div className="container">
              <div className="row align-items-center justify-content-between">
                {/* Logo */}
                <div className="col-auto">
                  <div className="header-logo">
                    <Link href="/">
                      <Image src="/assets/img/logo2.svg" alt="BitwiseMinds" width={160} height={50} priority />
                    </Link>
                  </div>
                </div>

                {/* Desktop Navigation */}
                <div className="col-auto me-xxl-auto">
                  <nav className="main-menu d-none d-lg-inline-block">
                    <ul>
                      <li><Link href="/">Home</Link></li>
                      <li><Link href="/about">About Us</Link></li>

                      <li className="menu-item-has-children">
                        <a href="#">Services</a>
                        <ul className="sub-menu">
                          <li><Link href="/service">All Services</Link></li>
                          <li><Link href="/service-details">Service Details</Link></li>
                        </ul>
                      </li>

                      <li className="menu-item-has-children">
                        <a href="#">Pages</a>
                        <ul className="sub-menu">
                          <li className="menu-item-has-children">
                            <a href="#">Digital Store</a>
                            <ul className="sub-menu">
                              <li><Link href="/shop">Products</Link></li>
                              <li><Link href="/shop-details">Product Details</Link></li>
                              <li><Link href="/cart">Cart</Link></li>
                              <li><Link href="/checkout">Checkout</Link></li>
                              <li><Link href="/wishlist">Saved Items</Link></li>
                            </ul>
                          </li>
                          <li><Link href="/team">Our Team</Link></li>
                          <li><Link href="/team-details">Team Details</Link></li>
                          <li><Link href="/gallery">Portfolio</Link></li>
                          <li><Link href="/testimonial">Testimonials</Link></li>
                          <li><Link href="/faq">FAQ&apos;s</Link></li>
                          <li><Link href="/price">Pricing Plans</Link></li>
                          <li><Link href="/error">404 Error</Link></li>
                        </ul>
                      </li>

                      <li className="menu-item-has-children">
                        <a href="#">Blog</a>
                        <ul className="sub-menu">
                          <li><Link href="/blog">Blog Standard</Link></li>
                          <li><Link href="/blog-2">Blog with Sidebar</Link></li>
                          <li><Link href="/blog-3">Blog without Sidebar</Link></li>
                          <li><Link href="/blog-details">Blog Details</Link></li>
                        </ul>
                      </li>

                      <li><Link href="/contact">Contact Us</Link></li>
                    </ul>
                  </nav>

                  {/* Mobile hamburger */}
                  <div className="header-button d-flex d-lg-none">
                    <button
                      type="button"
                      className="th-menu-toggle icon-btn"
                      aria-label="Open menu"
                      onClick={() => setMobileOpen(true)}
                    >
                      <i className="far fa-bars"></i>
                    </button>
                  </div>
                </div>

                {/* CTA — desktop only */}
                <div className="col-auto d-xl-block d-none">
                  <div className="header-button">
                    <div className="info-card">
                      <div className="box-icon">
                        <Image src="/assets/img/icon/phone-white.png" alt="Phone" width={24} height={24} />
                      </div>
                      <div className="box-content">
                        <h4 className="box-title text-white">Call us:</h4>
                        <p className="box-text">
                          <a className="text-white" href="tel:01878009399">+880 1878009399</a>
                        </p>
                      </div>
                    </div>
                    <Link href="/contact" className="th-btn style-border">Get a Quote</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
