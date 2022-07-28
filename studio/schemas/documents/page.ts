import {DocumentIcon} from '@sanity/icons'
import {validateSlug} from '../../utils/validateSlug'

export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: DocumentIcon,
  // groups: [
  //   {
  //     name: 'theme',
  //     title: 'Theme',
  //   },
  //   {
  //     default: true,
  //     name: 'editorial',
  //     title: 'Editorial',
  //   },
  //   {
  //     name: 'seo',
  //     title: 'SEO',
  //   },
  // ],
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
      name: 'body',
      title: 'Body',
      type: 'body',
      // group: 'editorial',
    },

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
