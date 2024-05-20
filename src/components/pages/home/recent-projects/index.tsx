import type { ProjectType } from 'types';

type RecentProjectsProps = {
  projects: ProjectType[];
};

const RecentProjects = ({ projects }: RecentProjectsProps) => {
  console.log('data: ', projects);

  return (
    <section>
      <div></div>
    </section>
  );
};

export { RecentProjects };
