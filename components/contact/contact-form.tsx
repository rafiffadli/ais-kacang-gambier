"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, ContactFormData } from "@/lib/validations/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Toast } from "@/components/ui/toast";
import { Send, CheckCircle2, AlertCircle, Users, Calendar } from "lucide-react";

export function ContactForm() {
  const [toast, setToast] = React.useState<{
    type: "success" | "error";
    title: string;
    message: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      inquiryType: "general",
      estimatedGuests: "",
      eventDate: "",
      message: "",
    },
  });

  const selectedInquiryType = watch("inquiryType");
  const isCateringOrGroup =
    selectedInquiryType === "catering" || selectedInquiryType === "group_visit";

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate asynchronous API processing
      await new Promise((resolve) => setTimeout(resolve, 900));

      setToast({
        type: "success",
        title: "Inquiry Sent Successfully!",
        message: `Terima kasih ${data.fullName}! Our team at IG Ais Kacang Gambier will contact you within 24 hours.`,
      });

      reset();
    } catch (error) {
      setToast({
        type: "error",
        title: "Submission Error",
        message: "Something went wrong sending your message. Please reach out via WhatsApp.",
      });
    }
  };

  return (
    <div className="relative rounded-3xl bg-white p-6 sm:p-10 shadow-xl border border-amber-900/10">
      {toast && (
        <Toast
          type={toast.type}
          title={toast.title}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}

      <div className="space-y-2 mb-8">
        <h3 className="font-serif text-2xl font-bold text-stone-900">
          Send Us an Inquiry
        </h3>
        <p className="text-xs sm:text-sm text-stone-700">
          Whether you&apos;re planning a group dessert trip, asking about catering,
          or inquiring about pure Gula Apong, we&apos;d love to hear from you.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
        {/* Full Name */}
        <div className="space-y-1.5">
          <label
            htmlFor="fullName"
            className="block text-xs font-semibold text-stone-800 uppercase tracking-wider"
          >
            Full Name <span className="text-rose-600">*</span>
          </label>
          <Input
            id="fullName"
            hasError={Boolean(errors.fullName)}
            {...register("fullName")}
          />
          {errors.fullName && (
            <p className="text-xs text-rose-600 flex items-center gap-1">
              <AlertCircle className="h-3.5 w-3.5" />
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* Email & Phone Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label
              htmlFor="email"
              className="block text-xs font-semibold text-stone-800 uppercase tracking-wider"
            >
              Email Address <span className="text-rose-600">*</span>
            </label>
            <Input
              id="email"
              type="email"
              hasError={Boolean(errors.email)}
              {...register("email")}
            />
            {errors.email && (
              <p className="text-xs text-rose-600 flex items-center gap-1">
                <AlertCircle className="h-3.5 w-3.5" />
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="phone"
              className="block text-xs font-semibold text-stone-800 uppercase tracking-wider"
            >
              Phone / WhatsApp <span className="text-rose-600">*</span>
            </label>
            <Input
              id="phone"
              type="tel"
              hasError={Boolean(errors.phone)}
              {...register("phone")}
            />
            {errors.phone && (
              <p className="text-xs text-rose-600 flex items-center gap-1">
                <AlertCircle className="h-3.5 w-3.5" />
                {errors.phone.message}
              </p>
            )}
          </div>
        </div>

        {/* Inquiry Type */}
        <div className="space-y-1.5">
          <label
            htmlFor="inquiryType"
            className="block text-xs font-semibold text-stone-800 uppercase tracking-wider"
          >
            Inquiry Category <span className="text-rose-600">*</span>
          </label>
          <select
            id="inquiryType"
            className="flex h-11 w-full rounded-xl border border-stone-300 bg-white px-3.5 py-2 text-sm text-stone-900 shadow-xs transition-colors focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
            {...register("inquiryType")}
          >
            <option value="general">General Visit & Dessert Questions</option>
            <option value="catering">Event Catering & Dessert Live Stations</option>
            <option value="group_visit">Group Reservation / Tour Group</option>
            <option value="bulk_gula_apong">Wholesale Pure Gula Apong Syrup</option>
            <option value="feedback">Guest Feedback & Experience</option>
          </select>
          {errors.inquiryType && (
            <p className="text-xs text-rose-600 flex items-center gap-1">
              <AlertCircle className="h-3.5 w-3.5" />
              {errors.inquiryType.message}
            </p>
          )}
        </div>

        {/* Dynamic Fields for Catering/Group Reservation */}
        {isCateringOrGroup && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-amber-50/70 border border-amber-200/70 animate-in fade-in duration-200">
            <div className="space-y-1.5">
              <label
                htmlFor="estimatedGuests"
                className="block text-xs font-semibold text-amber-950 flex items-center gap-1.5"
              >
                <Users className="h-3.5 w-3.5 text-amber-700" />
                Estimated Guests / Pax
              </label>
              <Input
                id="estimatedGuests"
                {...register("estimatedGuests")}
              />
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="eventDate"
                className="block text-xs font-semibold text-amber-950 flex items-center gap-1.5"
              >
                <Calendar className="h-3.5 w-3.5 text-amber-700" />
                Preferred Date
              </label>
              <Input
                id="eventDate"
                type="date"
                {...register("eventDate")}
              />
            </div>
          </div>
        )}

        {/* Message */}
        <div className="space-y-1.5">
          <label
            htmlFor="message"
            className="block text-xs font-semibold text-stone-800 uppercase tracking-wider"
          >
            Your Message <span className="text-rose-600">*</span>
          </label>
          <Textarea
            id="message"
            rows={4}
            hasError={Boolean(errors.message)}
            {...register("message")}
          />
          {errors.message && (
            <p className="text-xs text-rose-600 flex items-center gap-1">
              <AlertCircle className="h-3.5 w-3.5" />
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          size="lg"
          isLoading={isSubmitting}
          className="w-full justify-center gap-2 shadow-md"
        >
          <Send className="h-4 w-4" />
          <span>Submit Inquiry</span>
        </Button>

        <p className="text-[11px] text-stone-700 text-center">
          We respect your privacy. Inquiries are handled directly by our Jalan Gambier management.
        </p>
      </form>
    </div>
  );
}
