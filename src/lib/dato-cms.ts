/* eslint-disable @typescript-eslint/no-explicit-any */

const API_URL = 'https://graphql.datocms.com/';
const API_TOKEN = process.env.NEXT_PUBLIC_DATOCMS_READ_ONLY_API_TOKEN;

const fetchDatoCms = async (query: string, variables?: any) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
    next: { revalidate: 3600 },
  });

  const json = await res.json();

  if (json.errors) {
    console.error(json.errors);
  }

  return json.data;
};

export { fetchDatoCms };
