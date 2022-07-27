import {ImageIcon} from '@sanity/icons'

export default {
  name: 'article.splat',
  title: 'Image with Splat',
  type: 'object',
  icon: ImageIcon,
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'product',
      type: 'reference',
      to: [{type: 'product'}],
      weak: true,
      validation: (Rule) => Rule.required()
    }
  ],
  preview: {
    select: {
      subtitle: 'product.store.title',
      image: 'image'
    },
    prepare(selection) {
      const { subtitle, image } = selection

      return {
        media: image,
        title: 'Image with Splat',
        subtitle: subtitle
      }
    }
  }
}
