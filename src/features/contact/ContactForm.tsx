import React, { useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { FiSend, FiCheckCircle, FiXCircle } from "react-icons/fi";
import { ImSpinner8 } from "react-icons/im";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ mode: "onTouched" });

  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleFormSubmit: SubmitHandler<FormData> = async (formData) => {
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to send email");
      }

      setStatus({ type: "success", message: "Message sent successfully!" });
      reset();
    } catch (err) {
      console.error("Form submission error:", err);
      const errorMessage = err instanceof Error ? err.message : "Failed to send message";
      setStatus({ type: "error", message: errorMessage });
    }
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
        {status && (
          <div
            role="alert"
            className={`p-4 rounded-md flex items-start gap-3 ${
              status.type === "success"
                ? "bg-green-50 text-green-700"
                : "bg-red-50 text-red-700"
            }`}
          >
            {status.type === "success" ? (
              <FiCheckCircle className="shrink-0 mt-0.5" />
            ) : (
              <FiXCircle className="shrink-0 mt-0.5" />
            )}
            <p className="text-sm">{status.message}</p>
          </div>
        )}

        <div className="space-y-5">
          <Controller
            name="name"
            control={control}
            rules={{ required: "Name is required" }}
            render={({ field }) => (
              <div className="space-y-1">
                <label htmlFor="name" className="text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  {...field}
                  id="name"
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 ${
                    errors.name
                      ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:border-gray-500 focus:ring-gray-500"
                  }`}
                  aria-invalid={!!errors.name}
                />
                {errors.name && (
                  <p role="alert" className="text-sm text-red-600">
                    {errors.name.message}
                  </p>
                )}
              </div>
            )}
          />

          <Controller
            name="email"
            control={control}
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            }}
            render={({ field }) => (
              <div className="space-y-1">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  {...field}
                  id="email"
                  type="email"
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 ${
                    errors.email
                      ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:border-gray-500 focus:ring-gray-500"
                  }`}
                  aria-invalid={!!errors.email}
                />
                {errors.email && (
                  <p role="alert" className="text-sm text-red-600">
                    {errors.email.message}
                  </p>
                )}
              </div>
            )}
          />

          <Controller
            name="message"
            control={control}
            rules={{ required: "Message is required" }}
            render={({ field }) => (
              <div className="space-y-1">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  {...field}
                  id="message"
                  rows={4}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 ${
                    errors.message
                      ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:border-gray-500 focus:ring-gray-500"
                  }`}
                  aria-invalid={!!errors.message}
                />
                {errors.message && (
                  <p role="alert" className="text-sm text-red-600">
                    {errors.message.message}
                  </p>
                )}
              </div>
            )}
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gray-800 text-white py-2.5 px-4 rounded-md hover:bg-gray-700 
                     disabled:bg-gray-400 flex items-center justify-center gap-2 transition-colors
                     focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            {isSubmitting ? (
              <>
                <ImSpinner8 className="animate-spin" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <FiSend className="shrink-0" />
                <span>Send Message</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;