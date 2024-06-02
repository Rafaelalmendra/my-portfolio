import type { Metadata, NextPage } from 'next';

import { ContactView } from 'views';

export const metadata: Metadata = {
  title: 'Rafael Almendra | Contact',
};

const Contact: NextPage = async () => {
  return <ContactView />;
};

export default Contact;
