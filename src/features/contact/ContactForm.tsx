'use client';
import React, { useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { FiUser, FiMail, FiPhone, FiMessageSquare, FiArrowRight } from "react-icons/fi";

// Define the form data interface
interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    mode: "onBlur",
  });

  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setSuccessMessage(null);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to submit form");
      }

      setSuccessMessage("Your message has been sent successfully! We'll get back to you via email within 24 hours.");
      reset();
    } catch (err) {
      console.error("Error:", err);
      setErrorMessage(
        err instanceof Error ? err.message : "An error occurred. Please try again."
      );
    }
  };

  return (
    <div className="bg-white rounded-lg p-4 w-full mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-blue-100 text-blue-700">
          <FiMessageSquare className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 tracking-tight">Contact Us</h3>
          <p className="text-sm text-gray-600">Send us a message with your details</p>
        </div>
      </div>

      {successMessage && (
        <div className="mb-6 p-3 bg-green-50 border border-green-200 text-green-700 rounded-md text-xs">
          {successMessage}
        </div>
      )}

      {errorMessage && (
        <div className="mb-6 p-3 bg-red-50 border border-red-200 text-red-700 rounded-md text-sm">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
        <Controller
          name="name"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <div className="relative">
              <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-600" />
              <input
                {...field}
                type="text"
                placeholder="Full Name"
                disabled={isSubmitting}
                className={`w-full pl-10 pr-4 py-2 border rounded-md outline-none transition-colors duration-200 ${
                  errors.name 
                    ? "border-red-200 focus:ring-2 focus:ring-red-100 focus:border-red-500" 
                    : "border-gray-200 focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                } ${isSubmitting ? "bg-gray-50" : "bg-white"}`}
              />
            </div>
          )}
        />

        <Controller
          name="email"
          control={control}
          rules={{
            required: true,
            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
          }}
          render={({ field }) => (
            <div className="relative">
              <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-600" />
              <input
                {...field}
                type="email"
                placeholder="Email Address"
                disabled={isSubmitting}
                className={`w-full pl-10 pr-4 py-2 border rounded-md outline-none transition-colors duration-200 ${
                  errors.email 
                    ? "border-red-200 focus:ring-2 focus:ring-red-100 focus:border-red-500" 
                    : "border-gray-200 focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                } ${isSubmitting ? "bg-gray-50" : "bg-white"}`}
              />
            </div>
          )}
        />

        <Controller
          name="phone"
          control={control}
          rules={{
            pattern: /^\+?[\d\s-]{9,15}$/,
          }}
          render={({ field }) => (
            <div className="relative">
              <FiPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-600" />
              <input
                {...field}
                type="tel"
                placeholder="Phone Number"
                disabled={isSubmitting}
                className={`w-full pl-10 pr-4 py-2 border rounded-md outline-none transition-colors duration-200 ${
                  errors.phone 
                    ? "border-red-200 focus:ring-2 focus:ring-red-100 focus:border-red-500" 
                    : "border-gray-200 focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                } ${isSubmitting ? "bg-gray-50" : "bg-white"}`}
              />
            </div>
          )}
        />

        <Controller
          name="message"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <div className="relative">
              <FiMessageSquare className="absolute left-3 top-4 h-4 w-4 text-gray-600" />
              <textarea
                {...field}
                placeholder="Your Message"
                disabled={isSubmitting}
                className={`w-full pl-10 pr-4 py-2 border rounded-md min-h-[100px] outline-none transition-colors duration-200 ${
                  errors.message 
                    ? "border-red-200 focus:ring-2 focus:ring-red-100 focus:border-red-500" 
                    : "border-gray-200 focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                } ${isSubmitting ? "bg-gray-50" : "bg-white"}`}
              />
            </div>
          )}
        />

        <div className="flex flex-col gap-3 mt-8">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full px-4 py-2 rounded-md font-medium text-sm transition-colors duration-200 flex items-center justify-center shadow-sm ${
              isSubmitting 
                ? "opacity-50 cursor-not-allowed bg-gray-200 text-gray-500" 
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
            {!isSubmitting && <FiArrowRight className="h-4 w-4 ml-2" />}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;