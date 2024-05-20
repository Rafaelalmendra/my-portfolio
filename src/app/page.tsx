import type { NextPage } from 'next';

import { getClients, getRecentProjects } from 'queries';

import { HomeView } from 'views';

const Home: NextPage = async () => {
  const projects = await getRecentProjects();
  const clients = await getClients();

  return <HomeView projects={projects} clients={clients} />;
};

export default Home;
