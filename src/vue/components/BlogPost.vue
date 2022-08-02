<script>
import { SanityBlocks } from 'sanity-blocks-vue-component';
import ImageWithSplat from './editorial/ImageWithSplat.vue';
import ImageWithText from './editorial/ImageWithText.vue';
import Blockquote from './editorial/Blockquote.vue';

export default {
  name: 'BlogPost',
  components: { SanityBlocks, ImageWithSplat, ImageWithText },
  props: {
    handle: String
  },
  data() {
    return {
      postContent: [],
      serializers: {
        styles: {
          blockquote: Blockquote,
        }
      }
    }
  },
  async mounted() {
    const query = `*[_type == "article" && handle.current == "${this.handle}"][0] { 
        'page_modules': page_modules[]{  
          ...,
          _type == 'imageWithSplat' => {
            ...,
            "productSlug": product -> store.slug.current
          },
          _type == 'imageWithText' => {
            body[]{
            ...,
            _type == 'imageWithStyle' => {
              ...,
              imageWithSplat {
                ...,
                "productSlug": product -> store.slug.current
              }
            }
          }
        }
      }
    }`
    this.postContent = await this.sanity.fetch(query)
    console.log(this.postContent)
  },
}
</script>

<template>
  <template v-if="postContent" v-for="section in postContent.page_modules">
    <ImageWithSplat v-if="section._type == 'imageWithSplat'" :section-data="section" />
    <ImageWithText v-else-if="section._type == 'imageWithText'" :section-data="section" />
    <SanityBlocks v-else-if="section._type == 'paragraphRichtext'" :blocks="section.body" :serializers="serializers" />
    <p v-else>
      {{ section._type }}
    </p>
  </template>
  <section v-else class="p-4 md:p-8">
    <!-- Fallback for Shopify content -->
    <slot />
  </section>
</template>