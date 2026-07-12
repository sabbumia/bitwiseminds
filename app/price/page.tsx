"use client";
import { useState } from "react";
import Breadcrumb from "@/components/common/Breadcrumb";
import Image from "next/image";
import Link from "next/link";

const plans = {
  monthly: [
    { title: "Starter Support", price: "$299", period: "/month", features: ["Up to 10 support tickets/month", "Business hours response (9am–6pm)", "Security monitoring", "Monthly performance report", "Email support"], popular: false },
    { title: "Business Pro", price: "$699", period: "/month", features: ["Unlimited support tickets", "Priority 4-hour response time", "24/7 security monitoring", "Weekly performance reports", "Dedicated account manager", "Phone & live chat support"], popular: true },
    { title: "Enterprise", price: "$1,499", period: "/month", features: ["Unlimited support tickets", "1-hour critical response SLA", "Proactive threat monitoring", "Custom reporting dashboard", "On-site support available", "DevOps & infrastructure management"], popular: false },
  ],
  yearly: [
    { title: "Starter Support", price: "$2,699", period: "/year", features: ["Up to 10 support tickets/month", "Business hours response (9am–6pm)", "Security monitoring", "Monthly performance report", "Email support"], popular: false },
    { title: "Business Pro", price: "$5,999", period: "/year", features: ["Unlimited support tickets", "Priority 4-hour response time", "24/7 security monitoring", "Weekly performance reports", "Dedicated account manager", "Phone & live chat support"], popular: true },
    { title: "Enterprise", price: "$12,999", period: "/year", features: ["Unlimited support tickets", "1-hour critical response SLA", "Proactive threat monitoring", "Custom reporting dashboard", "On-site support available", "DevOps & infrastructure management"], popular: false },
  ],
};

export default function PricePage() {
  const [tab, setTab] = useState<"monthly" | "yearly">("monthly");
  const currentPlans = plans[tab];

  return (
    <main>
      <Breadcrumb title="Pricing Plans" items={[{ label: "Home", href: "/" }, { label: "Pricing Plans" }]} />
      <section className="space bg-smoke2 overflow-hidden pricing-tabs">
        <div className="container">
          <div className="title-area text-center">
            <span className="sub-title text-anim subtitle-line" data-cue="slideInUp">
              <Image className="me-2" src="/assets/img/icon/subtitle-icon.svg" alt="icon" width={20} height={20} />
              Pricing Plans
            </span>
            <h2 className="sec-title text-anim" data-cue="slideInUp">IT Support Packages</h2>
            <p className="fs-18 text-anim2" data-cue="slideInUp">Transparent, flexible pricing for every business size — no hidden fees</p>
          </div>
          <div className="pricing-toggler text-center mb-40">
            <span id="filt-monthly" className={"toggler" + (tab === "monthly" ? " toggler--is-active" : "")} onClick={() => setTab("monthly")} style={{ cursor: "pointer" }}>Monthly</span>
            <label className="switch mx-3">
              <input type="checkbox" id="switcher" checked={tab === "yearly"} onChange={(e) => setTab(e.target.checked ? "yearly" : "monthly")} />
              <span className="slider round"></span>
            </label>
            <span id="filt-yearly" className={"toggler" + (tab === "yearly" ? " toggler--is-active" : "")} onClick={() => setTab("yearly")} style={{ cursor: "pointer" }}>Yearly <span className="save-badge">Save 25%</span></span>
          </div>
          <div className="row gy-30 justify-content-center">
            {currentPlans.map((plan, i) => (
              <div key={i} className="col-xl-4 col-md-6" data-cue="slideInUp">
                <div className={"pricing-card" + (plan.popular ? " active" : "")}>
                  {plan.popular && <span className="popular-badge">Most Popular</span>}
                  <div className="pricing-header">
                    <h3 className="box-title">{plan.title}</h3>
                    <div className="price-wrap">
                      <span className="price">{plan.price}</span>
                      <span className="period">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="pricing-list">
                    {plan.features.map((f, j) => <li key={j}><i className="fas fa-check"></i> {f}</li>)}
                  </ul>
                  <Link href="/contact" className={"th-btn" + (plan.popular ? "" : " style-border3")}>Get Started</Link>
                </div>
              </div>
            ))}
          </div>
          <div className="row justify-content-center mt-5">
            <div className="col-12 text-center" data-cue="slideInUp">
              <p className="fs-18">Need a custom solution? <Link href="/contact" className="text-theme fw-semibold">Contact us for a tailored quote →</Link></p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
