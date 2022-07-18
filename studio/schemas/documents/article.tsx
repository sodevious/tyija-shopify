import {validateSlug} from '../../utils/validateSlug'

export default {
    name: 'article',
    type: 'document',
    title: 'Article',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Post Title'
      },
      {
        name: 'handle',
        type: 'slug',
        options: {source: 'title'},
        validation: validateSlug,
      },
      {
        name: 'summary_html',
        type: 'string',
        title: 'Post Summary/Subtitle'
      },
      {
        name: 'body',
        title: 'Body',
        type: 'body',
        // group: 'editorial',
      },
    ]
  }

  