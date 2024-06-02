import { fetchDatoCms } from 'lib';

const getRecentProjects = async () => {
  const data = await fetchDatoCms(`
    {
      allProjects(first: 3) {
        id
        image {
          url
          alt
        }
        title
        shortDescription
        deploy
        typeProject
      }
    }
  `);

  return data.allProjects;
};

const getProjects = async () => {
  const data = await fetchDatoCms(`
    {
      allProjects {
        id
        image {
          url
          alt
        }
        title
        description
        technologies {
          technologie
        }
        figma
        deploy
        github
        typeProject
      }
    }
  `);

  return data.allProjects;
};

export { getRecentProjects, getProjects };
