import {validateSlug} from '../../utils/validateSlug'

export default {
    name: 'article',
    type: 'document',
    title: 'Article',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        name: 'handle',
        type: 'slug',
        options: {source: 'title'},
        description: "It's important to keep the handle URL in sync with the one in Shopify. If you change the handle URL, the article will not be published in Shopify.",
        validation: validateSlug,
      },
      {
        name: 'summary_html',
        type: 'string',
        title: 'Article Summary/Subtitle'
      },
      {
        title: 'Article Modules',
        name: 'page_modules',
        type: 'array',
        of: [
          { type: 'imageWithSplat' },
          { type: 'paragraphRichtext' },
          { type: 'imageWithText' }
        ]
      }
    ]
  }
