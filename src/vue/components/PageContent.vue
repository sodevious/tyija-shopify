<script>
import { SanityBlocks } from 'sanity-blocks-vue-component';
import SingleImage from './editorial/SingleImage.vue';
import ImageWithText from './editorial/ImageWithText.vue';

export default {
  name: 'PageContent',
  components: { SanityBlocks, ImageWithText, SingleImage },
  props: {
    handle: String
  },
  data() {
    return {
      pageBody: [],
    }
  },
  async mounted() {
    const query = `*[_type == "page" && handle.current == "${this.handle}"][0]`
    this.pageBody = await this.sanity.fetch(query)
    console.log(this.pageBody)
  },
}
</script>

<template>
  <template v-if="pageBody">
    <template
      v-for="section in pageBody.page_modules"
      :key="section._key"
    >
      {{ section }}
      <ImageWithText
        v-if="section._type == 'imageWithText'"
        :section-data="section"
      />
      <SingleImage
        v-else-if="section._type == 'picture'"
        :section-data="section"
      />
      <SanityBlocks
        v-else-if="section._type == 'paragraphRichtext'"
        :blocks="section.body"
      />
      <p v-else>
        {{ section._type }}
      </p>
    </template>
  </template>
  <section
    v-else
    class="p-4 md:p-8"
  >
    <!-- Fallback for Shopify content -->
    <slot />
  </section>
</template>