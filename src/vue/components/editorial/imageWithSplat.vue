<template>
  <section
    class="relative"
    :class="['article-image-' + layout, 'w-' + (sectionData.image.imageWidth || sectionData.imageWidth)]"
  >
    <SingleImage :section-data="sectionData" />
    <a
      v-if="sectionData.product" 
      :href="'/products/' + sectionData.productSlug" 
      :class="['absolute z-20 bottom-8 cursor-pointer text-yellow', sectionData.position]"
      @mouseover="splatHover = true"
      @mouseleave="splatHover = false"
      @mouseenter="toggleSplat"
    >
      <svg class="w-20 h-20 mx-auto">
        <use xlink:href="#splat" />
      </svg>
    </a>
  </section>

  <Transition name="fade-slide">
    <aside
      v-if="sidebarOpen == true"
      class="fixed md:absolute article-aside w-full md:w-1/4 md:border-l right-0 top-0 bottom-0 z-[50] bg-black light:bg-white"
      @mouseenter="sidebarHover = true" 
      @mouseout="closeSidebar"
    >
      <button
        class="appearance-none absolute right-8 top-8 md:hidden"
        @click="sidebarOpen = false; splatHover = false"
      >
        <svg class="w-4 h-4">
          <use xlink:href="#close_info" />
        </svg>
      </button>
      <div class="sticky top-12 z-10">
        <svg class="w-12 h-12 my-8 mx-auto text-yellow">
          <use xlink:href="#splat" />
        </svg>

        <MiniProduct :product-handle="sectionData.productSlug" />
      </div>
    </aside>
  </Transition>
</template>

<script>
import SingleImage from './SingleImage.vue';
import MiniProduct from './MiniProduct.vue';

export default {
    name: "ImageWithSplat",
    components: {
        SingleImage,
        MiniProduct
    },
    props: {
      sectionData: {
        type: Object,
        default: function() {
          return {}
        }
      },
      layout: {
        type: String,
        default: "full"
      }
    },
    data() {
        return {
            splatHover: false,
            sidebarOpen: false,
            sidebarHover: false,
        };
    },
    methods: {
        toggleSplat() {
            this.sidebarOpen = true;

            setTimeout(() => {
                if (this.sidebarHover == false && this.splatHover == false) {
                    this.sidebarOpen = false
                }
            }, 4000);
        },
        closeSidebar() {
            setTimeout(() => {
                this.sidebarOpen = false
                this.splatHover = false
                this.sidebarHover = false
            }, 4000);
        }
    }
}
</script>


<style>
.fade-slide-enter-active,
.fade-slide-leave-active {
    transition: opacity 0.25s ease-in-out;
}

.fade-slide-enter-to,
.fade-slide-leave-from {
    opacity: 1;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
    opacity: 0;
}
</style>
