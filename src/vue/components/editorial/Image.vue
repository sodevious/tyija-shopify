<template>
    <section :class="'w-' + sectionData.imageWidth || sectionData.image.imageWidth" class="mx-auto">
        <img 
            :src="urlFor(sectionData.image.image || sectionData.image).width(800).quality(80)" 
            :srcset="responsiveSrcset(sectionData.image.image || sectionData.image)"
            sizes="(max-width: 640px) 540, (max-width: 960px) 800, (max-width: 1536px) 1600, 1600" />
    </section>
</template>

<script>
import imageUrlBuilder from '@sanity/image-url'

export default {
    name: "Image",
    props: {
        sectionData: Object,
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