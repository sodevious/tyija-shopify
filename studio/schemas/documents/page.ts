import {DocumentIcon} from '@sanity/icons'
import {validateSlug} from '../../utils/validateSlug'

export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    // Title
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    // Slug
    {
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: validateSlug,
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

  ],
  preview: {
    select: {
      active: 'active',
      seoImage: 'seo.image',
      title: 'title',
    },
    prepare(selection) {
      const {seoImage, title} = selection

      return {
        media: seoImage,
        title,
      }
    },
  },
}



