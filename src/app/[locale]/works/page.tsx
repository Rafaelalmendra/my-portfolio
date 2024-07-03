import type { Metadata, NextPage } from 'next';

import { getProjects } from 'queries';

import { WorksView } from 'views';

export const metadata: Metadata = {
  title: 'Rafael Almendra | Works',
};

const Works: NextPage = async () => {
  const projects = await getProjects();

  return <WorksView projects={projects} />;
};

export default Works;
