import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import { FC } from "react";

const Document: FC = () => {
  return (
    <Html lang="en">
      <Head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16826976573"
          strategy="afterInteractive"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
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
