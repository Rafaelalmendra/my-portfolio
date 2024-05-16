import type { NextPage } from 'next';
import Link from 'next/link';

import { Badge, Button, HeroCarousel } from 'components';

import { Linkedin, Mail } from 'lucide-react';

const Home: NextPage = () => {
  return (
    <>
      <main className="w-full flex flex-col items-center justify-center">
        <Badge className="text-[#5E5E5E] bg-[#F4F4F5] hover:bg-[#F4F4F5] hover:translate-y-[-2px] transition-transform cursor-default">
          🚀 | Apaixonado pela interseção entre tecnologia, programação e
          Design.
        </Badge>

        <h1 className="text-5xl font-semibold mt-6">
          Desenvolvedor de Software
        </h1>

        <p className="max-w-[1060px] text-lg text-center mt-2 dark:text-[#bebebe] text-[#71717A]">
          Olá 👋 me chamo Rafael Almendra. Já participei de projetos com
          milhares de acessos diários, faço Bacharelado em Sistemas de
          Informação e fundei meu próprio sistema com o objetivo de revolucionar
          a gestão no universo jurídico. Te convido através deste site a
          conhecer um pouco mais sobre mim e meus projetos.
        </p>

        <div className="flex items-center justify-center gap-3 mt-4">
          <Link href="/contact">
            <Button className="gap-1">
              <Mail size={16} />
              Contato
            </Button>
          </Link>

          <a
            href="https://www.linkedin.com/in/rafaelalmendraa/"
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="outline" className="gap-1">
              <Linkedin size={16} /> LinkedIn
            </Button>
          </a>
        </div>

        <HeroCarousel />
      </main>
    </>
  );
};

export default Home;
