import S from '@sanity/desk-tool/structure-builder'

// prettier-ignore
export const customers = S.listItem()
  .title('Customers')
  .schemaType('customer')
  .child(
    S.documentTypeList('customer')
  )
