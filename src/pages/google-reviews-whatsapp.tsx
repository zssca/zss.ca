import type { GetServerSideProps } from "next";
import Head from "next/head";

const WHATSAPP_LINK: string = "https://wa.me/+14039093133?text=Hi!%20I%27m%20interested%20in%20your%20Google%20Reviews%20pricing%20plans.%20Can%20you%20tell%20me%20more%20about%20the%20options%3F";

const GoogleReviewsWhatsApp = ({ isMetaCrawler }: { isMetaCrawler: boolean }) => {
  // This component only renders for Meta's crawler; regular users are redirected server-side
  if (!isMetaCrawler) {
    return null; // Won’t execute due to server-side redirect
  }

  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow, noarchive, nosnippet" />
        <meta name="googlebot" content="noindex, nofollow" />
        <title>Contact Us for Google Reviews</title>
        <meta name="description" content="Learn more about our Google Reviews services." />
      </Head>
      <main style={{ textAlign: "center", padding: "20px", fontFamily: "sans-serif" }}>
        <h1>Boost Your Google Reviews</h1>
        <p>Improve your online reputation with our expert solutions.</p>
        <p>Contact us on WhatsApp for more information.</p>
        <a href={WHATSAPP_LINK} style={{ color: "#25D366", textDecoration: "none" }}>
          Chat with us
        </a>
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  // Get the user-agent header from the request
  const userAgent = context.req.headers["user-agent"] || "";
  
  // Check if the request comes from Meta's crawler
  const isMetaCrawler = /facebookexternalhit|Facebot/i.test(userAgent);

  if (isMetaCrawler) {
    // Serve a static page to Meta's crawler
    return { props: { isMetaCrawler: true } };
  } else {
    // Redirect regular users instantly to WhatsApp
    return {
      redirect: {
        destination: WHATSAPP_LINK,
        permanent: false, // Use 302 temporary redirect
      },
    };
  }
};

// Optional: Disable runtime JavaScript if desired (though not necessary here)
export const config = {
  unstable_runtimeJS: false,
};

export default GoogleReviewsWhatsApp;