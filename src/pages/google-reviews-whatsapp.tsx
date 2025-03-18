import { useEffect } from "react";
import type { GetServerSideProps } from "next";
import Head from "next/head";

const WHATSAPP_LINK: string = "https://wa.me/+14039093133?text=Hi!%20I%27m%20interested%20in%20your%20Google%20Reviews%20pricing%20plans.%20Can%20you%20tell%20me%20more%20about%20the%20options%3F";
const REDIRECT_DELAY: number = 0;

const GoogleReviewsWhatsApp = () => {
  useEffect(() => {
    try {
      window.location.replace(WHATSAPP_LINK);
    } catch (error) {
      console.error("Client-side redirect failed:", error);
    }
  }, []);

  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow, noarchive, nosnippet" />
        <meta name="googlebot" content="noindex, nofollow" />
        <meta httpEquiv="refresh" content={`${REDIRECT_DELAY};url=${WHATSAPP_LINK}`} />
        <title>Redirecting to WhatsApp</title>
      </Head>
      <main style={{ textAlign: "center", padding: "20px", fontFamily: "sans-serif" }}>
        <p>Redirecting to WhatsApp…</p>
        <a href={WHATSAPP_LINK} style={{ color: "#25D366", textDecoration: "none" }}>
          Click here if not redirected
        </a>
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  context.res.setHeader("X-Robots-Tag", "noindex, nofollow");
  return {
    redirect: {
      destination: WHATSAPP_LINK,
      permanent: false,
    },
  };
};

export const config = {
  unstable_runtimeJS: false,
};

export default GoogleReviewsWhatsApp;