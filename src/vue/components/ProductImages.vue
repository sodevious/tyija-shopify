<template>
  <Carousel
    :settings="settings"
    :breakpoints="breakpoints"
  >
    <Slide
      v-for="slide in makeImages"
      :key="slide"
    >
      <div class="carousel__item pointer-events-none w-full h-full">
        <img
          :src="slide.src"
          class="w-full h-full object-cover "
        >
      </div>
    </Slide>
  </Carousel>
</template>


<script>
import { Carousel, Slide } from 'vue3-carousel';

export default {
    name: 'ProductImages',
    components: {
        Carousel,
        Slide
    },
    props: ['media'],

    data: () => ({
        settings: {
            itemsToShow: 1,
            snapAlign: 'center',
            wrapAround: true,
            dir: 'rtl'
        }
    }),
    computed: {
        makeImages() {
            let images = JSON.parse(this.media);

            if (images.length === 1) {
                images.push(images[0])
            }

            return images
        }
    },
}
</script>
