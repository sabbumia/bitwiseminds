import Image from "next/image";

const processItems = [
  {
    num: "01",
    title: "Free Discovery Consultation",
    text: "We start by understanding your business goals, challenges, and technical requirements in a no-obligation strategy session with our senior consultants.",
  },
  {
    num: "02",
    title: "Solution Planning & Design",
    text: "Our architects and designers create a tailored technology roadmap, wireframes, and a clear project plan aligned with your budget and timeline.",
  },
  {
    num: "03",
    title: "Development, Testing & Deployment",
    text: "We build your solution using agile sprints, rigorously test for quality and security, then deploy to production with zero downtime and full handover.",
  },
];

export default function ProcessSection() {
  return (
    <section
      className="position-relative bg-white overflow-hidden space"
      data-bg-src="/assets/img/bg/process-bg-1-1.png"
      style={{ backgroundImage: "url(/assets/img/bg/process-bg-1-1.png)" }}
    >
      <div className="why-bg-shape1-2 shape-mockup moving d-xxl-block d-none" style={{ bottom: "1%", left: "-1%" }}>
        <Image src="/assets/img/shape/shape1-25.png" alt="" width={120} height={120} />
      </div>
      <div className="why-bg-shape1-2 shape-mockup jump d-xxl-block d-none" style={{ bottom: 0, right: "1%" }}>
        <Image src="/assets/img/shape/shape1-26.png" alt="" width={120} height={120} />
      </div>

      <div className="container">
        <div className="title-area text-center">
          <span className="sub-title text-anim subtitle-line" data-cue="slideInUp">
            <Image className="me-2" src="/assets/img/icon/subtitle-icon.svg" alt="icon" width={20} height={20} />
            How We Work
          </span>
          <h2 className="sec-title text-anim" data-cue="slideInUp">Our Simple 3-Step Process</h2>
          <p className="fs-18 text-anim2" data-cue="slideInUp">
            From idea to launch — we make technology adoption simple and stress-free
          </p>
        </div>

        <div className="row gy-40">
          <div className="col-xl-6">
            <div className="process-slide-image">
              <div
                className="img background-img"
                data-bg-src="/assets/img/process/process_1_1.png"
                style={{ backgroundImage: "url(/assets/img/process/process_1_1.png)" }}
              ></div>
              <div
                className="img foreground-img"
                data-bg-src="/assets/img/process/process_1_2.png"
                style={{ backgroundImage: "url(/assets/img/process/process_1_2.png)" }}
              ></div>
              <input
                type="range"
                min="1"
                max="100"
                defaultValue="50"
                className="slider"
                name="slider"
                id="slider"
              />
              <div className="slider-button"></div>
            </div>
          </div>

          <div className="col-xl-6">
            {processItems.map((item, i) => (
              <div key={i} className="process-card" data-cue="slideInUp">
                <div
                  className="process-bg-mask"
                  data-mask-src="/assets/img/shape/process_card_mask1_1.jpg"
                  style={{
                    maskImage: "url(/assets/img/shape/process_card_mask1_1.jpg)",
                    WebkitMaskImage: "url(/assets/img/shape/process_card_mask1_1.jpg)",
                  }}
                ></div>
                <div className="box-icon">
                  <Image src="/assets/img/icon/checkmark2.svg" alt="" width={40} height={40} />
                </div>
                <div className="box-content">
                  <h4 className="box-title">{item.title}</h4>
                  <p className="box-text">{item.text}</p>
                </div>
                <div className="box-number">{item.num}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
