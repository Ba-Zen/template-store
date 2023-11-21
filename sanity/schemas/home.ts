import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'singletonHome',
  title: 'Home',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name: 'product',
      title: 'Featured Product',
      type: 'reference',
      to: [{type: 'product'}],
    }),
  ],
})
