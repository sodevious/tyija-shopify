import { RemoveIcon } from '@sanity/icons'
import staticText from '../../../components/inputs/CustomString'

export default  {
    title: 'Horizontal Rule',
    name: 'horizontalRule',
    type: 'object',
    icon: RemoveIcon,

    fields: [
        {
            name: 'hr',
            // title: 'Design',
            type: 'string',
            value: "This block will output a horizontal rule",
            // link: "https://tyija.myshopify.com/admin/themes/133627117796/editor?section=template--16186174111972__main",
            // linkText: "Edit template in Shopify",
            inputComponent: staticText
          }
    ],
    preview: {
        prepare(selection) {
            return {
                title: 'Horizontal Rule'
            }
        }
    }
  }




// import staticText from '../../../components/inputs/CustomString'

// export default {
//     title: 'Horizontal Rule',
//     name: 'horizontalRule',
//     type: 'object',
//     icon: RemoveIcon,

//     fields: [
//         {
//             name: 'hr',
//             type: 'string',
//             value: "This block will output a horizontal rule"
//         }
//     ],

// }




