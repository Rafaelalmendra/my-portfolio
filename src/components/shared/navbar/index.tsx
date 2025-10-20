'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';

import { useTheme } from 'next-themes';

import { NavbarMock } from 'mocks';

import { Button, LanguageToggle, ThemeToggle } from 'components';

import { Menu, Search } from 'lucide-react';

import { Link, usePathname } from '../../../navigation';

const Navbar = () => {
  const pathname = usePathname();
  const { navbarItems } = NavbarMock();
  const { theme, systemTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);

  const isDark = useMemo(() => {
    return systemTheme === 'dark' && (theme === 'system' || theme === 'dark');
  }, [theme, systemTheme]);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.scrollY;
          setIsScrolled(scrollTop > 80);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed z-20 w-full h-[4.5rem] lg:h-[5.25rem] flex items-center justify-center transition-all duration-500 ease-out ${
        isScrolled
          ? 'top-4 left-1/2 transform -translate-x-1/2 max-w-4xl rounded-2xl shadow-lg backdrop-blur-md bg-white/80 dark:bg-[#161717]/80 border border-gray-200/50 dark:border-gray-700/50'
          : 'top-0 left-0 transform translate-x-0 border-b bg-white dark:bg-[#161717] rounded-none shadow-none backdrop-blur-none'
      }`}
    >
      <div
        className={`w-full flex items-center justify-between transition-all duration-500 ease-out ${
          isScrolled ? 'px-6' : 'max-w-7xl px-4 lg:px-0'
        }`}
      >
        <div className="flex items-center gap-7">
          <Link href="/">
            <div className="relative w-[29px] h-[34px] hover:translate-y-[-2px] transition-transform">
              {!isDark && (
                <Image
                  layout="fill"
                  className="object-contain"
                  src="/logos/logo-simple-black.svg"
                  alt="Logo do Rafael Almendra - Desenvolvedor Front-end"
                />
              )}

              {isDark && (
                <Image
                  layout="fill"
                  className="object-contain"
                  src="/logos/logo-simple-white.svg"
                  alt="Logo do Rafael Almendra - Desenvolvedor Front-end"
                />
              )}
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-4">
            {navbarItems.map((item) => (
              <Link key={item.id} href={item.href}>
                <Button variant={pathname === item.href ? 'default' : 'ghost'}>
                  {item.title}
                </Button>
              </Link>
            ))}
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <LanguageToggle />
        </div>

        <div className="flex lg:hidden items-center justify-center gap-3">
          <ThemeToggle />
          <LanguageToggle />
          <Button variant="outline" size="icon">
            <Menu size={22} />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
