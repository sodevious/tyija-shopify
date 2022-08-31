import { DocumentIcon } from '@sanity/icons'
import { validateSlug } from '../../utils/validateSlug'

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
      name: 'handle',
      type: 'slug',
      options: { source: 'title' },
      description: "It's important to keep the handle URL in sync with the one in Shopify. If you change the handle URL, the article will not be published in Shopify.",
      validation: validateSlug,
    },
    {
      title: 'Article Modules',
      name: 'page_modules',
      type: 'array',
      of: [
        { type: 'picture' },
        { type: 'horizontalRule' },
        { type: 'paragraphRichtext' },
        { type: 'imageWithText' }
      ]
    }

  ],
  preview: {
    select: {
      active: 'active',
      title: 'title',
    },
    prepare(selection) {
      const { seoImage, title } = selection

      return {
        media: seoImage,
        title,
      }
    },
  },
}



