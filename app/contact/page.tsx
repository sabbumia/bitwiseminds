"use client";
import { useState } from "react";
import Breadcrumb from "@/components/common/Breadcrumb";
import Image from "next/image";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", number: "", subject: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", number: "", subject: "", message: "" });
      } else setStatus("error");
    } catch { setStatus("error"); }
  };

  return (
    <main>
      <Breadcrumb title="Contact Us" items={[{ label: "Home", href: "/" }, { label: "Contact Us" }]} />

      <div className="space overflow-hidden bg-smoke2 contact-area-1 position-relative z-index-common" id="contact-sec">
        <div className="container">
          <div className="row gy-40 gx-40 justify-content-center">
            <div className="col-xl-5" data-cue="slideInUp">
              <div className="info-wrap style2">
                <div className="top">
                  <h4 className="box-title">Let&apos;s Build Something Great Together</h4>
                  <p className="box-text">Whether you have a project in mind or just want to explore how BitwiseMinds can help your business grow — we&apos;d love to hear from you.</p>
                </div>
                {[
                  { icon: "/assets/img/icon/con-call.svg", title: "Call Us", text: "+00-(120) 3456 789", href: "tel:+001203456789" },
                  { icon: "/assets/img/icon/con-email.svg", title: "Email Us", text: "hello@bitwiseminds.com", href: "mailto:hello@bitwiseminds.com" },
                  { icon: "/assets/img/icon/con-location.svg", title: "Visit Our Office", text: "42 Tech Avenue, Silicon District, New York", href: "#" },
                ].map((info, i) => (
                  <div key={i} className="info-box" data-cue="slideInUp">
                    <div className="box-icon">
                      <Image src={info.icon} alt={info.title} width={44} height={44} />
                    </div>
                    <div className="content">
                      <h4 className="box-title">{info.title}</h4>
                      <p className="box-text"><a href={info.href}>{info.text}</a></p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-xl-7">
              <div className="contact-form-v1">
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="row">
                    <div className="form-group col-md-6">
                      <input type="text" className="form-control" placeholder="Your full name*" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                    </div>
                    <div className="form-group col-md-6">
                      <input type="email" className="form-control" placeholder="Business email address*" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                    </div>
                    <div className="form-group col-md-6">
                      <input type="tel" className="form-control" placeholder="Phone number" value={formData.number} onChange={(e) => setFormData({ ...formData, number: e.target.value })} />
                    </div>
                    <div className="form-group col-md-6">
                      <select className="form-select" value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })}>
                        <option value="" disabled hidden>Select Service Needed*</option>
                        <option>Website Design &amp; Development</option>
                        <option>Custom Software Development</option>
                        <option>IT Support Services</option>
                        <option>Cloud Solutions</option>
                        <option>Business Automation</option>
                        <option>UI/UX Design</option>
                        <option>E-commerce Development</option>
                        <option>Technical Consulting</option>
                      </select>
                    </div>
                    <div className="form-group col-12">
                      <textarea className="form-control" rows={4} placeholder="Tell us about your project or requirements*" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required></textarea>
                    </div>
                    <div className="form-btn col-12">
                      <button className="th-btn style5" type="submit">Send Message</button>
                    </div>
                  </div>
                  {status === "success" && <p className="form-messages mt-3 success">Message sent! We&apos;ll be in touch within 24 hours.</p>}
                  {status === "error" && <p className="form-messages mt-3 error">Something went wrong. Please email us directly.</p>}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-bottom bg-smoke2 contact-page-v1">
        <div className="container">
          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14593.123456789!2d90.399452!3d23.875885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c4f3f8f0d123%3A0xabcd1234efgh5678!2sUttara%2C%20Dhaka%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1716000000000"
              allowFullScreen loading="lazy" style={{ width: "100%", height: "450px", border: 0 }}
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}
