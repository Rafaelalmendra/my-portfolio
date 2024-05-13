'use client';

import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

import { navbarItems } from 'mocks';

import { Button, ThemeToggle } from 'components';

import { Github, Linkedin, Search } from 'lucide-react';

const Navbar = () => {
  const { theme } = useTheme();

  return (
    <nav className="w-full h-[5.25rem] flex items-center justify-center">
      <div className="max-w-7xl w-full flex items-center justify-between">
        <div className="flex items-center gap-7">
          <motion.div
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, type: 'spring' }}
          >
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
          </motion.div>

          <div className="flex items-center gap-4">
            {navbarItems.map((item) => (
              <Link key={item.id} href={item.href}>
                <Button variant="ghost">{item.title}</Button>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline" size="icon">
            <Search size={22} />
          </Button>

          <Button variant="outline" size="icon">
            <Github size={22} />
          </Button>

          <Button variant="outline" size="icon">
            <Linkedin size={22} />
          </Button>

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
