<template>
    <section class="relative" :class="['article-image-' + layout, 'w-' + (sectionData.image.imageWidth || sectionData.imageWidth)]">
        <Image :section-data="sectionData" />

        <a :href="'/products/' + sectionData.productSlug" 
            v-if="sectionData.product" 
            class="absolute z-20 bottom-8 cursor-pointer text-yellow"
            :class="[layout == 'full' ? 'left-8' : '']" 
            @mouseover="splatHover = true"
            @mouseleave="splatHover = false"
            @mouseenter="toggleSplat">
            <svg class="w-20 h-20 mx-auto">
                <use xlink:href="#splat"></use>
            </svg>
        </a>
    </section>

    <Transition name="fade-slide">
        <aside
            v-if="sidebarOpen == true"
            class="fixed md:absolute article-aside w-full md:w-1/4 md:border-l right-0 top-0 bottom-0 z-[60] bg-black light:bg-white"
            @mouseenter="sidebarHover = true" 
            @mouseout="closeSidebar">
            <button class="appearance-none absolute right-8 top-8 md:hidden" @click="sidebarOpen = false; splatHover = false">
                   <svg class="w-4 h-4">
                    <use xlink:href="#close_info"></use>
                </svg>
            </button>
            <div class="sticky top-12">
                <svg class="w-12 h-12 my-8 mx-auto text-yellow">
                    <use xlink:href="#splat"></use>
                </svg>

                <MiniProduct :product-handle="sectionData.productSlug" />
            </div>
        </aside>
    </Transition>
</template>

<script>
import Image from './Image.vue';
import MiniProduct from './MiniProduct.vue';

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
    },
    components: {
        Image,
        MiniProduct
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
