import {HomeIcon} from '@sanity/icons'
import staticText from '../../components/inputs/CustomString'

const TITLE = 'Home'

export default {
  name: 'home',
  title: TITLE,
  type: 'document',
  icon: HomeIcon,
  fields: [
    {
      name: 'h1Helper',
      title: 'Design',
      type: 'string',
      value: "Homepage images are managed via Shopify blocks in the homepage's design editor.",
      link: "https://tyija.myshopify.com/admin/themes/133627117796/editor?section=template--16186174111972__main",
      linkText: "Edit template in Shopify",
      inputComponent: staticText
    },
    {
      name: 'navHelper',
      title: 'Navigation',
      type: 'string',
      value: "Navigation links are managed via Shopify's navigation editor.",
      link: "https://tyija.myshopify.com/admin/menus/203625726180",
      linkText: "Edit navigation in Shopify",
      inputComponent: staticText
    }
  ],
  preview: {
    prepare() {
      return {
        subtitle: 'Index',
        title: TITLE,
      }
    },
  },
}
