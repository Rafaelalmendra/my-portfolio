import Image from 'next/image';

import { TypingAnimation } from 'components';

const Building = () => {
  return (
    <main className="w-full min-h-[50vh] lg:min-h-[55vh] flex flex-col items-center justify-center px-4 lg:px-0">
      <div className="relative w-full h-[148px] lg:w-[300px] lg:h-[200px]">
        <Image
          fill
          src="/vectors/build-vector.svg"
          alt="Building vector"
          className="object-contain"
        />
      </div>

      <TypingAnimation
        className="text-3xl lg:text-4xl font-semibold mt-4 lg:mt-2 text-center"
        text="Página em construção"
      />

      <TypingAnimation
        className="mt-2 text-base font-normal text-center"
        text="Em breve teremos novidades por aqui."
      />
    </main>
  );
};

export { Building };
