import { Button, HeroCarousel, HeroTexts } from 'components';

import { ArrowDownToLine } from 'lucide-react';

const HomeView = () => {
  return (
    <main className="w-full flex flex-col items-center justify-center px-4 lg:px-0">
      <HeroTexts />
      <HeroCarousel />

      <Button variant="link" className="mt-8 gap-2">
        <ArrowDownToLine size={16} /> Baixar Currículo
      </Button>
    </main>
  );
};

export { HomeView };
