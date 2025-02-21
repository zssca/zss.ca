// src/pages/_app.tsx

import type { AppProps } from "next/app";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react"; // Import Analytics
import Loader from "@/components/common/Loader"; // Import the Loader component
import "@/styles/globals.css"; // Import global styles

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Loader /> {/* Add Loader here */}
      <Component {...pageProps} />
      <Analytics /> {/* Add Vercel Analytics here */}
    </>
  );
}