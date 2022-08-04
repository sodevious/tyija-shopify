import {ImageIcon} from '@sanity/icons'

export default {
  name: 'picture',
  title: 'Image',
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
      title: 'Width',
      name: 'imageWidth',
      type: 'string',
      initialValue: 'full',
      options: {
        isHighlighted: true,
        list: [
          { title: 'Full Width', value: 'full' },
          { title: '2/3 Width', value: '2/3' },
          { title: '1/2 Width', value: '1/2' }
        ]
      }
    }
  ],
  preview: {
    select: {
      width: 'imageWidth',
      image: 'image'
    },
    prepare(selection) {
      const { width, image } = selection

      console.log(image)
      return {
        title: 'Image',
        subtitle: 'Width: ' + width,
        media: image
      }
    }
  }
}
