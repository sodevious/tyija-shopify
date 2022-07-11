import {ImageIcon} from '@sanity/icons'

export default {
  name: 'hero.page',
  title: 'Page hero',
  type: 'object',
  fields: [
    // Title
    {
      name: 'title',
      title: 'Title',
      type: 'text',
      rows: 3,
    },
    // Content
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      validation: (Rule) => Rule.max(1),
      of: [
        {
          name: 'productWithVariant',
          title: 'Product with variant',
          type: 'productWithVariant',
        },
        {
          icon: ImageIcon,
          name: 'image',
          title: 'Image',
          options: {hotspot: true},
          type: 'image',
        },
      ],
    },
  ],
}
