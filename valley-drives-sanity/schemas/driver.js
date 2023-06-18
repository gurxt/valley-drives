import { defineType } from 'sanity'

export default defineType({
    name: 'driver',
    title: 'Driver',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule) => Rule.required().max(50)
        },
        {
            name: 'phone',
            title: 'Phone Number',
            type: 'string',
            validation: (Rule) => Rule.required().length(10)
        },
        {
            name: 'location',
            title: 'Location',
            type: 'object',
            fields: [
                {
                    name: 'longitude',
                    title: 'Longitude',
                    type: 'number'
                },
                {
                    name: 'latitude',
                    title: 'Latitude',
                    type: 'number'
                },
            ]
        },
        {
            name: 'avatar',
            title: 'Avatar',
            type: 'image',
            options: {
                hotspot: true
            },
            validation: (Rule) => Rule.required()
        },
        {
            name: 'vehicle',
            title: 'Vehicle',
            type: 'image',
            options: {
                hotspot: true
            },
            validation: (Rule) => Rule.required()
        },
    ]

})
