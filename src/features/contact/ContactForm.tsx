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
    <div className="bg-white rounded-lg p-2 w-full mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 rounded-lg bg-blue-100 text-blue-700">
          <FiMessageSquare className="h-7 w-7" />
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 tracking-tight">Contact Us</h3>
          <p className="text-base text-gray-600">Send us a message with your details</p>
        </div>
      </div>

      {successMessage && (
        <div className="mb-8 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg text-sm">
          {successMessage}
        </div>
      )}

      {errorMessage && (
        <div className="mb-8 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
        <Controller
          name="name"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <div className="relative">
              <FiUser className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-600" />
              <input
                {...field}
                type="text"
                placeholder="Full Name"
                disabled={isSubmitting}
                className={`w-full pl-12 pr-5 py-4 border rounded-lg outline-none text-base transition-colors duration-200 ${
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
              <FiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-600" />
              <input
                {...field}
                type="email"
                placeholder="Email Address"
                disabled={isSubmitting}
                className={`w-full pl-12 pr-5 py-4 border rounded-lg outline-none text-base transition-colors duration-200 ${
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
              <FiPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-600" />
              <input
                {...field}
                type="tel"
                placeholder="Phone Number"
                disabled={isSubmitting}
                className={`w-full pl-12 pr-5 py-4 border rounded-lg outline-none text-base transition-colors duration-200 ${
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
              <FiMessageSquare className="absolute left-4 top-5 h-5 w-5 text-gray-600" />
              <textarea
                {...field}
                placeholder="Your Message"
                disabled={isSubmitting}
                className={`w-full pl-12 pr-5 py-4 border rounded-lg min-h-[150px] outline-none text-base transition-colors duration-200 ${
                  errors.message 
                    ? "border-red-200 focus:ring-2 focus:ring-red-100 focus:border-red-500" 
                    : "border-gray-200 focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                } ${isSubmitting ? "bg-gray-50" : "bg-white"}`}
              />
            </div>
          )}
        />

        <div className="flex flex-col gap-4 mt-10">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full px-6 py-4 rounded-lg font-medium text-base transition-colors duration-200 flex items-center justify-center shadow-sm ${
              isSubmitting 
                ? "opacity-50 cursor-not-allowed bg-gray-200 text-gray-500" 
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
            {!isSubmitting && <FiArrowRight className="h-5 w-5 ml-3" />}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;