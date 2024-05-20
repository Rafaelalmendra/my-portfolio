import Link from 'next/link';

import type { ProjectType } from 'types';

import { Button, ProjectCard } from 'components';

type RecentProjectsProps = {
  projects: ProjectType[];
};

const RecentProjects = ({ projects }: RecentProjectsProps) => {
  return (
    <section className="w-full flex items-center justify-center">
      <div className="max-w-7xl w-full flex flex-col justify-center">
        <p>Últimos projetos</p>

        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-7 mt-3">
          {projects.map((item) => (
            <ProjectCard key={item.id} data={item} />
          ))}
        </div>

        <div className="w-full flex items-center justify-center">
          <Link href="/works" className="w-full lg:w-auto">
            <Button className="w-full lg:w-auto mt-5">Visualizar todos</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export { RecentProjects };
