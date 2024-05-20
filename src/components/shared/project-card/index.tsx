import Image from 'next/image';

import type { ProjectType } from 'types';

type ProjectCardProps = {
  data: ProjectType;
};

const ProjectCard = ({ data }: ProjectCardProps) => {
  return (
    <div className="cursor-pointer hover:translate-y-[-2px] transition-transform">
      <div className="relative w-full h-[224px]">
        <Image
          fill
          src={data.image.url}
          alt={`Imagem do projeto ${data.title}`}
          className="object-cover rounded"
        />
      </div>

      <div className="w-full flex items-center justify-between mt-3">
        <p className="font-medium text-xl">{data.title}</p>
        <p className="text-sm font-light opacity-65">Freelancer</p>{' '}
        {/* TODO: ADJUST THIS */}
      </div>

      <p className="mt-2 text-justify text-sm opacity-90 font-light">
        {data.shortDescription}
      </p>
    </div>
  );
};

export { ProjectCard };
