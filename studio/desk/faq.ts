import S from '@sanity/desk-tool/structure-builder'
import {UlistIcon} from '@sanity/icons'

// prettier-ignore
export const faq = S.listItem()
  .title('FAQ')
  .icon(UlistIcon)
  .schemaType('faqCategory')
  .child(
    S.documentTypeList('faqCategory')
  )

