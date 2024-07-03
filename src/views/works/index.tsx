import { useTranslations } from 'next-intl';

import type { ProjectType } from 'types';

import { MotionDiv, WorkCard } from 'components';

type WorksViewProps = {
  projects: ProjectType[];
};

const WorksView = ({ projects }: WorksViewProps) => {
  const t = useTranslations('Works');

  console.log(projects);

  return (
    <main className="w-full min-h-screen flex flex-col items-center mt-[4.5rem] lg:mt-[5.25rem]">
      <div className="w-full flex flex-col items-center justify-center bg-[#F9F9F9] dark:bg-gray-900 px-4 lg:px-0 py-[18px] lg:py-[40px]">
        <h1 className="text-2xl lg:text-[42px] font-semibold text-center mb-[8px] lg:mb-[14px]">
          {t('title')}
        </h1>
        <p className="lg:max-w-[800px] text-[12px] lg:text-base text-center text-gray-800 dark:text-gray-300">
          {t('description')}
        </p>
      </div>

      {projects && projects.length > 0 && (
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full flex items-center justify-center my-[40px] px-4 lg:px-0"
        >
          <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-6">
            {projects.map((project) => (
              <WorkCard
                key={project.id}
                title={project.title}
                image={project.image.url}
                description={project.description}
                tags={project.technologies.map((tech) => tech.technologie)}
              />
            ))}
          </div>
        </MotionDiv>
      )}
    </main>
  );
};

export { WorksView };
