import { defineType } from 'sanity'

export default defineType({
    name: 'user',
    title: 'User',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule) => Rule.required().max(50)
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string',
            validation: (Rule) => Rule.required().email()
        },
        {
            name: 'password',
            title: 'Password',
            type: 'string', // [TODO] authentication.
            validation: (Rule) => Rule.required().min(8)
        },
        {
            name: 'avatar',
            title: 'Avatar',
            type: 'image',
            options: {
                hotspot: true
            },
            /*
            defaultValue: {
                _type: 'image',
                asset: {
                    _ref: ''
                }
            },
            */
            validation: (Rule) => Rule.required()
        }
    ]

})
