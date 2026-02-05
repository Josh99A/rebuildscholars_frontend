"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Please enter a valid email."),
  subject: z.string().min(2, "Please add a subject."),
  message: z.string().min(10, "Please add a message."),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitted(false);
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log("Contact form", data);
    reset();
    setSubmitted(true);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="contact-name" className="text-sm font-semibold">
            Full Name
          </label>
          <input
            {...register("name")}
            type="text"
            id="contact-name"
            className={cn(
              "w-full rounded-xl border border-[var(--border)] bg-transparent px-4 py-3 text-sm",
              errors.name && "border-red-500"
            )}
            placeholder="Jordan Miles"
          />
          {errors.name && (
            <p className="text-xs text-red-500">{errors.name.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <label htmlFor="contact-email" className="text-sm font-semibold">
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            id="contact-email"
            className={cn(
              "w-full rounded-xl border border-[var(--border)] bg-transparent px-4 py-3 text-sm",
              errors.email && "border-red-500"
            )}
            placeholder="jordan@email.com"
          />
          {errors.email && (
            <p className="text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="contact-subject" className="text-sm font-semibold">
          Subject
        </label>
        <input
          {...register("subject")}
          type="text"
          id="contact-subject"
          className={cn(
            "w-full rounded-xl border border-[var(--border)] bg-transparent px-4 py-3 text-sm",
            errors.subject && "border-red-500"
          )}
          placeholder="How can we help?"
        />
        {errors.subject && (
          <p className="text-xs text-red-500">{errors.subject.message}</p>
        )}
      </div>
      <div className="space-y-2">
        <label htmlFor="contact-message" className="text-sm font-semibold">
          Message
        </label>
        <textarea
          {...register("message")}
          rows={5}
          id="contact-message"
          className={cn(
            "w-full rounded-xl border border-[var(--border)] bg-transparent px-4 py-3 text-sm",
            errors.message && "border-red-500"
          )}
          placeholder="Tell us more about your goals."
        />
        {errors.message && (
          <p className="text-xs text-red-500">{errors.message.message}</p>
        )}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center justify-center rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-[var(--on-primary)] transition hover:bg-[var(--primary-hover)] disabled:opacity-70"
      >
        {isSubmitting ? "Sending..." : "Send message"}
      </button>
      {submitted && (
        <p className="text-sm text-[var(--muted)]">
          Thanks for reaching out. We will be in touch shortly.
        </p>
      )}
    </form>
  );
}

