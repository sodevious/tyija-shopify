import S from '@sanity/desk-tool/structure-builder'
import {UsersIcon} from '@sanity/icons'

// prettier-ignore
export const customers = S.listItem()
  .title('Customers')
  .icon(UsersIcon)
  .schemaType('customer')
  .child(
    S.documentTypeList('customer')
  )
