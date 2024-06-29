'use client';

import { useRef } from 'react';
import Image from 'next/image';

import Autoplay from 'embla-carousel-autoplay';
import { useTranslations } from 'next-intl';

import type { ClientType } from 'types';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from 'components';

type ClientsCarouselProps = {
  clients: ClientType[];
};

const ClientsCarousel = ({ clients }: ClientsCarouselProps) => {
  const t = useTranslations('Home');
  const plugin = useRef(Autoplay({ delay: 1500, stopOnInteraction: true }));

  return (
    <div className="max-w-7xl w-full flex flex-col items-center justify-center overflow-hidden my-[54px] lg:my-[70px]">
      <h2 className="lg:max-w-[542px] text-center text-xl lg:text-3xl font-semibold mb-4 lg:mb-8">
        {t('clientsMessage')}
      </h2>

      <Carousel
        plugins={[plugin.current]}
        className="w-full opacity-45 dark:opacity-30"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="gap-2 lg:gap-6">
          {clients.map((item) => (
            <CarouselItem key={item.id} className="basis-1/3 lg:basis-1/6">
              <div className="w-full flex items-center justify-center px-2 py-1 rounded bg-transparent dark:bg-slate-50">
                <div className="relative w-[174px] h-[46px]">
                  <Image
                    fill
                    src={item.image.url}
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

export { ClientsCarousel };
