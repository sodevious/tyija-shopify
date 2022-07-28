import { ImageIcon } from '@sanity/icons';

export default {
  title: 'Image with Text',
  name: 'imageAndParagraph',
  type: 'document',
  icon: ImageIcon,
  fields: [
    // {
    //   name: 'imageGallery',
    //   title: 'Image Gallery',
    //   type: 'imageGallery',
    // },
    // {
    //   title: 'Image Placement',
    //   name: 'imagePlacement',
    //   type: 'string',
    //   options: {
    //       list: [
    //           { title: 'Half Image (Left)', value: 'halfLeft' },
    //           { title: 'Half Image (Right)', value: 'halfRight' },
    //           { title: 'Two-Thirds Image (Left)', value: 'twoThirdsLeft' },
    //           { title: 'Two-Thirds Image (Right)', value: 'twoThirdsRight' }
    //       ]
    //   }
    // },
    {
      title: 'Background Color',
      name: 'backgroundColor',
      type: 'string',
      options: {
          list: [
              { title: 'White', value: 'bg-ls-white' },
              { title: 'Gray', value: 'bg-ls-gray' },
              { title: 'Blue', value: 'bg-ls-secondary' },
              { title: 'Yellow', value: 'bg-ls-tertiary' }
          ]
      }
    },
    {
      name: 'headerText',
      title: 'Header Text',
      type: 'string',
    },
    // {
    //   name: 'bodyText',
    //   title: 'Body Text',
    //   type: 'longFormText',
    //   description: 'This displays to the side of the image and below the header text'
    // },
    
    {
      title: 'Button',
      name: 'button',
      type: 'object',
      description: 'To omit button element, leave fields blank',
      fields: [
          {
              title: 'Text',
              name: 'text',
              type: 'string',
              // validation: Rule => Rule.required()
          },
          // {
          //   title: 'Link',
          //   name: 'link',
          //   type: 'object',
          //   // description: '',
          //   fields: [
          //     {
          //       title: 'External URL',
          //       name: 'external',
          //       type: 'url',
          //       description: 'URL must start with http:// or https://',
          //       hidden: ({ parent, value }) => !value && parent?.internal
          //     },
          //     {
          //       title: 'Internal Page',
          //       name: 'internal',
          //       type: 'reference',
          //       to: [{ type: 'pageSO' }, {type: 'navPage'}, {type: 'about'}, {type: 'happening'}, {type: 'store'}, {type: 'farms'}, {type: 'team'}],
          //       hidden: ({ parent, value }) => !value && parent?.external
          //     }
          //   ]
          // },
          // {
          //     title: 'Open in a new window?',
          //     name: 'newWindow',
          //     type: 'boolean'
          // }
      ]
    }
  ],
  initialValue: {
    imagePlacement: 'halfLeft',
    backgroundColor: 'bg-ls-white'
  },
  preview: {
    select: {
      subtitle: 'headerText'
    },
    prepare({ subtitle = 'Untitled' }) {

      return {
        title: 'Image with Text',
        subtitle: subtitle
      }
    }
  }
}