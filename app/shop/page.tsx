import type { Metadata } from "next";
import Breadcrumb from "@/components/common/Breadcrumb";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = { title: "Digital Products - BitwiseMinds IT Solutions" };

const products = [
  { img: "/assets/img/product/product-website-starter-pack.png", title: "Business Website Starter Pack", price: "$299.00", tag: null },
  { img: "/assets/img/product/product-ecommerce-launch-bundle.png", title: "E-commerce Launch Bundle", price: "$599.00", tag: null },
  { img: "/assets/img/product/product-saas-dashboard-template.png", title: "SaaS Admin Dashboard Template", price: "$149.00", tag: "New" },
  { img: "/assets/img/product/product-react-ui-library.png", title: "React UI Component Library", price: "$89.00", tag: "New" },
  { img: "/assets/img/product/product-it-support-plan.png", title: "IT Support Annual Plan", price: "$2,999.00", tag: null },
  { img: "/assets/img/product/product-cloud-migration-kit.png", title: "Cloud Setup & Migration Kit", price: "$399.00", tag: "Hot" },
  { img: "/assets/img/product/product-seo-audit-tool.png", title: "SEO Audit & Report Tool", price: "$79.00", tag: null },
  { img: "/assets/img/product/product-web-performance-kit.png", title: "Web Performance Optimisation", price: "$199.00", tag: null },
  { img: "/assets/img/product/product-website-starter-pack.png", title: "Mobile App Design System", price: "$129.00", tag: null },
  { img: "/assets/img/product/product-ecommerce-launch-bundle.png", title: "API Integration Toolkit", price: "$249.00", tag: "New" },
  { img: "/assets/img/product/product-saas-dashboard-template.png", title: "Business Automation Blueprint", price: "$349.00", tag: null },
  { img: "/assets/img/product/product-react-ui-library.png", title: "Security Audit Package", price: "$499.00", tag: null },
];

export default function ShopPage() {
  return (
    <main>
      <Breadcrumb title="Digital Products" items={[{ label: "Home", href: "/" }, { label: "Digital Products" }]} />
      <section className="space-top space-extra-bottom">
        <div className="container">
          <div className="th-sort-bar mb-4">
            <div className="row justify-content-between align-items-center">
              <div className="col-md"><p className="woocommerce-result-count">Showing 1–{products.length} of {products.length} products</p></div>
              <div className="col-md-auto">
                <form className="woocommerce-ordering">
                  <select name="orderby" className="orderby">
                    <option value="menu_order">Default Sorting</option>
                    <option value="popularity">Most Popular</option>
                    <option value="date">Newest First</option>
                    <option value="price">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                  </select>
                </form>
              </div>
            </div>
          </div>
          <div className="row gy-4">
            {products.map((product, i) => (
              <div key={i} className="col-xl-3 col-lg-4 col-md-6">
                <div className="th-product product-grid">
                  <div className="product-img">
                    {product.tag && <span className="product-tag">{product.tag}</span>}
                    <Image src={product.img} alt={product.title} width={280} height={280} />
                    <div className="actions">
                      <a href="#" className="icon-btn"><i className="far fa-eye"></i></a>
                      <Link href="/wishlist" className="icon-btn"><i className="far fa-heart"></i></Link>
                    </div>
                  </div>
                  <div className="product-content">
                    <span className="price">{product.price}</span>
                    <h3 className="product-title"><Link href="/shop-details">{product.title}</Link></h3>
                    <div className="product-rating">
                      <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5"><span style={{ width: "100%" }}>Rated <strong className="rating">5.00</strong> out of 5</span></div>
                      <Link href="/shop-details" className="woocommerce-review-link">(<span className="count">12</span> Reviews)</Link>
                    </div>
                    <Link className="th-btn style-border2 th-btn-sm" href="/cart"><i className="far fa-shopping-cart me-2"></i>Add to Cart</Link>
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
