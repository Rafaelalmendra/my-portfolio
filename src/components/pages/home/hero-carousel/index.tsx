'use client';

import { useRef } from 'react';
import Image from 'next/image';

import Autoplay from 'embla-carousel-autoplay';

import { technologiesMock } from 'mocks';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from 'components';

const HeroCarousel = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <div className="max-w-2xl w-full flex items-center justify-center">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="gap-4">
          {technologiesMock.map((item) => (
            <CarouselItem key={item.id} className="basis-1/8">
              <div className="w-[3.375rem] h-[3.375rem] flex items-center justify-center rounded-[0.875rem] bg-[#0F172A]">
                <div className="relative w-[32px] h-[32px]">
                  <Image
                    fill
                    src={item.icon}
                    alt="Imagem da Tecnologia"
                    className="object-contain"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export { HeroCarousel };
