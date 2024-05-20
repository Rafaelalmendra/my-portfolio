import type { NextPage } from 'next';

import { getProjects } from 'queries';

import { HomeView } from 'views';

const Home: NextPage = async () => {
  const projects = await getProjects();

  return <HomeView projects={projects} />;
};

export default Home;
