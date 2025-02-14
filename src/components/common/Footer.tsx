import { FC } from "react";
import { Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { 
      Icon: Facebook, 
      link: "https://facebook.com",
      label: "Visit our Facebook page"
    },
    { 
      Icon: Instagram, 
      link: "https://instagram.com/zss_ca",
      label: "Follow us on Instagram"
    },
    { 
      Icon: Twitter, 
      link: "https://twitter.com",
      label: "Follow us on Twitter"
    },
    { 
      Icon: Linkedin, 
      link: "https://linkedin.com",
      label: "Connect on LinkedIn"
    }
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms & Conditions", href: "#" }
  ];

  return (
    <footer className="max-w-7xl mx-auto px-4 py-12">
            <div className="bg-gray-950 rounded-xl bg-[url('/bg/C.svg')] bg-cover bg-bottom shadow-2xl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-6 gap-6">
        {/* Brand Section */}
        <section className="bg-gray-900/50 backdrop-blur-lg rounded-lg p-6 space-y-4 hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-bold text-gray-100">
            <span className="font-bold">Zenith</span>{" "}
            <span className="font-light text-gray-400">Strategic Solutions</span>
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Transforming business visions into operational reality through
            strategic innovation and technological excellence.
          </p>
        </section>

        {/* Contact Section */}
        <section className="bg-gray-900/50 backdrop-blur-lg rounded-lg p-6 space-y-6 hover:shadow-lg transition-shadow">
          <h3 className="text-gray-100 font-semibold text-lg">Let&apos;s Talk</h3>
          <p className="text-gray-400 text-sm">
            We&apos;d love to hear from you. Reach out to us anytime!
          </p>
          <a
            href="mailto:info@zss.ca"
            className="flex items-center gap-3 group hover:text-gray-100 transition-colors"
          >
            <div className="bg-gray-800 rounded-md p-2">
              <Mail className="h-5 w-5 text-gray-400" />
            </div>
            <span className="text-gray-300">info@zss.ca</span>
          </a>
          <div className="flex gap-3">
            {socialLinks.map(({ Icon, link, label }, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2.5 bg-gray-800 rounded-md hover:bg-gray-700 transition-colors"
              >
                <Icon className="h-5 w-5 text-gray-400 hover:text-gray-100 transition-colors" />
              </a>
            ))}
          </div>
        </section>

        {/* Legal Links */}
        <section className="bg-gray-900/50 backdrop-blur-lg rounded-lg p-6 hover:shadow-lg transition-shadow">
          <h3 className="text-gray-100 font-semibold text-lg mb-4">Quick Links</h3>
          <nav className="space-y-3">
            {legalLinks.map(({ name, href }) => (
              <a
                key={name}
                href={href}
                className="block text-gray-400 hover:text-gray-300 text-sm transition-colors"
              >
                {name}
              </a>
            ))}
          </nav>
        </section>
      </div>

      {/* Copyright */}
      <div className="py-6 border-t border-gray-800/50 mt-8">
        <div className="text-center text-sm text-gray-500">
          <p>&copy; {currentYear} Zenith Strategic Solutions</p>
          <p className="mt-1 text-xs">Precision Engineered Excellence</p>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;