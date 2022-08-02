import { ComposeIcon } from '@sanity/icons'
import React from 'react'

const superscriptIcon = () => (
  <sup>123</sup>
  )
const superscriptRender = props => (
  <sup style={{ fontWeight: 'bold' }}>{props.children}</sup>
)
  
export default {
  title: 'Paragraph',
  name: 'paragraphRichtext',
  type: 'object',
  icon: ComposeIcon,

  fields: [
    {
      title: 'Rich text',
      name: 'body',
      type: 'array',
      of: [{
        type: 'block',
        styles: [
          { title: 'Paragraph', value: 'normal' },
          { title: 'H1', value: 'h1' },
          { title: 'H2', value: 'h2' },
          { title: 'H3', value: 'h3' },
          { title: 'H4', value: 'h4' },
          { title: 'H5', value: 'h5' },
          { title: 'Quote', value: 'blockquote' },
          // { title: 'Footnote', value: 'footnote' }
        ],
        marks: {
          decorators: [
            {title: 'Strong', value: 'strong'},
            {title: 'Emphasis', value: 'em'},
            {title: 'Underline', value: 'underline'},
            { 
              title: 'Superscript',
              value: 'sup',
              blockEditor: {
                icon: superscriptIcon,
                render: superscriptRender
              }
            }
          ]
        }
      },
      {
        name: 'footnote',
        title: 'Footnote',
        type: 'object',
        options: {
          inline: true
        },
        fields: [
          {
            title: 'Footnote',
            name: 'footnote',
            type: 'array',
            of: [
              {
                type: 'block',
                lists: [],
                styles: [],
                marks: {
                  decorators: [
                    {title: 'Strong', value: 'strong'},
                    {title: 'Emphasis', value: 'em'}
                  ],
                  annotations: []
                }
              }
            ]
          }
        ]
      }
      ]
    }
  ]
}