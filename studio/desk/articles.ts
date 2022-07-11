import S from '@sanity/desk-tool/structure-builder'

// prettier-ignore
export const articles = S.listItem()
  .title('Articles')
  .schemaType('article')
  .child(
    S.documentTypeList('article')
  )
