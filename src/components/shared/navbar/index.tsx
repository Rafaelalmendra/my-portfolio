import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="w-full h-[4.625rem] flex items-center justify-center">
      <div className="max-w-7xl w-full flex items-center justify-between">
        <div className="flex items-center gap-7">
          <div className="relative w-[29px] h-[34px]">
            <Image
              layout="fill"
              className="object-contain"
              src="/logos/logo-simple-black.svg"
              alt="Logo do Rafael Almendra - Desenvolvedor Front-end"
            />
          </div>
        </div>

        <div className="flex items-center gap-3"></div>
      </div>
    </nav>
  );
};

export { Navbar };
