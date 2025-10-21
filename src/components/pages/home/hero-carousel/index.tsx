'use client';

import { useRef } from 'react';
import Image from 'next/image';

import Autoplay from 'embla-carousel-autoplay';
import { useTranslations } from 'next-intl';

import { technologiesMock } from 'mocks';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from 'components';

const HeroCarousel = () => {
  const t = useTranslations('Home');
  const plugin = useRef(Autoplay({ delay: 1500, stopOnInteraction: true }));

  return (
    <div className="relative max-w-3xl w-full flex flex-col items-center justify-center space-y-4">
      <div className="text-center">
        <p className="text-sm lg:text-base font-medium text-gray-700 dark:text-gray-300 opacity-80">
          {t('technologiesUsed')}
        </p>
      </div>

      <div className="relative w-full flex items-center justify-center">
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{
            loop: true,
          }}
        >
          <CarouselContent className="gap-2">
            {technologiesMock.map((item) => (
              <CarouselItem key={item.id} className="basis-1/4 lg:basis-1/12">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200/50 dark:border-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200">
                  <div className="relative w-6 h-6">
                    <Image
                      fill
                      src={item.icon}
                      alt="Ícone de tecnologia"
                      className="object-contain"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="hidden lg:flex -left-8" />
          <CarouselNext className="hidden lg:flex -right-8" />
        </Carousel>
      </div>
    </div>
  );
};

export { HeroCarousel };
