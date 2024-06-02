import Link from 'next/link';

import { cn } from 'utils';

import { Button } from 'components';
import AnimatedShinyText from 'components/magicui/animated-shiny-text';

import { Linkedin, Mail } from 'lucide-react';

const HeroTexts = () => {
  return (
    <>
      <div
        className={cn(
          'group rounded-full border border-black/5 bg-neutral-100 text-sm text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-[#030C20] dark:hover:bg-neutral-800',
        )}
      >
        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
          <span>
            🚀 Apaixonado pela interseção entre tecnologia, programação e Design
          </span>
        </AnimatedShinyText>
      </div>

      <h1 className="text-center text-2xl lg:text-5xl font-semibold mt-6">
        Desenvolvedor de Software
      </h1>

      <p className="text-sm lg:text-base max-w-[1060px] text-justify lg:text-center mt-2 dark:text-[#bebebe] text-[#71717A]">
        Olá 👋 me chamo Rafael Almendra. Já participei de projetos com milhares
        de acessos diários, faço bacharelado em Sistemas de Informação e fundei
        meu próprio sistema com o objetivo de revolucionar a gestão no universo
        jurídico. Te convido através deste site a conhecer um pouco mais sobre
        mim e meus projetos.
      </p>

      <div className="w-full flex items-center justify-center gap-3 mt-4 mb-8">
        <Link href="/contact" className="w-full lg:w-auto">
          <Button className="w-full lg:w-auto gap-1">
            <Mail size={16} />
            Contato
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
