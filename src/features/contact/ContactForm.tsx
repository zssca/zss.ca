import React, { useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
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

      setSuccessMessage("Message sent successfully!");
      reset();
    } catch (err) {
      console.error("Error:", err);
      setErrorMessage(
        err instanceof Error ? err.message : "An error occurred. Please try again."
      );
    }
  };

  return (
    <div className="relative">
      {successMessage && (
        <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-800 rounded-lg text-sm">
          {successMessage}
        </div>
      )}

      {errorMessage && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-800 rounded-lg text-sm">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
        <Controller
          name="name"
          control={control}
          rules={{ required: "Name is required" }}
          render={({ field }) => (
            <div>
              <input
                {...field}
                type="text"
                placeholder="Your Name"
                className={`w-full p-2 border rounded-lg text-sm ${
                  errors.name ? "border-red-400" : "border-gray-300"
                } ${isSubmitting ? "bg-gray-100" : "bg-white"}`}
                disabled={isSubmitting}
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>
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
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Enter a valid email",
            },
          }}
          render={({ field }) => (
            <div>
              <input
                {...field}
                type="email"
                placeholder="Your Email"
                className={`w-full p-2 border rounded-lg text-sm ${
                  errors.email ? "border-red-400" : "border-gray-300"
                } ${isSubmitting ? "bg-gray-100" : "bg-white"}`}
                disabled={isSubmitting}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
              )}
            </div>
          )}
        />

        <Controller
          name="message"
          control={control}
          rules={{ required: "Message is required" }}
          render={({ field }) => (
            <div>
              <textarea
                {...field}
                placeholder="Your Message"
                className={`w-full p-2 border rounded-lg text-sm min-h-[100px] ${
                  errors.message ? "border-red-400" : "border-gray-300"
                } ${isSubmitting ? "bg-gray-100" : "bg-white"}`}
                disabled={isSubmitting}
              />
              {errors.message && (
                <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>
              )}
            </div>
          )}
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-2 px-4 bg-blue-600 text-white rounded-lg text-sm font-medium ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
          }`}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;