<template>
  <small class="article-footnote">
    <SanityBlocks :blocks="footnote" />
  </small>
</template>

<script>
import { SanityBlocks } from 'sanity-blocks-vue-component';

export default {
    name: "ArticleFootnote",
    components: { SanityBlocks },
    props: {
    footnote: {
        type: Object,
        default: function() {
          return {}
        }
      }
    }
}
</script>