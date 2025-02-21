import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import { FC } from "react";

const Document: FC = () => {
  return (
    <Html lang="en">
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Google Tag Manager Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16826976573"
          strategy="afterInteractive"
        />
        {/* Inline GTM initialization script */}
        <Script
          id="gtag-init" // Add an ID for better tracking/debugging
          strategy="afterInteractive" // Load after page becomes interactive
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag() { dataLayer.push(arguments); }
              gtag('js', new Date());
              gtag('config', 'AW-16826976573');
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;