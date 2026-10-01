import { Award, ShieldCheck } from "lucide-react";
import certificates from "../data/certificates";
import CertificateCard from "./CertificateCard";

function Certificates() {
  return (
    <section
      id="certificates"
      className="relative border-t border-emerald-500/10 px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
            Verified Credentials
          </p>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Certificates &amp; <span className="text-emerald-400">Training</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-400 sm:text-lg">
            Official secondary education credentials, web engineering training,
            and university technical workshops supporting my academic
            progression.
          </p>
        </div>

        {/* Counter & Info Note */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-400">
          <div className="flex items-center gap-2">
            <Award size={16} className="text-emerald-400" />
            <span>{certificates.length} credentials documented</span>
          </div>

          <div className="flex items-center gap-2 text-gray-500">
            <ShieldCheck size={14} className="text-emerald-400" />
            <span>PDF documents open directly in a new secure tab</span>
          </div>
        </div>

        {/* Certificates Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate) => (
            <CertificateCard
              key={certificate.id}
              certificate={certificate}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;