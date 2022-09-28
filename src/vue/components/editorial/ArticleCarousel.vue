<template>
  <Carousel
    v-if="sectionData"
    class="article-carousel"
    :items-to-show="1"
    :wrap-around="true"
    :dir="rtl"
  >
    <Slide
      v-for="slide in sectionData.slides"
      :key="slide._id"
    >
      <Image
        v-if="slide._type == 'Image'"
        :section-data="slide"
      />
      <VideoEmbed
        v-else-if="slide._type == 'Video'"
        :video="slide"
      />
    </Slide>
  </Carousel>
</template>

<script>
import { Carousel, Slide } from "vue3-carousel";

export default {
    name: "ArticleCarousel",
    components: {
        Carousel,
        Slide,
    },
    props: {
      sectionData: {
        type: Object,
        default: function() {
          return {}
        }
      }
    }
}
</script>
