import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// To connect to Sanity.io
// https://www.sanity.io/manage/personal/project/2ognk6zd
export const client = sanityClient({
    projectId: '2ognk6zd',
    dataset: 'production',
    apiVersion: '2022-06-01',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);