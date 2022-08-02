<template>
    <small class="article-footnote">
        <SanityBlocks :blocks="footnote" />
    </small>
</template>

<script>
import { SanityBlocks } from 'sanity-blocks-vue-component';

export default {
    components: { SanityBlocks },
    name: "Footnote",
    props: ['footnote'],
}
</script>