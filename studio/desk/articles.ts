import S from '@sanity/desk-tool/structure-builder'
import {FolderIcon} from '@sanity/icons'

// prettier-ignore
export const articles = S.listItem()
  .title('Articles')
  .icon(FolderIcon)
  .schemaType('article')
  .child(
    S.documentTypeList('article')
  )
