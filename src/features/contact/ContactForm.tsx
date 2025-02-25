import React, { useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";

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
  const [isSuccessful, setIsSuccessful] = useState(false);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setSuccessMessage(null);
    setErrorMessage(null);
    setIsSuccessful(false);

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

      setSuccessMessage(
        "Your message has been sent successfully! We will get back to you soon."
      );
      setIsSuccessful(true);
      reset();

      setTimeout(() => {
        setIsSuccessful(false);
      }, 3000);
    } catch (err) {
      console.error("Error:", err);
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage("An unexpected error occurred. Please try again.");
      }
    }
  };

  const fieldVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    focus: { borderColor: "#93C5FD" }, // Tailwind's blue-300
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className=""
    >
      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-purple-50/20 pointer-events-none" />

      {/* Success Message */}
      <AnimatePresence>
        {successMessage && (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="mb-6 p-4 bg-green-50/90 border-l-4 border-green-400 text-green-800 rounded-lg flex items-center gap-3 shadow-sm"
          >
            <AiOutlineCheckCircle className="text-2xl" />
            <p className="font-medium text-sm">{successMessage}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error Message */}
      <AnimatePresence>
        {errorMessage && (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="mb-6 p-4 bg-red-50/90 border-l-4 border-red-400 text-red-800 rounded-r-lg shadow-sm"
          >
            <p className="font-medium text-sm">{errorMessage}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-7 relative z-10">
        {/* Name Field */}
        <Controller
          name="name"
          control={control}
          rules={{ required: "Name is required" }}
          render={({ field }) => (
            <motion.div variants={fieldVariants} initial="initial" animate="animate">
              <input
                {...field}
                type="text"
                placeholder="Your Name"
                className={`w-full p-4 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300 bg-white/80 shadow-sm ${
                  errors.name
                    ? "border-red-400"
                    : "border-gray-200 focus:border-blue-300"
                } ${isSubmitting ? "bg-gray-50 cursor-not-allowed" : ""}`}
                disabled={isSubmitting}
              />
              <AnimatePresence>
                {errors.name && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="mt-2 text-sm text-red-600 font-medium"
                  >
                    {errors.name.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        />

        {/* Email Field */}
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
            <motion.div variants={fieldVariants} initial="initial" animate="animate">
              <input
                {...field}
                type="email"
                placeholder="Your Email"
                className={`w-full p-4 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300 bg-white/80 shadow-sm ${
                  errors.email
                    ? "border-red-400"
                    : "border-gray-200 focus:border-blue-300"
                } ${isSubmitting ? "bg-gray-50 cursor-not-allowed" : ""}`}
                disabled={isSubmitting}
              />
              <AnimatePresence>
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="mt-2 text-sm text-red-600 font-medium"
                  >
                    {errors.email.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        />

        {/* Message Field */}
        <Controller
          name="message"
          control={control}
          rules={{ required: "Message is required" }}
          render={({ field }) => (
            <motion.div variants={fieldVariants} initial="initial" animate="animate">
              <textarea
                {...field}
                placeholder="Your Message"
                className={`w-full p-4 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300 bg-white/80 shadow-sm resize-y min-h-[150px] ${
                  errors.message
                    ? "border-red-400"
                    : "border-gray-200 focus:border-blue-300"
                } ${isSubmitting ? "bg-gray-50 cursor-not-allowed" : ""}`}
                disabled={isSubmitting}
              />
              <AnimatePresence>
                {errors.message && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="mt-2 text-sm text-red-600 font-medium"
                  >
                    {errors.message.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        />

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          whileTap={{ y: isSubmitting ? 0 : 2 }}
          className={`w-full py-4 px-8 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-sm ${
            isSuccessful
              ? "bg-green-500 hover:bg-green-600"
              : "bg-blue-600 hover:bg-blue-700"
          } ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
        >
          {isSubmitting ? (
            <motion.svg
              className="h-5 w-5 text-white"
              viewBox="0 0 24 24"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              />
            </motion.svg>
          ) : isSuccessful ? (
            <AiOutlineCheckCircle className="text-xl" />
          ) : null}
          {isSubmitting ? "Sending..." : isSuccessful ? "Sent!" : "Send Message"}
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ContactForm;