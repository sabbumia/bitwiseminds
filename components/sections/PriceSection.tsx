import Link from "next/link";
import Image from "next/image";

const pricingCards = [
  {
    img: "/assets/img/pricing/pricing-1-1.jpg",
    mask: "/assets/img/shape/pricing-1-1_mask.jpg",
    title: "Website Design & Development",
    price: "From $999",
    text: "Responsive, SEO-optimised websites with modern design, CMS integration, and performance optimisation.",
    style: "",
  },
  {
    img: "/assets/img/pricing/pricing-1-2.jpg",
    mask: "/assets/img/shape/pricing-1-2_mask.jpg",
    title: "Custom Software Development",
    price: "From $4,999",
    text: "Tailored software solutions built to your exact specifications with full support and documentation.",
    style: "style-2",
  },
  {
    img: "/assets/img/pricing/pricing-1-3.jpg",
    mask: "/assets/img/shape/pricing-1-2_mask.jpg",
    title: "IT Support & Maintenance",
    price: "From $299/mo",
    text: "Ongoing IT support, server management, security monitoring, and priority bug fixing for your systems.",
    style: "style-2 mt-4",
  },
];

export default function PriceSection() {
  return (
    <section className="overflow-hidden bg-white space">
      <div className="why-bg-shape1-3 shape-mockup shake d-xxl-block d-none" style={{ top: "49%", left: "7%" }}>
        <Image src="/assets/img/shape/shape1-7.png" alt="" width={55} height={55} />
      </div>
      <div className="why-bg-shape1-6 shape-mockup shake d-xxl-block d-none" style={{ top: "26%", left: "6%" }}>
        <Image src="/assets/img/shape/shape1-5.png" alt="" width={55} height={55} />
      </div>
      <div className="why-bg-shape1-4 shape-mockup shake d-xxl-block d-none" style={{ top: "71%", left: "4%" }}>
        <Image src="/assets/img/shape/shape1-23.png" alt="" width={55} height={55} />
      </div>
      <div className="why-bg-shape1-2 shape-mockup heartbeat d-xxl-block d-none" style={{ top: "46%", right: "5%" }}>
        <Image src="/assets/img/shape/shape1-6.png" alt="" width={55} height={55} />
      </div>
      <div className="why-bg-shape1-2 shape-mockup moving d-xxl-block d-none" style={{ bottom: 0, left: "-1%" }}>
        <Image src="/assets/img/shape/shape1-24.png" alt="" width={150} height={150} />
      </div>

      <div className="container">
        <div className="title-area text-center">
          <span className="sub-title text-anim subtitle-line" data-cue="slideInUp">
            <Image className="me-2" src="/assets/img/icon/subtitle-icon.svg" alt="icon" width={20} height={20} />
            Pricing Guide
          </span>
          <h2 className="sec-title text-anim" data-cue="slideInUp">Our Service Packages</h2>
          <p className="fs-18 text-anim2" data-cue="slideInUp">
            Transparent pricing for every business size — no hidden fees, ever.
          </p>
        </div>

        <div className="row gy-30 justify-content-center">
          <div className="col-xl-6">
            <div className="pricing-card-grid" data-cue="slideInUp">
              <div
                className="pricing-1-bg_mask"
                data-mask-src={pricingCards[0].mask}
                style={{
                  maskImage: `url(${pricingCards[0].mask})`,
                  WebkitMaskImage: `url(${pricingCards[0].mask})`,
                }}
              ></div>
              <div className="thumb">
                <Image src={pricingCards[0].img} alt={pricingCards[0].title} width={300} height={220} />
              </div>
              <div className="content">
                <h3 className="box-title">{pricingCards[0].title}</h3>
                <p className="price">{pricingCards[0].price}</p>
                <p className="box-text">{pricingCards[0].text}</p>
              </div>
              <Link className="th-btn" href="/contact">Get a Quote</Link>
            </div>
          </div>

          <div className="col-xl-6">
            {pricingCards.slice(1).map((card, i) => (
              <div key={i} className={`pricing-card-grid ${card.style}`} data-cue="slideInUp">
                <div
                  className="pricing-1-bg_mask"
                  data-mask-src={card.mask}
                  style={{
                    maskImage: `url(${card.mask})`,
                    WebkitMaskImage: `url(${card.mask})`,
                  }}
                ></div>
                <div className="thumb">
                  <Image src={card.img} alt={card.title} width={300} height={160} />
                </div>
                <div className="content">
                  <h3 className="box-title">{card.title}</h3>
                  <p className="price">{card.price}</p>
                  <p className="box-text">{card.text}</p>
                </div>
                <Link className="th-btn" href="/contact">Get a Quote</Link>
              </div>
            ))}
          </div>
        </div>

        <div className="row justify-content-center mt-5">
          <div className="col-12 text-center" data-cue="slideInUp">
            <Link className="th-btn style-border3" href="/price">
              View All Packages{" "}
              <Image src="/assets/img/icon/arrow-right-black.svg" alt="arrow" width={18} height={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
