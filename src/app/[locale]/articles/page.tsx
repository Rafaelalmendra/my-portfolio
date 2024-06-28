import type { Metadata, NextPage } from 'next';

import { ArticlesView } from 'views';

export const metadata: Metadata = {
  title: 'Rafael Almendra | Articles',
};

const Articles: NextPage = async () => {
  return <ArticlesView />;
};

export default Articles;
