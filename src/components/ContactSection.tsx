import { useState } from "react";
import { Send, MapPin, Phone, Mail } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { toast } from "sonner";

const ContactSection = () => {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const htmlMessage = `...your template...`;
    formData.append("html", htmlMessage);
    formData.append("_subject", "🚀 New Project Inquiry");
    formData.append("_replyto", formData.get("email") as string);
    formData.set("message", htmlMessage);
    
    try {
      const response = await fetch("https://formspree.io/f/mgvyjbgd", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        toast.success("Message sent! We'll get back to you soon.", {
          style: {
            background: "#16a34a",
            color: "#fff",
            border: "none",
          },
        });
        form.reset();
      } else {
        toast.error("❌ Something went wrong. Please try again.");
      }
    } catch {
      toast.error("⚠️ Network error. Please try again.");
    }

    setSubmitting(false);
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="section-container">

        {/* HEADER with Animation */}
        <AnimatedSection className="max-w-3xl mb-16">
          <p className="font-mono text-accent text-sm tracking-widest uppercase mb-3">
            Contact Us
          </p>

          <h2 className="section-title mb-6">
            Start Your Project
          </h2>

          <p className="section-subtitle">
            Share your project requirements and our engineering team will
            respond within 24 hours.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-12">

          {/* FORM */}
          <AnimatedSection className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="grid md:grid-cols-2 gap-5"
            >

              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Name *
                </label>
                <input
                  name="name"
                  required
                  maxLength={100}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:ring-2 focus:ring-accent/50 focus:border-accent outline-none transition"
                  placeholder="Your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  maxLength={255}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:ring-2 focus:ring-accent/50 focus:border-accent outline-none transition"
                  placeholder="your@email.com"
                />
              </div>

              {/* Company */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Company
                </label>
                <input
                  name="company"
                  maxLength={100}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:ring-2 focus:ring-accent/50 focus:border-accent outline-none transition"
                  placeholder="Company name"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Phone
                </label>
                <input
                  name="phone"
                  maxLength={20}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:ring-2 focus:ring-accent/50 focus:border-accent outline-none transition"
                  placeholder="+91 996 418 2464"
                />
              </div>

              {/* Details */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Project Details *
                </label>
                <textarea
                  name="details"
                  required
                  maxLength={2000}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:ring-2 focus:ring-accent/50 focus:border-accent outline-none transition resize-none"
                  placeholder="Describe your project requirements..."
                />
              </div>

              {/* Submit */}
              <div className="md:col-span-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary flex items-center justify-center disabled:opacity-50"
                >
                  {submitting ? "Sending..." : "Submit Inquiry"}
                  <Send className="ml-2 w-4 h-4" />
                </button>
              </div>

            </form>
          </AnimatedSection>

          {/* CONTACT INFO */}
          <AnimatedSection delay={0.2}>
            <div className="space-y-8">

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-sm">Office</h4>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Mysuru,+Karnataka+570001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary text-sm hover:text-accent transition-colors"
                  >
                    Mysuru, Karnataka 570001
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-sm">Phone</h4>
                  <a
                    href="tel:+919964182464"
                    className="text-secondary text-sm hover:text-accent transition-colors"
                  >
                    +91 996 418 2464
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-sm">Email</h4>
                  <a
                    href="mailto:info@iktangience.com"
                    className="text-secondary text-sm hover:text-accent transition-colors"
                  >
                    info@iktangience.com
                  </a>
                </div>
              </div>

            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;