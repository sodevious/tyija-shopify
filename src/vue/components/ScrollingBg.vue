<template>
  <div class="fixed w-100 top-0 bottom-0 left-0 right-0 z-0 pointer-events-none">
    <div ref="backgroundImageWrapper">
      <img
        v-for="(image, index) in images"
        :id="image.id"
        :key="index"
        :ref="image.id"
        :src="image.src"
        class="w-full h-full object-cover  md:h-[initial]"
      >
    </div>
  </div>
</template>

<script>
import anime from 'animejs'

export default {
  name: 'ScrollingBg',

  data () {
    return {
      imageSrc: '',
      images: [],
      idCounter: 0
    }
  },

  created () {
    // set bg image src
    this.imageSrc = document.getElementById('scrolling-bg-image').textContent.trim()
    // add images
    this.images.push({ id: this.getImageId(), src: this.imageSrc })
    this.images.push({ id: this.getImageId(), src: this.imageSrc })
  },

  async mounted () {
    // await image load
    await Promise.all(this.getImageLoadPromises())

    // set & run the animation
    const { backgroundImageWrapper, homeBackgroundImage0 } = this.$refs
    const imageHeight = homeBackgroundImage0[0].getBoundingClientRect().height

    const animeConfig = {
      targets: this.$refs.backgroundImageWrapper,
      translateY: -Math.floor(imageHeight),
      duration: 120000,
      easing: 'linear',
      complete() {
        // set the image wrapper translateY to 0 and start animation again
        anime.set(backgroundImageWrapper, {
          translateY: 0
        })
        anime(animeConfig)
      }
    }

    anime(animeConfig)
  },

  methods: {
    getImageId () {
      let imageId = 'homeBackgroundImage' + this.idCounter
      const hasId = this.images.find(image => image.id === imageId)

      if (hasId) {
        this.idCounter++
        return this.getImageId()
      }

      return imageId
    },

    getPromise () {
      let resolveFn
      const promise = new Promise((resolve) => {
        resolveFn = resolve
      })

      return {
        promise,
        resolveFn
      }
    },

    getImageLoadPromises () {
      const imageLoadPromises = []

      this.images.forEach((image) => {
        const imageLoadPromise = this.getPromise()

        this.$refs[image.id][0].addEventListener('load', () => {
          imageLoadPromise.resolveFn()
        })
    
        imageLoadPromises.push(imageLoadPromise)
      })

      return imageLoadPromises
    }
  }
}
</script>