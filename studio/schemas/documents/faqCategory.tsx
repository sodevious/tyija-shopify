import {validateSlug} from '../../utils/validateSlug'

export default {
    name: 'faqCategory',
    type: 'document',
    title: 'Category',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Group Title'
      },
      {
        name: 'slug',
        type: 'slug',
        options: {source: 'title'},
        validation: validateSlug,
      },
      {
        name: 'questions',
        type: 'array',
        title: 'Questions and Answers',
        of: [
          {
            type: 'faq'
          }
        ]
      }
    ]
  }