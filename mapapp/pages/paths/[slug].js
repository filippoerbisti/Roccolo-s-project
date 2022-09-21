import React, { useState, useEffect } from 'react';
import useTranslation from 'next-translate/useTranslation';

const PathDetails = ({ path }) => {

    const { title, details } = path;


    return (
        <div>
            <h1>{title}</h1>
            <p>{details}</p>
        </div>
    )
}

// export const getStaticPaths = async () => {
//     const query = `*[_type == "product"] {
//         slug { 
//              current 
//         } 
//     }`;

//     const products = await client.fetch(query);

//     const paths = products.map((product) => ({
//         params: {
//             slug: product.slug.current
//         }
//     }));

//     return {
//         paths,
//         fallback: 'blocking'
//     }
// }

// export const getStaticProps = async ({ params: { slug } }) => {
//     const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
//     const productsQuery = '*[_type == "product"]';

//     const product = await client.fetch(query);
//     const products = await client.fetch(productsQuery);
  
//     return {
//       props: { product, products }
//     }
// }

export default PathDetails