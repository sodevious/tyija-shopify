import { DocumentSheetIcon } from '@sanity/icons'

export default {
  title: 'Paragraph',
  name: 'article.paragraph',
  type: 'object',
  icon: DocumentSheetIcon,
  fields: [

    {
      name: 'paragraph',
      type: 'text',
      title: 'Paragraph',
    //   description: 'Describe the image to screen readers and for search engines',
      options: {
        isHighlighted: true
      }
    }
  ]
}