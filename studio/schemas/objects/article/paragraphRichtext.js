import {ComposeIcon} from '@sanity/icons'

export default  {
    title: 'Paragraph',
    name: 'paragraphRichtext',
    type: 'object',
    icon: ComposeIcon,

    fields: [
      {
        title: 'Rich text',
        name: 'body',
        type: 'array',
        of: [{type: 'block'}]
      }
    ]
  }