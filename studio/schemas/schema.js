// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Rich text annotations used in the block content editor
import annotationLinkEmail from './annotations/linkEmail'
import annotationLinkExternal from './annotations/linkExternal'
import annotationLinkInternal from './annotations/linkInternal'
import annotationProduct from './annotations/product'

// Document types
import article from './documents/article'
import collection from './documents/collection'
import colorTheme from './documents/colorTheme'
import page from './documents/page'
import product from './documents/product'
import productVariant from './documents/productVariant'
import customer from './documents/customer'
import faqCategory from './documents/faqCategory'

// Singleton document types
import home from './singletons/home'
import settings from './singletons/settings'

// Block content
import body from './blocks/body'
import faq from './documents/faq'
// import * as modules from './modules'
import imageFull from './modules/imageFull'
import articleParagraph from './modules/paragraph'
// export { default as imageFull } from './imageFull'

// Object types
import collectionRule from './objects/collectionRule'
import customProductOptionColor from './objects/customProductOption/color'
import customProductOptionSize from './objects/customProductOption/size'
import linkExternal from './objects/linkExternal'
import linkInternal from './objects/linkInternal'
import heroCollection from './objects/hero/collection'
import heroHome from './objects/hero/home'
import heroPage from './objects/hero/page'
import moduleAccordion from './objects/module/accordion'
import moduleCallout from './objects/module/callout'
import moduleCallToAction from './objects/module/callToAction'
import moduleCollection from './objects/module/collection'
import moduleGrid from './objects/module/grid'
import moduleImage from './objects/module/image'
import moduleImages from './objects/module/images'
import moduleInstagram from './objects/module/instagram'
import moduleProduct from './objects/module/product'
import moduleProducts from './objects/module/products'
import placeholderString from './objects/placeholderString'
import productOption from './objects/productOption'
import productWithVariant from './objects/productWithVariant'
import proxyString from './objects/proxyString'
import seoHome from './objects/seo/home'
import seoPage from './objects/seo/page'
import seoShopify from './objects/seo/shopify'
import shopifyCollection from './objects/shopifyCollection'
import customerSizes from './objects/customerSizes'
import shopifyProduct from './objects/shopifyProduct'
import shopifyProductVariant from './objects/shopifyProductVariant'

// Build the schemas and export to the Sanity Studio app
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // Annotations
    annotationLinkEmail,
    annotationLinkExternal,
    annotationLinkInternal,
    annotationProduct,
    // Document types
    collection,
    page,
    product,
    productVariant,
    faq,
    // Singleton document types
    home,
    settings,
    // Block content
    customer,
    article,
    body,
    faqCategory,
    // Modules
    imageFull,
    articleParagraph,
    // Objects
    collectionRule,
    customerSizes,
    colorTheme,
    customProductOptionColor,
    customProductOptionSize,
    heroCollection,
    heroHome,
    heroPage,
    linkExternal,
    linkInternal,
    moduleAccordion,
    moduleCallout,
    moduleCallToAction,
    moduleCollection,
    moduleGrid,
    moduleImage,
    moduleImages,
    moduleInstagram,
    moduleProduct,
    moduleProducts,
    placeholderString,
    productOption,
    productWithVariant,
    proxyString,
    seoHome,
    seoPage,
    seoShopify,
    shopifyCollection,
    shopifyProduct,
    shopifyProductVariant,
  ]),
})
