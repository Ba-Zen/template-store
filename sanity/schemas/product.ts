import {defineField, defineType} from 'sanity'

export const product = defineField({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    {
      title: 'Product Type',
      name: 'productType',
      type: 'string',
      options: {
        list: [
          {title: 'Template', value: 'template'},
          {title: 'Course', value: 'course'},
          {title: 'Merch', value: 'merch'},
        ], // <-- predefined values
        // layout: 'radio' // <-- defaults to 'dropdown'
      },
    },
    defineField({
      title: 'Category',
      name: 'category',
      type: 'reference',
      to: [{type: 'category'}],
    }),
    defineField({
      name: 'currency',
      title: 'Currency',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'string',
    }),
    defineField({
      name: 'buyUrl',
      type: 'url',
      title: 'Buy URL',
      description: 'Payment Link from Stripe',
    }),
    defineField({name: 'linkUrl', type: 'url', title: 'Live Preview URL'}),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
    }),
    defineField({
      name: 'mobileImage',
      title: 'Mobile image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'image'}],
    }),
    defineField({
      name: 'imageBlocks',
      title: 'Image Blocks',
      description: 'Large promo images for product pages',
      type: 'array',
      of: [{type: 'image'}],
    }),
    defineField({
      title: 'Subheadline',
      description: 'The subheadline for this product',
      name: 'subheadline',
      type: 'text',
      rows: 5,
    }),
    defineField({
      title: 'Description',
      description: 'The description for this product',
      name: 'description',
      type: 'text',
      rows: 10,
    }),
    defineField({
      name: 'sku',
      title: 'Sku',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
  ],
})
