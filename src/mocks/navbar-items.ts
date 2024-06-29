import { useTranslations } from 'next-intl';

const NavbarMock = () => {
  const t = useTranslations('Header');

  const navbarItems = [
    {
      id: 1,
      title: t('headerHome'),
      href: '/',
    },
    {
      id: 2,
      title: t('headerWorks'),
      href: '/works',
    },
    {
      id: 3,
      title: t('headerAbout'),
      href: '/about',
    },
    {
      id: 4,
      title: t('headerArticles'),
      href: '/articles',
    },
    {
      id: 5,
      title: t('headerContact'),
      href: '/contact',
    },
  ];

  return { navbarItems };
};

export { NavbarMock };
