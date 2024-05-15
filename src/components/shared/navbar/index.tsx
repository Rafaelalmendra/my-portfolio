'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useTheme } from 'next-themes';

import { navbarItems } from 'mocks';

import { Button, ThemeToggle } from 'components';

import { Github, Linkedin, Menu, Search } from 'lucide-react';

const Navbar = () => {
  const pathname = usePathname();
  const { theme } = useTheme();

  return (
    <nav className="w-full h-[4.5rem] lg:h-[5.25rem] flex items-center justify-center border-b">
      <div className="max-w-7xl w-full flex items-center justify-between px-4 lg:px-0">
        <div className="flex items-center gap-7">
          <Link href="/">
            <div className="relative w-[29px] h-[34px] hover:translate-y-[-2px] transition-transform">
              <Image
                layout="fill"
                className="object-contain"
                src={
                  theme === 'dark'
                    ? '/logos/logo-simple-white.svg'
                    : '/logos/logo-simple-black.svg'
                }
                alt="Logo do Rafael Almendra - Desenvolvedor Front-end"
              />
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
          <Button variant="outline" size="icon">
            <Search size={22} />
          </Button>

          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Rafaelalmendra"
          >
            <Button variant="outline" size="icon">
              <Github size={22} />
            </Button>
          </a>

          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/rafaelalmendraa/"
          >
            <Button variant="outline" size="icon">
              <Linkedin size={22} />
            </Button>
          </a>

          <ThemeToggle />
        </div>

        <div className="block lg:hidden">
          <Button variant="outline" size="icon">
            <Menu size={22} />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
