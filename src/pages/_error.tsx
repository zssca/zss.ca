import { NextPage } from "next";
import { motion } from "framer-motion";
import { FaExclamationTriangle } from "react-icons/fa";

interface ErrorProps {
  statusCode?: number;
}

const ErrorPage: NextPage<ErrorProps> = ({ statusCode }) => {
  const errorMessage = statusCode
    ? `An error ${statusCode} occurred on the server`
    : "An error occurred on the client";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <motion.div
        className="max-w-7xl mx-auto bg-white rounded-xl shadow-sm p-8 text-center transition-all duration-300 hover:shadow-md"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Animated Error Icon */}
        <motion.div
          className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mx-auto mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        >
          <FaExclamationTriangle className="text-red-600 text-3xl" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="text-4xl font-extrabold text-gray-800 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Oops! Something Went Wrong
        </motion.h1>

        {/* Error Message */}
        <motion.p
          className="text-lg text-gray-600 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {errorMessage}
        </motion.p>

        {/* Call to Action */}
        <motion.a
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all transform hover:-translate-y-0.5 hover:shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Back to Home
        </motion.a>

        {/* Status Code (if present) */}
        {statusCode && (
          <motion.p
            className="mt-4 text-sm text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Error Code: <span className="font-mono text-gray-600">{statusCode}</span>
          </motion.p>
        )}
      </motion.div>
    </div>
  );
};

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res?.statusCode ?? err?.statusCode ?? 404;
  return { statusCode };
};

export default ErrorPage;