<template>
    <div v-if="wishListItems.length === 0" class="w-full h-full flex justify-center items-center">
        <span>No items currently in your wishlist</span>
    </div>
    <div v-else class="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-8 gap-y-16">
        <!-- Product card -->
        <div class="product-card" v-for="item in wishListItems" :key="item.epi">
            <a :href="item.cprops.productPath" class="block relative aspect-3/4 z-20">
                <img sizes="
            (min-width: 768px) 450px,
            630px
          " :src="item.iu" :alt="item.dt" loading="lazy" class="w-full h-full object-cover object-center">
            </a>

            <div class="mt-4 px-4">
                <a :href="item.cprops.productPath" class="text-h4 uppercase block text-center px-4 py-1">
                    <span class="block">{{ item.cprops.productVendor }}</span>
                    {{ item.cprops.productTitle }}
                </a>
            </div>

            <div class="product-like absolute top-0 z-10">
                <wishlist-button 
                    :swym-product-data='item'
                    @click="getWishlist"></wishlist-button>
            </div>
        </div>
    </div>
</template>

<script>
import WishlistButton from './WishlistButton.vue'
export default {
    name: 'WishlistPage',
    components: {
        WishlistButton
    },
    data() {
        return {
            wishListItems: []
        }
    },
    mounted() {
        if (!window.SwymCallbacks) {
            window.SwymCallbacks = []
        }
        this.getWishlist()
    },
    methods: {
        getWishlist() {
            console.log('getWishlist')
            // setTimeout to be sure that wishListItems are updated after all other Swym callbacks are executed
            setTimeout(() => {
                window.SwymCallbacks.push((swat) => {
                    swat.fetch((wishlist) => {
                        this.wishListItems = wishlist
                    })
                })
            }, 200)
        }
    }
}
</script>