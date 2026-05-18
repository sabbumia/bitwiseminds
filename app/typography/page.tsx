import type { Metadata } from "next";
import Breadcrumb from "@/components/common/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = { title: "Typography - BitwiseMinds IT Solutions" };

export default function TypographyPage() {
  return (
    <main>
      <Breadcrumb title="Typography" items={[{ label: "Home", href: "/" }, { label: "Typography" }]} />
      <section className="space bg-smoke2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Heading H1 — BitwiseMinds IT Solutions</h1>
              <h2>Heading H2 — Custom Software Development</h2>
              <h3>Heading H3 — Cloud & Infrastructure</h3>
              <h4>Heading H4 — IT Support Services</h4>
              <h5>Heading H5 — Business Automation</h5>
              <h6>Heading H6 — Technical Consulting</h6>
              <hr />
              <p className="fs-18">BitwiseMinds has been building innovative software and delivering reliable IT solutions for over 12 years. To us, your business isn&apos;t just a client — it&apos;s a long-term partnership.</p>
              <p>Our team of 60+ expert developers, designers, and strategists works with businesses of all sizes to deliver technology that drives measurable results.</p>
              <hr />
              <div className="mb-4">
                <Link href="/contact" className="th-btn me-3">Primary Button</Link>
                <Link href="/contact" className="th-btn style-border me-3">Border Button</Link>
                <Link href="/service" className="th-btn style-border3">Outline Button</Link>
              </div>
              <hr />
              <div className="checklist mb-4">
                <ul>
                  <li>Full-stack web and software development</li>
                  <li>Cloud solutions across AWS, Azure &amp; GCP</li>
                  <li>24/7 managed IT support</li>
                  <li>Business process automation</li>
                </ul>
              </div>
              <hr />
              <blockquote>
                <p>&quot;Software is not just a tool — it&apos;s the engine of modern business.&quot;</p>
                <cite>Alex Morrison, CTO — BitwiseMinds</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
