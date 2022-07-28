<template>
    <section class="relative" :class="'article-image-' + layout">
        <img :src="urlFor(sectionData.image).width(800).quality(80)" :srcset="responsiveSrcset(sectionData.image)"
            sizes="(max-width: 640px) 540, (max-width: 960px) 800, (max-width: 1536px) 1600, 1600" />

        <a :href="'/products/' + sectionData.productSlug" v-if="sectionData.product" class="absolute z-20 bottom-8  text-yellow"
            :class="[layout == 'full' ? 'left-8' : 'w-full']">
            <svg class="w-20 h-20 mx-auto">
                <use xlink:href="#splat"></use>
            </svg>
        </a>
    </section>
</template>

<script>
import imageUrlBuilder from '@sanity/image-url'

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
    methods: {
        urlFor(source) {
            return imageUrlBuilder(this.sanity).image(source)
        },
        responsiveSrcset(source) {
            const imageUrl = this.urlFor(source).quality(80).format('jpg')
            return `
                ${imageUrl.width(540)}   540w,
                ${imageUrl.width(800)}   800w,
                ${imageUrl.width(1600)}   1600w`
        }
    }
}
</script>