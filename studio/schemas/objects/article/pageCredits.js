import {ImageIcon} from '@sanity/icons'

export default {
  name: 'pageCredits',
  title: 'Page Credits',
  type: 'object',
  icon: ImageIcon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
        name: 'credit_modules',
        type: 'array',
        of: [
          { type: 'paragraphRichtext' },
        ]
      },
  ]
}
