<script>
import { SanityBlocks } from 'sanity-blocks-vue-component';
import ImageWithSplat from './editorial/imageWithSplat.vue';

export default {
  name: 'BlogPost',
  components: { SanityBlocks, ImageWithSplat },
  props: {
    handle: String
  },
  data() {
    return {
      postContent: [],
    }
  },

  async mounted() {
    const query = `*[_type == "article" && handle.current == "${this.handle}"][0]`

    this.postContent = await this.sanity.fetch(query)
  },
}
</script>

<template>
  <div v-if="postContent" v-for="section in postContent.page_modules">
    <ImageWithSplat v-if="section._type == 'article.splat'" :section-data="section" />

    <p v-else>
      {{ section._type }}
    </p>
  </div>
  <div v-else>
    <!-- Fallback for Shopify content -->
    <slot />
  </div>
</template>