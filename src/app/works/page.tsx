import type { Metadata, NextPage } from 'next';

import { WorksView } from 'views';

export const metadata: Metadata = {
  title: 'Rafael Almendra | Works',
};

const Works: NextPage = async () => {
  return <WorksView />;
};

export default Works;
