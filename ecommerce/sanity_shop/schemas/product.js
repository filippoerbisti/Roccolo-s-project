// Create schema for product (wines)

export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [ 
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{ type: 'image' }],
            options: {
                hotspot: true,
            },
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 90,
            }
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
        },
        {
            title: 'Rating',
            name: 'rating',
            // title: 'Rating (0 - 10)',
            type: 'number'
        },
        {
            name: 'details',
            title: 'Details',
            type: 'string',
        },
    ],
    orderings: [
        {
            name: 'priceDesc',
            title: 'Price, Desc',
            by: [
                {field: 'price', direction: 'desc'}
            ]
        },
        {
            name: 'priceAsc',
            title: 'Price, Asc',
            by: [
                {field: 'price', direction: 'asc'}
            ]
        },
        {
            title: 'Rating',
            name: 'rating',
            by: [
              {field: 'rating', direction: 'desc'}
            ]
        }
    ],
    // preview: {
    //     select: {
    //       title: 'Slug',
    //       rating: 'rating'
    //     },
    //     prepare(product, viewOptions = {}) {
    //       const title = viewOptions.ordering && viewOptions.ordering.name === 'rating'
    //       ? `${product.title} (${product.rating})`
    //       : product.title
    //       console.log(title)
    
    //       return {title: title}
    //     }
    // }
}