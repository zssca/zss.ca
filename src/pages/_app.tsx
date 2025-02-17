import type { AppProps } from "next/app";
import Loader from "@/components/common/Loader"; // Import the Loader component
import "@/styles/globals.css"; // Import global styles

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Loader /> {/* Add Loader here */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
