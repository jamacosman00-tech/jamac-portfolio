import { useState } from "react";
import {
  Mail,
  MapPin,
  ExternalLink,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
} from "lucide-react";

// Easily configurable contact details
const CONTACT_INFO = {
  email: "jama.osman.dev@gmail.com", // Replace with your primary email
  location: "Somalia",
  github: "https://github.com/JamaOsman",
  linkedin: "https://linkedin.com/in/jama-osman",
};

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      errs.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      errs.message = "Please write a brief message.";
    } else if (formData.message.trim().length < 10) {
      errs.message = "Message should be at least 10 characters.";
    }

    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Valid frontend state reached
    setSubmitted(true);
    setErrors({});
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section
      id="contact"
      className="relative border-t border-emerald-500/10 px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
            Get In Touch
          </p>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Let's <span className="text-emerald-400">Connect</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-400 sm:text-lg">
            If you would like to connect, discuss technology, collaborate on a
            project, or learn more about my work, feel free to reach out.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-12">
          {/* Left Column: Direct Contact Information */}
          <div className="space-y-6 lg:col-span-5">
            <h3 className="text-xl font-bold text-white">
              Contact Information
            </h3>
            <p className="text-sm leading-relaxed text-gray-400">
              I am always open to discussing new opportunities, academic
              collaborations, software projects, and learning resources.
            </p>

            <div className="space-y-4 pt-2">
              {/* Email Card with Copy button */}
              <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] p-4 backdrop-blur-md transition hover:border-emerald-500/30">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Email Address</p>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="text-sm font-medium text-white transition hover:text-emerald-400"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="rounded-lg p-2 text-gray-400 transition hover:bg-white/5 hover:text-emerald-400"
                  aria-label="Copy email address"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <Check size={16} className="text-emerald-400" />
                  ) : (
                    <Copy size={16} />
                  )}
                </button>
              </div>

              {/* Location Card */}
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4 backdrop-blur-md">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Location</p>
                  <p className="text-sm font-medium text-white">
                    {CONTACT_INFO.location}
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={CONTACT_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] p-4 text-xs font-semibold text-gray-300 transition hover:border-emerald-500/30 hover:text-emerald-400"
                >
                  <span>GitHub</span>
                  <ExternalLink size={14} />
                </a>

                <a
                  href={CONTACT_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] p-4 text-xs font-semibold text-gray-300 transition hover:border-emerald-500/30 hover:text-emerald-400"
                >
                  <span>LinkedIn</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form with Frontend Validation */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 backdrop-blur-md lg:col-span-7">
            <h3 className="text-xl font-bold text-white mb-2">
              Send a Message
            </h3>
            <p className="text-xs text-gray-400 mb-6">
              Fill out the form below. Client-side validation ensures your
              details are formatted correctly.
            </p>

            {submitted ? (
              <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-center animate-in fade-in duration-300">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 mb-3">
                  <CheckCircle2 size={28} />
                </div>
                <h4 className="text-lg font-bold text-white">
                  Message Validated!
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-gray-300">
                  Thank you, <strong className="text-emerald-400">{formData.name}</strong>. Your message details are ready. Since this is a static frontend portfolio, you can also dispatch your inquiry directly to:
                </p>
                <div className="mt-4">
                  <a
                    href={`mailto:${CONTACT_INFO.email}?subject=Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}`}
                    className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-2.5 text-xs font-bold text-black transition hover:bg-emerald-400"
                  >
                    <Mail size={14} />
                    Open Email Client to Send Directly
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", message: "" });
                  }}
                  className="mt-4 block mx-auto text-xs text-gray-400 underline hover:text-white"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5"
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Ahmed Ali"
                    className={`w-full rounded-xl border bg-black/40 px-4 py-3 text-sm text-white placeholder-gray-500 transition focus:outline-none ${
                      errors.name
                        ? "border-red-500/60 focus:border-red-500"
                        : "border-white/10 focus:border-emerald-500/60"
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 flex items-center gap-1 text-xs text-red-400">
                      <AlertCircle size={12} />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5"
                  >
                    Your Email Address
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. you@example.com"
                    className={`w-full rounded-xl border bg-black/40 px-4 py-3 text-sm text-white placeholder-gray-500 transition focus:outline-none ${
                      errors.email
                        ? "border-red-500/60 focus:border-red-500"
                        : "border-white/10 focus:border-emerald-500/60"
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 flex items-center gap-1 text-xs text-red-400">
                      <AlertCircle size={12} />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message or inquiry here..."
                    className={`w-full resize-none rounded-xl border bg-black/40 px-4 py-3 text-sm text-white placeholder-gray-500 transition focus:outline-none ${
                      errors.message
                        ? "border-red-500/60 focus:border-red-500"
                        : "border-white/10 focus:border-emerald-500/60"
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 flex items-center gap-1 text-xs text-red-400">
                      <AlertCircle size={12} />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 text-sm font-bold text-black transition duration-200 hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/20 active:scale-[0.99]"
                >
                  <Send size={16} />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
