import type { Metadata, NextPage } from 'next';

import { AboutView } from 'views';

export const metadata: Metadata = {
  title: 'Rafael Almendra | About',
};

const About: NextPage = async () => {
  return <AboutView />;
};

export default About;
