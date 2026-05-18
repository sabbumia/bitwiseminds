"use client";
import { useState } from "react";
import Breadcrumb from "@/components/common/Breadcrumb";
import Image from "next/image";
import Link from "next/link";

interface WishlistItem { id: number; img: string; title: string; price: string; status: string; }

const initialWishlist: WishlistItem[] = [
  { id: 1, img: "/assets/img/product/product_1_1.png", title: "Business Website Starter Pack", price: "$299.00", status: "Available" },
  { id: 2, img: "/assets/img/product/product_1_2.png", title: "E-commerce Launch Bundle", price: "$599.00", status: "Available" },
  { id: 3, img: "/assets/img/product/product_1_3.png", title: "SaaS Admin Dashboard Template", price: "$149.00", status: "Available" },
  { id: 4, img: "/assets/img/product/product_1_4.png", title: "React UI Component Library", price: "$89.00", status: "Limited" },
];

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState<WishlistItem[]>(initialWishlist);
  const removeItem = (id: number) => setWishlist(wishlist.filter((item) => item.id !== id));

  return (
    <main>
      <Breadcrumb title="Saved Items" items={[{ label: "Home", href: "/" }, { label: "Saved Items" }]} />
      <div className="space-top space-extra-bottom">
        <div className="container">
          <table className="shop_table wishlist_table">
            <thead>
              <tr>
                <th className="product-remove"></th>
                <th className="product-thumbnail">Product</th>
                <th className="product-name">Name</th>
                <th className="product-price">Price</th>
                <th className="product-stock-status">Status</th>
                <th className="product-add-to-cart"></th>
              </tr>
            </thead>
            <tbody>
              {wishlist.map((item) => (
                <tr key={item.id} className="wishlist-item">
                  <td className="product-remove"><button onClick={() => removeItem(item.id)} className="remove"><i className="fas fa-times"></i></button></td>
                  <td className="product-thumbnail"><Link href="/shop-details"><Image src={item.img} alt={item.title} width={80} height={80} /></Link></td>
                  <td className="product-name"><Link href="/shop-details">{item.title}</Link></td>
                  <td className="product-price"><span className="woocommerce-Price-amount">{item.price}</span></td>
                  <td className="product-stock-status"><span className={item.status === "Available" ? "in-stock" : "out-of-stock"}>{item.status}</span></td>
                  <td className="product-add-to-cart"><Link href="/cart" className="th-btn th-btn-sm">Add to Cart</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
