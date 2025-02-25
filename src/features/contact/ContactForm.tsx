import React, { useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import {
  TextField,
  Button,
  Container,
  Box,
  CircularProgress,
  Alert,
} from "@mui/material";
import { AiOutlineCheckCircle } from "react-icons/ai";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const SimpleContactForm: React.FC = () => {
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

  return (
    <Container maxWidth="sm" sx={{ mt: 4, p: 3 }}>
      {/* Success Message */}
      {successMessage && (
        <Alert
          severity="success"
          sx={{
            mb: 2,
            fontWeight: "bold",
            backgroundColor: "#d4edda",
            color: "#155724",
            border: "1px solid #c3e6cb",
            borderRadius: "8px",
          }}
        >
          {successMessage}
        </Alert>
      )}

      {/* Error Message */}
      {errorMessage && (
        <Alert
          severity="error"
          sx={{
            mb: 2,
            fontWeight: "bold",
            backgroundColor: "#f8d7da",
            color: "#721c24",
            border: "1px solid #f5c6cb",
            borderRadius: "8px",
          }}
        >
          {errorMessage}
        </Alert>
      )}

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* Name Field */}
        <Controller
          name="name"
          control={control}
          rules={{ required: "Name is required" }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Name *"
              placeholder="John Doe"
              fullWidth
              margin="normal"
              disabled={isSubmitting}
              error={!!errors.name}
              helperText={errors.name?.message}
            />
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
            <TextField
              {...field}
              label="Email *"
              type="email"
              placeholder="john@example.com"
              fullWidth
              margin="normal"
              disabled={isSubmitting}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          )}
        />

        {/* Message Field */}
        <Controller
          name="message"
          control={control}
          rules={{ required: "Message is required" }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Message *"
              placeholder="Your message here..."
              fullWidth
              margin="normal"
              multiline
              rows={4}
              disabled={isSubmitting}
              error={!!errors.message}
              helperText={errors.message?.message}
            />
          )}
        />

        {/* Submit Button */}
        <Box textAlign="center" mt={3}>
          <Button
            type="submit"
            variant="contained"
            size="large"
            sx={{
              backgroundColor: isSuccessful ? "#4caf50" : "",
              color: "white",
              transition: "background-color 0.3s ease-in-out",
              borderRadius: "50px",
              padding: "10px 30px",
              fontWeight: "bold",
              width: "100%",
            }}
            disabled={isSubmitting}
            startIcon={
              isSubmitting ? (
                <CircularProgress size="1em" />
              ) : isSuccessful ? (
                <AiOutlineCheckCircle size="1em" />
              ) : null
            }
          >
            {isSubmitting ? "Sending..." : isSuccessful ? "Sent!" : "Send Message"}
          </Button>
        </Box>

        {/* Disclaimer */}
        <Box textAlign="center" mt={2}>
          <p style={{ fontSize: "0.75rem", color: "#888" }}>
            By submitting, you agree to receive emails from us.
          </p>
        </Box>
      </form>
    </Container>
  );
};

export default SimpleContactForm;
