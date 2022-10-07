// Create schema for stage (paths)

export default {
    name: 'stage',
    title: 'Stage',
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
            name: 'icon',
            title: 'Icon',
            type: 'image',
        },
        {
            name: 'path',
            title: 'Path',
            type: 'string',
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
            },
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
        },
        {
            name: 'audio',
            title: 'Audio',
            type: 'file',
            options: {
                accept: 'audio/*',
            },
        }
    ]
}