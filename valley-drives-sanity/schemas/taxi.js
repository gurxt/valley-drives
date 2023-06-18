import { defineType } from 'sanity'

export default defineType({
    name: 'taxi',
    title: 'Taxi',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Taxi name',
            type: 'string',
            validation: (Rule) => Rule.required().max(20)
        },
        {
            name: 'logo',
            title: 'Logo',
            type: 'image',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'theme',
            title: 'Color Schema',
            type: 'string',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'rating',
            title: 'Rating',
            type: 'number',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'rpm',
            title: 'Rate per minute',
            type: 'number',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'fee',
            title: 'Service fee',
            type: 'number',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'drivers',
            title: 'Drivers',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'driver'}] }]
        }
    ]
})