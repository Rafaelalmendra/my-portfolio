import { fetchDatoCms } from 'lib';

const getClients = async () => {
  const data = await fetchDatoCms(`
    {
      allCompanies {
        id
        image {
          url
        }
      }
    }
  `);

  return data.allCompanies;
};

export { getClients };
