import { createClient } from 'next-sanity';

export const sanityClient = createClient({
  projectId: '1etqlj0y',
  dataset: 'production',
  apiVersion: '2023-06-01',
  useCdn: false,
});
