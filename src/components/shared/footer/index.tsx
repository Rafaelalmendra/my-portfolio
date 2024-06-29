'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';

import { Button } from 'components';
import ShineBorder from 'components/magicui/shine-border';

import { CircleArrowUp, Play } from 'lucide-react';

const Footer = () => {
  const t = useTranslations('Footer');
  const { theme, systemTheme } = useTheme();

  const isDark =
    theme === 'dark' || (theme === 'system' && systemTheme === 'dark');

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full flex items-center justify-center overflow-hidden mb-[40px] pb-4 lg:pb-0 px-4 lg:px-0">
      <div className="max-w-7xl w-full flex flex-col items-center justify-center">
        <ShineBorder
          className="w-full"
          color={['#A07CFE', '#FE8FB5', '#FFBE7B']}
        >
          <div className="w-full flex flex-col lg:flex-row items-center justify-between px-[24px] py-[26px] lg:px-[46px] lg:py-[36px] dark:border-[#1f293f] bg-gradient-to-r from-[#F4F4F5] dark:from-[#030c20] to-[##020817] rounded-lg">
            <div className="flex flex-col items-start justify-center">
              <div className="flex items-center justify-center gap-3">
                <Image
                  width={50}
                  height={50}
                  alt="Imagem de perfil"
                  src="/images/perfil.png"
                  className="object-cover rounded-full"
                />

                <div>
                  <h3 className="text-lg font-medium">Rafael Almendra</h3>
                  <p className="text-sm opacity-75">@rafaelalmendra_</p>
                </div>
              </div>

              <h4 className="text-center lg:text-start lg:max-w-[543px] font-semibold text-2xl lg:text-5xl mt-4">
                {t('footerTitle')}
              </h4>

              <p className="text-center lg:text-start opacity-75 mt-5 mb-4 lg:mb-0">
                {t('footerDescription')},{' '}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://wa.me/5586988320616?text=Ol%C3%A1%2C+tudo+bem%3F+"
                  className="underline font-semibold"
                >
                  {t('footerContact')}
                </a>
              </p>
            </div>

            <Link href="/contact">
              <div className="hidden lg:flex cursor-pointer w-[116px] h-[116px] items-center justify-center bg-[#0F172A] dark:bg-slate-900 text-white rounded-full hover:scale-105 transition-transform">
                <Play size={36} />
              </div>
            </Link>
          </div>
        </ShineBorder>

        <div className="w-full flex items-center justify-between mt-[47px]">
          <div className="flex items-center justify-center gap-3">
            <Link href="/">
              <Image
                width={23}
                height={23}
                src={
                  isDark
                    ? '/logos/logo-simple-white.svg'
                    : '/logos/logo-simple-black.svg'
                }
                alt="Logo do Rafael Almendra"
                className="hover:translate-y-[-4px] transition-transform"
              />
            </Link>

            <Button variant="ghost" size="icon" onClick={handleScrollToTop}>
              <CircleArrowUp size={24} />
            </Button>
          </div>

          <p className="font-regular opacity-75">{t('footerMessage')}</p>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
