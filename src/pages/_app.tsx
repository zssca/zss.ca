import type { AppProps } from "next/app";
import "@/styles/globals.css"; // Importing CSS with '@' alias


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
