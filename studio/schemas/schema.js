// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Document types
import productVariant from './documents/productVariant'
import body from './blocks/body'

// Object types
import placeholderString from './objects/placeholderString'
import productOption from './objects/productOption'
import productWithVariant from './objects/productWithVariant'
import proxyString from './objects/proxyString'
import shopifyProduct from './objects/shopifyProduct'
import shopifyProductVariant from './objects/shopifyProductVariant'

// TYiJA DOCUMENTS
import article from './documents/article'
import customer from './documents/customer'
import faq from './documents/faq'
import faqCategory from './documents/faqCategory'
import page from './documents/page'
import product from './documents/product'

// TYiJA SINGLETONS
import home from './singletons/home'
import settings from './singletons/settings'

// TYiJA EDITORIAL
import horizontalRule from './objects/article/horizontalRule'
import picture from './objects/article/picture'
import paragraphRichtext from './objects/article/paragraphRichtext'
import imageWithText from './objects/article/imageWithText'
import imageWithSplat from './objects/article/imageWithSplat'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    article,
    customer,
    faq,
    faqCategory,
    page,
    product,
    productVariant,

    home,
    settings,

    body,
    picture,
    imageWithText,
    imageWithSplat,
    paragraphRichtext,
    horizontalRule,

    placeholderString,
    productOption,
    productWithVariant,
    proxyString,
    shopifyProduct,
    shopifyProductVariant,
  ]),
})
