import S from '@sanity/desk-tool/structure-builder'

// prettier-ignore
export const faq = S.listItem()
  .title('FAQ')
  .schemaType('faqCategory')
  .child(
    S.documentTypeList('faqCategory')
  )
