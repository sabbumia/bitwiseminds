"use client";
import { useState } from "react";
import Breadcrumb from "@/components/common/Breadcrumb";
import Image from "next/image";
import Link from "next/link";

const productImages = [
  "/assets/img/product/product_1_1.png",
  "/assets/img/product/product_1_2.png",
  "/assets/img/product/product_1_3.png",
  "/assets/img/product/product_1_4.png",
];

export default function ShopDetailsPage() {
  const [qty, setQty] = useState(1);
  const [selectedImg, setSelectedImg] = useState(0);

  return (
    <main>
      <Breadcrumb title="Product Details" items={[{ label: "Home", href: "/" }, { label: "Digital Products", href: "/shop" }, { label: "Business Website Starter Pack" }]} />
      <section className="space-top space-extra-bottom">
        <div className="container">
          <div className="row gy-40">
            <div className="col-xl-5">
              <div className="product-single-img">
                <div className="main-img mb-4"><Image src={productImages[selectedImg]} alt="Product" width={500} height={500} /></div>
                <div className="row gy-2">
                  {productImages.map((img, i) => (
                    <div key={i} className="col-3">
                      <div className={"thumb-img" + (selectedImg === i ? " active" : "")} onClick={() => setSelectedImg(i)} style={{ cursor: "pointer", border: selectedImg === i ? "2px solid var(--theme-color)" : "2px solid transparent" }}>
                        <Image src={img} alt={`View ${i + 1}`} width={100} height={100} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-xl-7">
              <div className="product-single-content">
                <h2 className="product-title">Business Website Starter Pack</h2>
                <div className="product-rating mb-3">
                  {Array(5).fill(0).map((_, i) => <i key={i} className="fas fa-star text-warning"></i>)}
                  <span className="ms-2">(12 Reviews)</span>
                </div>
                <div className="price mb-4"><span className="woocommerce-Price-amount">$299.00 USD</span></div>
                <p className="mb-4">Everything you need to launch a professional business website — custom design mockups, responsive HTML/CSS templates, SEO-optimised structure, contact form integration, and 30 days post-launch support.</p>
                <div className="product-quantity mb-4">
                  <div className="quantity d-flex align-items-center gap-3">
                    <div className="qty-input-wrap d-flex align-items-center">
                      <button type="button" className="quantity-minus" onClick={() => setQty(Math.max(1, qty - 1))}><i className="fas fa-minus"></i></button>
                      <input type="number" className="qty-input" value={qty} min={1} onChange={(e) => setQty(Math.max(1, parseInt(e.target.value) || 1))} />
                      <button type="button" className="quantity-plus" onClick={() => setQty(qty + 1)}><i className="fas fa-plus"></i></button>
                    </div>
                    <Link href="/cart" className="th-btn">Add to Cart</Link>
                    <Link href="/wishlist" className="th-btn style-border"><i className="far fa-heart me-2"></i>Save</Link>
                  </div>
                </div>
                <div className="product-meta">
                  <p><strong>Category:</strong> Web Development</p>
                  <p><strong>Tags:</strong> Website, Starter, Business, Template</p>
                  <p><strong>Delivery:</strong> Instant digital download + onboarding call</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
