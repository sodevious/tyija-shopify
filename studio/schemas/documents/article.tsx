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
        title: 'Article Modules',
        name: 'page_modules',
        type: 'array',
        of: [
          // must be objects
          { type: 'imageWithSplat' }, // object
          { type: 'paragraphRichtext' }, // object
          { type: 'imageWithText',
         }, // object 
        ],
      },
    ]
  }
