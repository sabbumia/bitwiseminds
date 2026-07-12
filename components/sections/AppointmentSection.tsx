"use client";
import { useState } from "react";
import Image from "next/image";
import { todayISO } from "@/lib/dates";

export default function AppointmentSection() {
  const [formData, setFormData] = useState(() => ({
    name: "",
    email: "",
    company: "",
    subject: "",
    date: todayISO(),
  }));
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
        setFormData({ name: "", email: "", company: "", subject: "", date: todayISO() });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="space overflow-hidden bg-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-xl-7 col-xxl-6">
            <div className="title-area">
              <span className="sub-title text-anim subtitle-line" data-cue="slideInUp">
                <Image className="me-2" src="/assets/img/icon/subtitle-icon.svg" alt="icon" width={20} height={20} />
                Book a Free Session
              </span>
              <h2 className="sec-title text-anim" data-cue="slideInUp">Book a Free Consultation</h2>
              <p className="fs-18 text-anim2 pe-xl-4" data-cue="slideInUp">
                Tell us about your project and get expert advice — no commitment, no cost. Our team will get
                back to you within 24 hours.
              </p>
            </div>
          </div>
        </div>

        <div className="row gy-40 align-items-center flex-row-reverse">
          <div className="col-xl-7">
            <form onSubmit={handleSubmit} className="appointment-form">
              {/* Quick service icons */}
              <div className="appointment-icon-wrap">
                {[
                  { icon: "/assets/img/icon/appointment-icon-1-1.svg", title: "Web Development" },
                  { icon: "/assets/img/icon/appointment-icon-1-2.svg", title: "Custom Software" },
                  { icon: "/assets/img/icon/appointment-icon-1-3.svg", title: "IT Consulting" },
                ].map((item, i) => (
                  <div key={i} className="appointment-icon-item" data-cue="slideInUp">
                    <div className="thumb">
                      <Image src={item.icon} alt={item.title} width={50} height={50} />
                    </div>
                    <div className="box-title">{item.title}</div>
                  </div>
                ))}
              </div>

              <div className="row">
                <div className="form-group style-border col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Your full name*"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group style-border col-md-6">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Business email address*"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group style-border col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    name="company"
                    placeholder="Company / Organisation name*"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>
                <div className="form-group col-md-6 style-border3">
                  <select
                    name="subject"
                    className="form-select"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  >
                    <option value="" disabled hidden>Select service needed*</option>
                    <option value="Website Design & Development">Website Design &amp; Development</option>
                    <option value="Custom Software Development">Custom Software Development</option>
                    <option value="IT Support Services">IT Support Services</option>
                    <option value="Cloud Solutions">Cloud Solutions</option>
                    <option value="Business Automation">Business Automation</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Technical Consulting">Technical Consulting</option>
                  </select>
                  <i className="fal fa-chevron-down"></i>
                </div>
                <div className="form-group style-border col-md-12">
                  <input
                    type="date"
                    className="form-control"
                    name="date"
                    value={formData.date}
                    min={todayISO()}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  />
                </div>
                <div className="form-btn col-12">
                  <button className="th-btn" type="submit">Book Free Consultation</button>
                </div>
              </div>

              {status === "success" && (
                <p className="form-messages mt-3 success">
                  Your consultation request has been submitted! We&apos;ll be in touch within 24 hours.
                </p>
              )}
              {status === "error" && (
                <p className="form-messages mt-3 error">
                  Something went wrong. Please try again or email us directly.
                </p>
              )}
            </form>
          </div>

          <div className="col-xl-5">
            <div className="appointment-thumb-1-1 pe-xl-5 me-xl-3" data-cue="slideInUp">
              <Image src="/assets/img/appointment/appointment-support-team.jpg" alt="Book a consultation" width={420} height={500} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
