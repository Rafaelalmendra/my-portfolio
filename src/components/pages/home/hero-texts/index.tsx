import Link from 'next/link';

import { useTranslations } from 'next-intl';

import { cn } from 'utils';

import { AnimatedShinyText, Button, TypingAnimation } from 'components';

import { Linkedin, Mail } from 'lucide-react';

const HeroTexts = () => {
  const t = useTranslations('Home');

  return (
    <>
      <div
        className={cn(
          'group rounded-full border border-black/5 bg-neutral-100 text-[0.625rem] lg:text-sm text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-[#030C20] dark:hover:bg-neutral-800',
        )}
      >
        <AnimatedShinyText className="text-center inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
          <span>🚀 {t('subtitle')}</span>
        </AnimatedShinyText>
      </div>

      <TypingAnimation
        className="text-center text-2xl lg:text-5xl font-semibold mt-2 lg:mt-6"
        text={t('title')}
      />

      <p className="text-xs lg:text-base max-w-[1060px] text-justify lg:text-center mt-2 dark:text-[#bebebe] text-[#71717A]">
        {t('description')}
      </p>

      <div className="w-full flex items-center justify-center gap-3 mt-4 mb-8">
        <Link href="/contact" className="w-full lg:w-auto">
          <Button className="w-full lg:w-auto gap-1">
            <Mail size={16} />
            {t('contact')}
          </Button>
        </Link>

        <a
          href="https://www.linkedin.com/in/rafaelalmendraa/"
          target="_blank"
          rel="noreferrer"
          className="w-full lg:w-auto"
        >
          <Button variant="outline" className="w-full lg:w-auto  gap-1">
            <Linkedin size={16} /> LinkedIn
          </Button>
        </a>
      </div>
    </>
  );
};

export { HeroTexts };
