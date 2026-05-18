import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = { title: "404 - Page Not Found | BitwiseMinds IT Solutions" };

export default function ErrorPage() {
  return (
    <main>
      <div className="error-area space text-center bg-smoke2">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8">
              <div className="error-content" data-cue="slideInUp">
                <div className="error-img mb-5">
                  <Image src="/assets/img/normal/error-img.png" alt="404 Error" width={500} height={350} />
                </div>
                <h2 className="sec-title mb-3">Oops! Page Not Found</h2>
                <p className="fs-18 mb-4">The page you&apos;re looking for doesn&apos;t exist or may have been moved.</p>
                <div className="btn-wrap justify-content-center">
                  <Link href="/" className="th-btn">Back to Home</Link>
                  <Link href="/contact" className="th-btn style-border">Contact Support</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
