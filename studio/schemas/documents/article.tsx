import {validateSlug} from '../../utils/validateSlug'

export default {
    name: 'article',
    type: 'document',
    title: 'Article',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Article Title'
      },
      {
        name: 'handle',
        type: 'slug',
        title: 'URL Slug',
        description: '(required)',

        options: {source: 'title'},
        validation: validateSlug,
      },
      {
        name: 'summary_html',
        type: 'string',
        title: 'Article Summary/Subtitle'
      },
      {
        title: 'Article Modules',
        name: 'modules',
        type: 'array',
        of: [
          { type: 'article.imageFull' },
          { type: 'article.paragraph' },
          // { type: 'linkInternal' },
          // { type: 'module.products' },
          // { type: 'module.product' },
          // { type: 'module.instagram' },
          // { type: 'text' },
//           // { type: 'url' },
//           { type: 'text' ,
//           title: 'Full Width Image',
  
// },
          // { type: 'shortFormText' },
          // { type: 'singleImage' },
          // { type: 'horizontalRule' },
          // { type: 'headline' },
          // { type: 'mediaObject' },
          // { type: 'marqueeStrip' },
          // { type: 'spacer' },
          // { type: 'codeInject' },
          // { type: 'videoComponent' },
          // { type: 'blockInlineProduct'},
          // { type: 'audioObject' },
          // { type: 'newsletterModule' },
          // { type: 'mediaCarousel' },
          // { type: 'mediaSlideshow' },
          // { type: 'mediaGallery' },
        ]
      },
    ],
    preview: {
      select: {
        title: 'title',
        slug: 'slug'
      }
    }
  }

  