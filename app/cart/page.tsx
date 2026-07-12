"use client";
import { useState } from "react";
import Breadcrumb from "@/components/common/Breadcrumb";
import Image from "next/image";
import Link from "next/link";

interface CartItem { id: number; img: string; title: string; price: number; qty: number; }

const initialCart: CartItem[] = [
  { id: 1, img: "/assets/img/product/product-website-starter-pack.png", title: "Business Website Starter Pack", price: 299.00, qty: 1 },
  { id: 2, img: "/assets/img/product/product-ecommerce-launch-bundle.png", title: "E-commerce Launch Bundle", price: 599.00, qty: 1 },
  { id: 3, img: "/assets/img/product/product-saas-dashboard-template.png", title: "SaaS Admin Dashboard Template", price: 149.00, qty: 2 },
];

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>(initialCart);
  const updateQty = (id: number, qty: number) => setCart(cart.map((item) => item.id === id ? { ...item, qty: Math.max(1, qty) } : item));
  const removeItem = (id: number) => setCart(cart.filter((item) => item.id !== id));
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <main>
      <Breadcrumb title="Your Cart" items={[{ label: "Home", href: "/" }, { label: "Cart" }]} />
      <div className="space-top space-extra-bottom">
        <div className="container">
          <div className="woocommerce-cart-form">
            <table className="cart_table woocommerce-cart-form__contents shop_table shop_table_responsive cart">
              <thead>
                <tr>
                  <th className="product-remove"></th>
                  <th className="product-thumbnail">Product</th>
                  <th className="product-name">Name</th>
                  <th className="product-price">Price</th>
                  <th className="product-quantity">Quantity</th>
                  <th className="product-subtotal">Total</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id} className="woocommerce-cart-form__cart-item cart_item">
                    <td className="product-remove"><button onClick={() => removeItem(item.id)} className="remove"><i className="fas fa-times"></i></button></td>
                    <td className="product-thumbnail" data-title="Product"><Link href="/shop-details"><Image src={item.img} alt={item.title} width={80} height={80} /></Link></td>
                    <td className="product-name" data-title="Name"><Link href="/shop-details">{item.title}</Link></td>
                    <td className="product-price" data-title="Price"><span className="woocommerce-Price-amount">${item.price.toFixed(2)}</span></td>
                    <td className="product-quantity" data-title="Quantity">
                      <div className="qty-input-wrap d-flex align-items-center gap-2">
                        <button className="quantity-minus" onClick={() => updateQty(item.id, item.qty - 1)}><i className="fas fa-minus"></i></button>
                        <input type="number" className="qty-input" value={item.qty} onChange={(e) => updateQty(item.id, parseInt(e.target.value) || 1)} min={1} />
                        <button className="quantity-plus" onClick={() => updateQty(item.id, item.qty + 1)}><i className="fas fa-plus"></i></button>
                      </div>
                    </td>
                    <td className="product-subtotal" data-title="Total"><span className="woocommerce-Price-amount">${(item.price * item.qty).toFixed(2)}</span></td>
                  </tr>
                ))}
                <tr>
                  <td colSpan={6} className="actions">
                    <div className="th-cart-coupon coupon"><input type="text" className="input-text" placeholder="Coupon code" /><button className="th-btn style-border" type="button">Apply Coupon</button></div>
                    <button className="th-btn" type="button">Update Cart</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="row justify-content-end mt-5">
            <div className="col-xl-4 col-lg-5">
              <div className="cart_totals">
                <h2 className="sec-title mb-4">Order Summary</h2>
                <table className="shop_table">
                  <tbody>
                    <tr className="cart-subtotal"><th>Subtotal</th><td><span className="woocommerce-Price-amount">${subtotal.toFixed(2)}</span></td></tr>
                    <tr className="shipping"><th>Delivery</th><td>Instant digital delivery</td></tr>
                    <tr className="order-total"><th>Total</th><td><strong><span className="woocommerce-Price-amount">${subtotal.toFixed(2)}</span></strong></td></tr>
                  </tbody>
                </table>
                <Link href="/checkout" className="th-btn w-100 mt-4 text-center">Proceed to Checkout</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
