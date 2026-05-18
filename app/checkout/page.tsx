"use client";
import { useState } from "react";
import Breadcrumb from "@/components/common/Breadcrumb";

export default function CheckoutPage() {
  const [shipDifferent, setShipDifferent] = useState(false);
  const [payment, setPayment] = useState("direct-bank-transfer");

  return (
    <main>
      <Breadcrumb title="Checkout" items={[{ label: "Home", href: "/" }, { label: "Checkout" }]} />
      <div className="space-top space-extra-bottom">
        <div className="container">
          <div className="woocommerce">
            <div className="woocommerce-form-login-toggle">
              <div className="woocommerce-info">Returning customer? <a href="#" className="showlogin">Click here to login</a></div>
            </div>
            <div className="woocommerce-form-coupon-toggle">
              <div className="woocommerce-info">Have a coupon? <a href="#" className="showcoupon">Click here to enter your code</a></div>
            </div>
            <form className="checkout woocommerce-checkout">
              <div className="row">
                <div className="col-lg-7">
                  <div className="woocommerce-billing-fields">
                    <h3>Billing details</h3>
                    <div className="row">
                      <div className="form-group col-md-6"><label>First name <abbr>*</abbr></label><input type="text" className="form-control" /></div>
                      <div className="form-group col-md-6"><label>Last name <abbr>*</abbr></label><input type="text" className="form-control" /></div>
                      <div className="form-group col-12"><label>Company name (optional)</label><input type="text" className="form-control" /></div>
                      <div className="form-group col-12"><label>Country / Region <abbr>*</abbr></label><select className="form-select"><option>United States</option><option>United Kingdom</option><option>Australia</option></select></div>
                      <div className="form-group col-12"><label>Street address <abbr>*</abbr></label><input type="text" className="form-control mb-2" placeholder="House number and street name" /><input type="text" className="form-control" placeholder="Apartment, suite, unit, etc." /></div>
                      <div className="form-group col-12"><label>Town / City <abbr>*</abbr></label><input type="text" className="form-control" /></div>
                      <div className="form-group col-md-6"><label>State <abbr>*</abbr></label><input type="text" className="form-control" /></div>
                      <div className="form-group col-md-6"><label>Postcode / ZIP <abbr>*</abbr></label><input type="text" className="form-control" /></div>
                      <div className="form-group col-md-6"><label>Phone <abbr>*</abbr></label><input type="tel" className="form-control" /></div>
                      <div className="form-group col-md-6"><label>Email address <abbr>*</abbr></label><input type="email" className="form-control" /></div>
                      <div className="form-group col-12">
                        <div className="form-check">
                          <input id="ship-to-different-address-checkbox" type="checkbox" className="form-check-input" checked={shipDifferent} onChange={(e) => setShipDifferent(e.target.checked)} />
                          <label htmlFor="ship-to-different-address-checkbox" className="form-check-label">Ship to a different address?</label>
                        </div>
                      </div>
                      {shipDifferent && (
                        <div className="col-12 mt-3">
                          <div className="row">
                            <div className="form-group col-md-6"><label>First name <abbr>*</abbr></label><input type="text" className="form-control" /></div>
                            <div className="form-group col-md-6"><label>Last name <abbr>*</abbr></label><input type="text" className="form-control" /></div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="form-group col-12 mt-3"><label>Order notes (optional)</label><textarea className="form-control" rows={4} placeholder="Notes about your order..."></textarea></div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="woocommerce-checkout-review-order">
                    <h3>Your order</h3>
                    <table className="shop_table woocommerce-checkout-review-order-table">
                      <thead><tr><th className="product-name">Product</th><th className="product-total">Subtotal</th></tr></thead>
                      <tbody>
                        <tr className="cart_item"><td>Business Website Starter Pack <strong className="product-quantity"> × 1</strong></td><td>$299.00</td></tr>
                        <tr className="cart_item"><td>E-commerce Launch Bundle <strong className="product-quantity"> × 1</strong></td><td>$599.00</td></tr>
                      </tbody>
                      <tfoot>
                        <tr className="cart-subtotal"><th>Subtotal</th><td>$898.00</td></tr>
                        <tr className="shipping"><th>Delivery</th><td>Instant digital delivery</td></tr>
                        <tr className="order-total"><th>Total</th><td><strong>$898.00</strong></td></tr>
                      </tfoot>
                    </table>
                    <div id="payment" className="woocommerce-checkout-payment">
                      <ul className="wc_payment_methods payment_methods methods">
                        {[
                          { value: "direct-bank-transfer", label: "Direct bank transfer" },
                          { value: "check-payments", label: "Check payments" },
                          { value: "cash-on-delivery", label: "Cash on delivery" },
                        ].map((method) => (
                          <li key={method.value} className="wc_payment_method">
                            <input id={method.value} type="radio" name="payment_method" value={method.value} checked={payment === method.value} onChange={() => setPayment(method.value)} />
                            <label htmlFor={method.value}>{method.label}</label>
                            {payment === method.value && <div className="payment_box"><p>Make your payment directly into our bank account. Use your Order ID as the payment reference.</p></div>}
                          </li>
                        ))}
                      </ul>
                      <div className="form-row place-order"><button type="submit" className="th-btn w-100">Place order</button></div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
