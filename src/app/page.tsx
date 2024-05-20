import type { NextPage } from 'next';

import { getRecentProjects } from 'queries';

import { HomeView } from 'views';

const Home: NextPage = async () => {
  const projects = await getRecentProjects();

  return <HomeView projects={projects} />;
};

export default Home;
