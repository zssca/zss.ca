'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, {
  useState,
  useCallback,
  useRef,
  forwardRef,
  ButtonHTMLAttributes,
  useEffect
} from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { MdHome, MdDesignServices, MdInfo, MdMail } from 'react-icons/md';

const ICONS = {
  home: MdHome,
  services: MdDesignServices,
  about: MdInfo,
  contact: MdMail,
};

const NAV_LINKS = [
  { name: 'Home', href: '/', icon: ICONS.home },
  { name: 'Services', href: '/services', icon: ICONS.services },
  { name: 'About', href: '/about', icon: ICONS.about },
  { name: 'Contact Us', href: '/contact', icon: ICONS.contact },
];

const LOGO = '/dark-logo.svg';

const menuItemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20,
      delay: index * 0.05
    }
  })
};

interface MobileMenuButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isOpen: boolean;
  onToggle: () => void;
}

const MobileMenuButton = forwardRef<HTMLButtonElement, MobileMenuButtonProps>(
  ({ isOpen, onToggle, ...buttonProps }, ref) => (
    <button
      {...buttonProps}
      ref={ref}
      type="button"
      onClick={onToggle}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
      className={`burger-menu relative z-50 md:hidden ml-2 transition-colors ${isOpen ? 'open' : ''}`}
    >
      <div className="hamburger">
        <span className="block absolute" />
        <span className="block absolute" />
        <span className="block absolute" />
      </div>
      <div className="cross">
        <span className="block absolute" />
        <span className="block absolute" />
      </div>
    </button>
  )
);
MobileMenuButton.displayName = 'MobileMenuButton';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navbarHidden, setNavbarHidden] = useState(false);
  const pathname = usePathname();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const isActiveLink = useCallback(
    (href: string) => pathname === href.split('#')[0],
    [pathname]
  );

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setNavbarHidden(true);
        setMenuOpen(false);
      } else {
        setNavbarHidden(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const handleToggleMenu = useCallback(() => {
    setMenuOpen(prev => !prev);
  }, []);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (menuOpen) {
        const isInsideButton = menuButtonRef.current?.contains(event.target as Node);
        const isInsideMenu = mobileMenuRef.current?.contains(event.target as Node);
        if (!isInsideButton && !isInsideMenu) {
          setMenuOpen(false);
        }
      }
    },
    [menuOpen]
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [handleClickOutside]);

  return (
    <div className="fixed top-4 inset-x-0 z-50">
      <div className="mx-auto px-4 sm:px-4 lg:px-4 max-w-7xl">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{
            y: navbarHidden ? -100 : 0,
            opacity: navbarHidden ? 0 : 1,
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="flex items-center justify-between bg-white rounded-xl pl-4 pr-2 py-3 h-16 shadow-sm"
        >
          <div className="flex items-center flex-grow gap-2">
            <Link href="/" className="flex items-center gap-2">
              <motion.div
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <Image
                  src={LOGO}
                  alt="Zenith Strategic Solutions Logo"
                  width={40}
                  height={40}
                  className="h-10 w-10"
                  priority
                />
              </motion.div>
              <span className="text-xl font-semibold whitespace-nowrap tracking-tighter block">
                Zenith <span className="font-light">Strategic Solutions</span>
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <LayoutGroup>
              {NAV_LINKS.map(({ name, href, icon: Icon }) => {
                const active = isActiveLink(href);
                return (
                  <div key={name}>
                    <Link
                      href={href}
                      className={`flex items-center gap-3 px-3 py-3 text-md font-medium rounded-lg transition-colors ${
                        active
                          ? 'text-gray-900 bg-gray-100'
                          : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                      }`}
                      aria-current={active ? 'page' : undefined}
                    >
                      {Icon && (
                        <Icon className="w-5 h-5" aria-hidden="true" />
                      )}
                      <span>{name}</span>
                    </Link>
                  </div>
                );
              })}
            </LayoutGroup>
          </div>

          <MobileMenuButton
            ref={menuButtonRef}
            isOpen={menuOpen}
            onToggle={handleToggleMenu}
          />
        </motion.nav>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              ref={mobileMenuRef}
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="fixed md:hidden top-24 left-4 right-4 bg-white rounded-xl z-50 shadow-lg"
              role="menu"
            >
              <motion.div
                className="p-2 space-y-1"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.05 }
                  }
                }}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                {NAV_LINKS.map(({ name, href, icon: Icon }, index) => {
                  const active = isActiveLink(href);
                  return (
                    <motion.div key={name} variants={menuItemVariants} custom={index}>
                      <Link
                        href={href}
                        onClick={() => setMenuOpen(false)}
                        className={`flex items-center gap-3 px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                          active
                            ? 'text-gray-900 bg-gray-100'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'
                        }`}
                        role="menuitem"
                      >
                        {Icon && (
                          <Icon className="w-5 h-5" aria-hidden="true" />
                        )}
                        {name}
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;