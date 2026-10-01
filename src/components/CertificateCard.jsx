import { Award, ExternalLink, FileText, CheckCircle2 } from "lucide-react";

function CertificateCard({ certificate }) {
  const hasFile = Boolean(certificate.file);

  return (
    <article className="group flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-emerald-500/30 hover:bg-white/[0.04]">
      <div>
        {/* Card Header: Icon & Date */}
        <div className="flex items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 transition group-hover:scale-105">
            <Award size={24} />
          </div>

          <span className="rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1 text-xs font-semibold text-emerald-400">
            {certificate.date}
          </span>
        </div>

        {/* Certificate Document Thumbnail Preview */}
        <div className="mt-5 overflow-hidden rounded-xl border border-white/10 bg-black/40 p-4 transition group-hover:border-emerald-500/20">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
              <FileText size={20} />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-semibold text-white">
                {certificate.title}
              </p>
              <p className="text-[11px] text-gray-500">
                {hasFile ? "Official PDF Document Attached" : "Verified Academic Credential"}
              </p>
            </div>
            {hasFile && (
              <span className="shrink-0 rounded bg-emerald-500/10 px-1.5 py-0.5 text-[10px] font-mono text-emerald-400">
                PDF
              </span>
            )}
          </div>
        </div>

        {/* Category */}
        <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-emerald-400">
          {certificate.category || "Credential"}
        </p>

        {/* Title */}
        <h3 className="mt-2 text-lg font-bold text-white transition group-hover:text-emerald-300">
          {certificate.title}
        </h3>

        {/* Issuer / Organization */}
        <p className="mt-2 text-xs text-gray-400">
          Issued by:{" "}
          <strong className="text-gray-200">
            {certificate.organization || certificate.issuer}
          </strong>
        </p>

        {/* Description */}
        <p className="mt-3 text-xs leading-relaxed text-gray-400">
          {certificate.description}
        </p>
      </div>

      {/* View Certificate Action */}
      <div className="mt-6 border-t border-white/10 pt-4">
        {hasFile ? (
          <a
            href={certificate.file}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-emerald-300 transition duration-200 hover:bg-emerald-500 hover:text-black hover:border-emerald-400"
          >
            <span>View Certificate</span>
            <ExternalLink size={14} />
          </a>
        ) : (
          <div className="flex items-center justify-between py-2 text-xs text-gray-500">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={13} className="text-emerald-500" />
              Verified Credential
            </span>
            <span className="font-mono text-[11px]">Available on request</span>
          </div>
        )}
      </div>
    </article>
  );
}

export default CertificateCard;