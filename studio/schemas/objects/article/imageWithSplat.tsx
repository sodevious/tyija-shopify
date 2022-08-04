import {ImageIcon} from '@sanity/icons'

export default {
  name: 'imageWithSplat',
  title: 'Product Splat',
  type: 'object',
  icon: ImageIcon,
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'picture',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'product',
      type: 'reference',
      to: [{type: 'product'}],
      weak: true,
      options: {
        disableNew: true,
      },
      description: 'Optional',
      isHighlighted: true, // <-- make this field easily accessible
    }
  ],
  preview: {
    select: {
      subtitle: 'product.store.title',
      image: 'image.image',
    },
    prepare(selection) {
      const { subtitle, image } = selection

      return {
        media: image,
        title: 'Product Splat',
        subtitle: subtitle
      }
    }
  }
}
