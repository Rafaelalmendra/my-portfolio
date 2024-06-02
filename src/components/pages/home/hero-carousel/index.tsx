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
  const plugin = useRef(Autoplay({ delay: 1500, stopOnInteraction: true }));

  return (
    <div className="relative max-w-3xl w-full flex items-center justify-center overflow-hidden ">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="gap-2 lg:gap-6">
          {technologiesMock.map((item) => (
            <CarouselItem key={item.id} className="basis-1/4 lg:basis-1/12">
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

      <div
        className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-2"
        style={{ marginBottom: '-1.5rem', background: 'rgba(0, 0, 0, 0.5)' }}
      />
    </div>
  );
};

export { HeroCarousel };
