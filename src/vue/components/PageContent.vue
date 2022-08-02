<script>
import { SanityBlocks } from 'sanity-blocks-vue-component';
import Picture from './editorial/Picture.vue';
import ImageWithText from './editorial/ImageWithText.vue';

export default {
    name: 'PageContent',
    components: { SanityBlocks, ImageWithText, Picture },
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
    <template v-if="pageBody" v-for="section in pageBody.page_modules">
        <ImageWithText v-if="section._type == 'imageWithText'" :section-data="section" />
        <Picture v-else-if="section._type == 'picture'" :section-data="section" />
        <SanityBlocks v-else-if="section._type == 'paragraphRichtext'" :blocks="section.body" />
        <p v-else>
            {{ section._type }}
        </p>
    </template>
    <section v-else class="p-4 md:p-8">
        <!-- Fallback for Shopify content -->
        <slot />
    </section>
</template>