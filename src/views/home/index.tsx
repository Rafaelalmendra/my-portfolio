import type { ProjectType } from 'types';

import { Button, HeroCarousel, HeroTexts, RecentProjects } from 'components';

import { ArrowDownToLine } from 'lucide-react';

type HomeViewProps = {
  projects: ProjectType[];
};

const HomeView = ({ projects }: HomeViewProps) => {
  return (
    <main className="w-full flex flex-col items-center justify-center px-4 lg:px-0">
      <HeroTexts />
      <HeroCarousel />

      <Button variant="link" className="mt-8 gap-2">
        <ArrowDownToLine size={16} /> Baixar Currículo
      </Button>

      {projects && projects.length > 0 && (
        <RecentProjects projects={projects} />
      )}
    </main>
  );
};

export { HomeView };
