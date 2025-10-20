'use client';

import { useMemo } from 'react';
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

  const isDark = useMemo(() => {
    return systemTheme === 'dark' && (theme === 'system' || theme === 'dark');
  }, [theme, systemTheme]);

  return (
    <nav className="fixed top-0 z-20 w-full h-[4.5rem] lg:h-[5.25rem] flex items-center justify-center border-b bg-white dark:bg-[#161717]">
      <div className="max-w-7xl w-full flex items-center justify-between px-4 lg:px-0">
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
          <Button variant="outline" size="icon" disabled>
            <Search size={22} />
          </Button>

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
