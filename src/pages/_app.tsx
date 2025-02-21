// src/pages/_app.tsx

import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import Loader from "@/components/common/Loader";
import "@/styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Loader />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}