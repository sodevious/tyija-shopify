<script>
import { Carousel, Slide } from "vue3-carousel";

export default {
  components: {
    Carousel,
    Slide,
  },
  props: ["collectionLink", "collectionSize"],
  data() {
    return {
      carouselContent: null,
      isZoomed: false,

      settings: {
        itemsToShow: 2.5,
        snapAlign: "start",
        wrapAround: true,
      },
    };
  },
  computed: {
    makeURL() {
      return this.collectionLink + "?sections=designer-collection";
    },
    isMobile() {
      return window.innerWidth > 768 ? false : true;
    },
  },
  methods: {
    fetchCollection() {
      fetch(this.makeURL)
        .then((response) => response.json())
        .then((text) => {
          const parser = new DOMParser();
          const doc = parser.parseFromString(text["designer-collection"], "text/html");
          const collectionContent = doc.body.querySelector(".shopify-section").innerHTML;

          this.carouselContent = JSON.parse(collectionContent);
          this.isZoomed = true;
        });
    },
    zoomCollection() {
      console.log(this.collectionSize);
      if (this.collectionSize > 2) {
        this.fetchCollection();
      } else {
        this.isZoomed = !this.isZoomed;
      }
    },
    visitProduct(handle) {
      window.location.href = `/products/${handle}`;
    },
  },
};
</script>

<template>
  <div
    class="designer-carousel"
    :class="{ zoomed: isZoomed }"
    @click.prevent.once="zoomCollection"
  >
    <template v-if="isZoomed && collectionSize > 3 && carouselContent && !isMobile">
      <slot
        :is-zoomed="isZoomed"
        for-desktop="true"
      />
    
      <carousel
        :settings="settings"
        class="designer-collection"
      >
        <slide
          v-for="slide in carouselContent"
          :key="slide"
          @click.prevent="visitProduct(slide.handle)"
        >
          <img
            :src="slide.featured_image"
            :alt="slide.featured_image.alt"
            class="block relative aspect-3/4 z-20 pr-4 w-full h-full object-cover object-center pointer-events-none"
          >
        </slide>
      </carousel>
    </template>
    <template v-else>
      <slot :is-zoomed="isZoomed" />
    </template>
  </div>
</template>

<style>
.designer-carousel .carousel__slide {
  width: 40%;
}
</style>
