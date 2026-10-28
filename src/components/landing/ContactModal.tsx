"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useState,
  type ReactNode,
} from "react";
import { X } from "lucide-react";

type ContactContextValue = {
  openContact: () => void;
  closeContact: () => void;
};

const ContactContext = createContext<ContactContextValue | null>(null);

export function useContact() {
  const ctx = useContext(ContactContext);
  if (!ctx) {
    throw new Error("useContact must be used within ContactProvider");
  }
  return ctx;
}

export function ContactProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const titleId = useId();

  const openContact = useCallback(() => {
    setSent(false);
    setOpen(true);
  }, []);

  const closeContact = useCallback(() => {
    setOpen(false);
    setSent(false);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeContact();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, closeContact]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <ContactContext.Provider value={{ openContact, closeContact }}>
      {children}

      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <button
            type="button"
            aria-label="Close contact form"
            className="absolute inset-0 bg-zinc-950/50 backdrop-blur-sm"
            onClick={closeContact}
          />

          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative w-full max-w-md rounded-2xl bg-white shadow-2xl border border-slate-200 overflow-hidden"
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
              <div>
                <h2 id={titleId} className="text-lg font-semibold text-zinc-900 tracking-tight">
                  Contact Us
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Tell us about your ERP or automation needs.
                </p>
              </div>
              <button
                type="button"
                onClick={closeContact}
                aria-label="Close"
                className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500 transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {sent ? (
              <div className="px-5 py-10 text-center space-y-3">
                <div className="mx-auto w-10 h-10 rounded-full bg-orange-50 text-[#ff4500] flex items-center justify-center text-lg font-semibold">
                  ✓
                </div>
                <p className="text-sm font-medium text-zinc-900">Message ready to send</p>
                <p className="text-xs text-slate-500 max-w-xs mx-auto">
                  This is a demo form — no data is submitted yet.
                </p>
                <button
                  type="button"
                  onClick={closeContact}
                  className="mt-2 inline-flex px-5 py-2.5 rounded-full bg-[#ff4500] text-white text-sm font-medium hover:bg-[#e63e00] transition cursor-pointer"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="px-5 py-5 space-y-3.5">
                <Field label="Full name" name="name" placeholder="Jane Cooper" required />
                <Field label="Work email" name="email" type="email" placeholder="jane@company.com" required />
                <Field label="Company" name="company" placeholder="Acme Corp" />
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-medium text-zinc-700 mb-1.5">
                    How can we help?
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    placeholder="ERP rollout, AI automation, integrations..."
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2.5 text-sm text-zinc-800 placeholder:text-slate-400 outline-none focus:border-[#ff4500] focus:ring-1 focus:ring-[#ff4500] resize-none transition"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-1 px-5 py-3 rounded-full bg-[#ff4500] text-white text-sm font-medium hover:bg-[#e63e00] transition cursor-pointer"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </ContactContext.Provider>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  const id = `contact-${name}`;
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-medium text-zinc-700 mb-1.5">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2.5 text-sm text-zinc-800 placeholder:text-slate-400 outline-none focus:border-[#ff4500] focus:ring-1 focus:ring-[#ff4500] transition"
      />
    </div>
  );
}

export function ContactTrigger({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const { openContact } = useContact();
  return (
    <button type="button" onClick={openContact} className={className}>
      {children}
    </button>
  );
}
