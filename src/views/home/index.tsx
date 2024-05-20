import type { ClientType, ProjectType } from 'types';

import {
  Button,
  ClientsCarousel,
  HeroCarousel,
  HeroTexts,
  RecentProjects,
} from 'components';

import { ArrowDownToLine } from 'lucide-react';

type HomeViewProps = {
  projects: ProjectType[];
  clients: ClientType[];
};

const HomeView = ({ projects, clients }: HomeViewProps) => {
  return (
    <main className="w-full flex flex-col items-center justify-center px-4 lg:px-0">
      <HeroTexts />
      <HeroCarousel />

      <Button variant="link" className="gap-2 mt-8 mb-[48px]">
        <ArrowDownToLine size={16} /> Baixar Currículo
      </Button>

      {projects && projects.length > 0 && (
        <RecentProjects projects={projects} />
      )}

      {clients && clients.length > 0 && <ClientsCarousel clients={clients} />}
    </main>
  );
};

export { HomeView };
