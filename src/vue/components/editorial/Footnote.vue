<template>
  <small class="article-footnote">
    <SanityBlocks :blocks="footnote" />
  </small>
</template>

<script>
import { SanityBlocks } from 'sanity-blocks-vue-component';

export default {
    name: "Footnote",
    components: { SanityBlocks },
    props: ['footnote'],
}
</script>