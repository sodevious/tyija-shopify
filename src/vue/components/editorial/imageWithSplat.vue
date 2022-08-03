<template>
    <section class="relative" :class="'article-image-' + layout">
        <Image :section-data="sectionData" />

        <a :href="'/products/' + sectionData.productSlug" v-if="sectionData.product"
            class="absolute z-20 bottom-8  text-yellow" :class="[layout == 'full' ? 'left-8' : 'w-full']">
            <svg class="w-20 h-20 mx-auto">
                <use xlink:href="#splat"></use>
            </svg>
        </a>
    </section>
</template>

<script>
import Image from './Image.vue';

export default {
    name: "ImageWithSplat",
    props: {
        sectionData: Object,
        layout: {
            type: String,
            default: "full"
        },
        default: () => {
            return {}
        }
    },
    components: {
        Image
    }
}
</script>