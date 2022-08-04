import { ImageIcon, SplitVerticalIcon } from '@sanity/icons';

export default {
  title: 'Image & Text Columns',
  name: 'imageWithText',
  type: 'object',
  icon: SplitVerticalIcon,
  fields: [
    {
      title: 'Columns',
      name: 'body',
      description: 'Arrange them in the order you want them displayed',
      type: 'array',
      of: [
      {
        name: 'image',
        title: 'Image',
        type: 'picture',
      },
      {
        name: 'paragraphRichtext',
        title: 'Paragraph',
        type: 'paragraphRichtext',
      },
      {
        name: 'imageWithStyle',
        title: 'Product Splat',
        type: 'object',
        icon: ImageIcon,
        fields: [
          {
            name: 'imageWithSplat',
            type: 'imageWithSplat',
            options: {
              isHighlighted: true,
            }
          },
          {
            title: 'Image Style',
            name: 'imageStyle',
            type: 'string',
            description: 'Optional',
            options: {
              isHighlighted: true,
              list: [
                { title: 'Oval', value: 'oval' },
                { title: 'Rectangle', value: 'rectangle' }
              ]
            }
          }
        ],
        preview: {
          select: {
            title: 'title',
            subtitle: 'imageStyle',
            image: 'imageWithSplat.image'
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
      ]
    }
  ],
  preview: {
    prepare(selection) {
      return {
        title: 'Image with Paragraph',
      }
    }
  }
}