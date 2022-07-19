import { ImageIcon } from '@sanity/icons'

export default {
  title: 'Image',
  name: 'article.imageFull',
  type: 'image',
  icon: ImageIcon,
  fields: [

    {
      name: 'altText',
      type: 'string',
      title: 'Alt Text',
      description: 'Describe the image to screen readers and for search engines',
      options: {
        isHighlighted: true
      }
    }
  ]
}