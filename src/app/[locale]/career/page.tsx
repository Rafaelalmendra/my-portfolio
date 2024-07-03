import type { Metadata, NextPage } from 'next';

import { CareerView } from 'views';

export const metadata: Metadata = {
  title: 'Rafael Almendra | Career',
};

const Career: NextPage = async () => {
  return <CareerView />;
};

export default Career;
