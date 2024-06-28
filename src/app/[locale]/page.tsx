import type { Metadata, NextPage } from 'next';

import { getClients, getRecentProjects } from 'queries';

import { HomeView } from 'views';

export const metadata: Metadata = {
  title: 'Rafael Almendra | Home',
};

const Home: NextPage = async () => {
  const projects = await getRecentProjects();
  const clients = await getClients();

  return <HomeView projects={projects} clients={clients} />;
};

export default Home;
