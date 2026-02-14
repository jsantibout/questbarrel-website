"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comments: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setFormData({ name: "", email: "", phone: "", comments: "" });
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Failed to send message");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="parchment paper-edge ornate-border rounded-lg p-8 max-w-md mx-auto">
      <h3 className="text-2xl font-bold mb-6 text-primary text-center">Get In Touch</h3>

      {status === "success" ? (
        <div className="text-center py-4">
          <p className="text-primary font-medium">Thank you for your message!</p>
          <p className="text-muted mt-2">We&apos;ll get back to you soon.</p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-4 text-accent-dark hover:text-primary underline"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
              Name <span className="text-primary">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded border-2 border-border bg-surface focus:border-primary focus:outline-none transition-colors"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
              Email <span className="text-primary">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded border-2 border-border bg-surface focus:border-primary focus:outline-none transition-colors"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">
              Phone <span className="text-muted">(optional)</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded border-2 border-border bg-surface focus:border-primary focus:outline-none transition-colors"
              placeholder="Your phone number"
            />
          </div>

          <div>
            <label htmlFor="comments" className="block text-sm font-medium text-foreground mb-1">
              Comments <span className="text-muted">(optional)</span>
            </label>
            <textarea
              id="comments"
              name="comments"
              rows={4}
              value={formData.comments}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded border-2 border-border bg-surface focus:border-primary focus:outline-none transition-colors resize-y"
              placeholder="Leave us a message!"
            />
          </div>

          {status === "error" && (
            <p className="text-red-600 text-sm">{errorMessage}</p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full border-2 border-primary hover:bg-primary hover:text-surface text-primary px-6 py-3 rounded font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>
        </form>
      )}
    </div>
  );
}
