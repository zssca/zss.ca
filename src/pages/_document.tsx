// src/pages/_document.tsx

import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import { FC } from "react";

const Document: FC = () => {
  return (
    <Html lang="en">
      <Head>
        {/* Favicon and Web App Manifest */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/web-app-manifest-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/web-app-manifest-512x512.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/web-app-manifest-192x192.png" />
      </Head>
      <body>
        <Main />
        <NextScript />

        {/* Google Tag Manager Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16826976573"
          strategy="afterInteractive"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16826976573');
            `,
          }}
        />
      </body>
    </Html>
  );
};

export default Document;
