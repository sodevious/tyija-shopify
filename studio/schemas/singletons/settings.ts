import {CogIcon, PackageIcon} from '@sanity/icons'
import staticText from '../../components/inputs/CustomString'

const TITLE = 'Settings'

export default {
  name: 'settings',
  title: TITLE,
  type: 'document',
  icon: CogIcon,
  fields: [
    {
      name: 'seoHelper',
      title: 'SEO',
      type: 'string',
      value: "Site-wide page title and description can be defined in the Shopify theme preferences.",
      link: "https://tyija.myshopify.com/admin/online_store/preferences?channel=true",
      linkText: "See SEO settings",
      inputComponent: staticText
    },
    {
      name: 'translateHelper',
      title: 'Copy',
      type: 'string',
      value: "Most text strings on the site are defined in the English translation schema. This is a standard practice Shopify pattern for stores that have multiple languages.",
      link: "https://tyija.myshopify.com/admin/themes/133627117796/language",
      linkText: "Edit text in Shopify",
      inputComponent: staticText
    }
  ],
  preview: {
    prepare() {
      return {
        subtitle: 'Settings',
        title: TITLE,
      }
    },
  },
}
