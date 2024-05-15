import type { NextPage } from 'next';

import { Badge } from 'components';

const Home: NextPage = () => {
  return (
    <>
      <main className="w-full flex flex-col items-center justify-center">
        <Badge className="text-[#5E5E5E] bg-[#F4F4F5]">
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
      </main>
    </>
  );
};

export default Home;
