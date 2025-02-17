'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useCallback, useRef, useEffect } from 'react';
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

const MobileMenuButton = React.forwardRef<
  HTMLButtonElement,
  { isOpen: boolean; onToggle: () => void }
>(({ isOpen, onToggle }, ref) => (
  <button
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
));
MobileMenuButton.displayName = 'MobileMenuButton';

const NavLinkItem = ({ href, name, icon: Icon, isActive, onClick }: {
  href: string;
  name: string;
  icon: React.ElementType;
  isActive: boolean;
  onClick?: () => void;
}) => (
  <Link
    href={href}
    onClick={onClick}
    className={`flex items-center gap-3 px-4 py-2 text-base font-medium rounded-lg transition-colors ${
      isActive
        ? 'text-gray-900 bg-gray-100'
        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'
    }`}
    aria-current={isActive ? 'page' : undefined}
  >
    <Icon className="w-5 h-5 shrink-0" aria-hidden="true" />
    <span>{name}</span>
  </Link>
);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navbarHidden, setNavbarHidden] = useState(false);
  const pathname = usePathname();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const scrollY = useRef(0);

  const isActiveLink = useCallback(
    (href: string) => pathname === href.split('#')[0],
    [pathname]
  );

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > scrollY.current && currentScrollY > 100) {
        setNavbarHidden(true);
        setMenuOpen(false);
      } else {
        setNavbarHidden(false);
      }
      scrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleMenu = useCallback(() => setMenuOpen(prev => !prev), []);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (
      menuOpen &&
      !menuButtonRef.current?.contains(event.target as Node) &&
      !mobileMenuRef.current?.contains(event.target as Node)
    ) {
      setMenuOpen(false);
    }
  }, [menuOpen]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [handleClickOutside]);

  return (
    <div className="fixed top-4 inset-x-0 z-50">
      <div className="mx-auto px-4 max-w-7xl">
        <motion.nav
          animate={{ y: navbarHidden ? -100 : 0, opacity: navbarHidden ? 0 : 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="flex items-center justify-between bg-white rounded-xl px-4 pr-2 py-2 h-14 shadow-sm"
        >
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src={LOGO}
              alt="Zenith Strategic Solutions Logo"
              width={40}
              height={40}
              className="h-10 w-10"
              priority
            />
            <span className="text-xl font-semibold whitespace-nowrap tracking-tighter">
              Zenith <span className="font-light">Strategic Solutions</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-2">
            <LayoutGroup>
              {NAV_LINKS.map((link) => (
                <div key={link.name}>
                  <NavLinkItem
                    {...link}
                    isActive={isActiveLink(link.href)}
                    onClick={() => setMenuOpen(false)}
                  />
                </div>
              ))}
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
              className="fixed md:hidden top-20 left-4 right-4 bg-white rounded-xl z-50 shadow-lg"
            >
              <motion.div
                className="p-2 space-y-1"
                variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                {NAV_LINKS.map((link, index) => (
                  <motion.div
                    key={link.name}
                    variants={menuItemVariants}
                    custom={index}
                  >
                    <NavLinkItem
                      {...link}
                      isActive={isActiveLink(link.href)}
                      onClick={() => setMenuOpen(false)}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;