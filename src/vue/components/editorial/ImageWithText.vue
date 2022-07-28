
<script>
import ImageWithSplat from './ImageWithSplat.vue';
import { SanityBlocks } from 'sanity-blocks-vue-component';

export default {
    name: "ImageWithText",
    props: {
        sectionData: Object,
        default: () => {
            return {}
        }
    },
    components: {
        ImageWithSplat,
        SanityBlocks
    }
}
</script>

<template>
    <section class="md:grid grid-cols-2 items-center">
        <div v-for="subSection in sectionData.body">
            <SanityBlocks class="p-4" v-if="subSection._type == 'paragraphRichtext'" :blocks="subSection.body" />
            <ImageWithSplat v-else-if="subSection._type == 'imageWithStyle'" :section-data="subSection.imageWithSplat" :layout="subSection.imageStyle" />
        </div>
    </section>
</template>