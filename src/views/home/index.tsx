import { useTranslations } from 'next-intl';

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
  const t = useTranslations('Home');

  return (
    <main
      className="w-full flex flex-col items-center justify-center px-4 lg:px-0"
      style={{
        marginTop: 'calc(4.625rem + 3.625rem)',
      }}
    >
      <HeroTexts />
      <HeroCarousel />

      {/* <Button variant="link" className="gap-2 mt-8 mb-[48px]">
        <ArrowDownToLine size={16} /> {t('resumeDownload')}
      </Button> */}

      {projects && projects.length > 0 && (
        <RecentProjects projects={projects} />
      )}

      {clients && clients.length > 0 && <ClientsCarousel clients={clients} />}
    </main>
  );
};

export { HomeView };
