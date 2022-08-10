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
    },
    {
      title: 'Splat Position',
      name: 'position',
      type: 'string',
      options: {
        isHighlighted: true,
        list: [
          { title: 'Bottom Left', value: 'left-8 bottom-8' },
          { title: 'Bottom Center', value: 'bottom-8 left-0 right-0' },
          { title: 'Bottom Right', value: 'right-8 bottom-8' },
          { title: 'Top Left', value: 'top-8 left-8' },
          { title: 'Top Center', value: 'top-8 left-0 right-0' },
          { title: 'Top Right', value: 'top-8 right-8' }
        ]
      }
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
