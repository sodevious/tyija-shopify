<template>
  <button class="hover:text-red" @click="toggleInWishList">
    <svg enable-background="new 0 0 28.2 25.6" viewBox="0 0 28.2 25.6" xmlns="http://www.w3.org/2000/svg"
      class="w-8 h-8">
      <path
        d="m14.5 23.6-1.6-1.4c-5.7-5.1-9.4-8.4-9.4-12.6 0-3.4 2.7-6 6.1-6 1.9 0 3.8.9 4.9 2.3 1.2-1.4 3-2.3 5-2.3 3.4 0 6 2.6 6 6 0 4.1-3.7 7.5-9.4 12.6z"
        :fill="isProductAdded ? 'red' : 'none'" stroke="currentColor" />
    </svg>
  </button>
</template>

<script>
export default {
  name: 'WishlistButton',
  props: {
    rawProductData: Object,
    productLink: String
  },
  data() {
    return {
      isProductAdded: false
    }
  },
  computed: {
    getProductData() {
      let data = JSON.parse(this.rawProductData)

      return {
        'epi': data.variants[0].id,
        'empi': data.id,
        'du': this.productLink,
        'iu': data.featured_image,
        'pr': data.price / 100,
        'cprops': {
          'productPath': this.productLink,
          'productTitle': data.title,
          'productVendor': data.vendor
        }
      }
    }
  },
  mounted() {
    if (!window.SwymCallbacks) {
      window.SwymCallbacks = []
    }

    this.checkProductInTheList()
  },
  methods: {
    toggleInWishList() {
      const addToWishList = (swat) => {
        swat.addToWishList(this.getProductData, (r) => {
          this.isProductAdded = true
        })
      }

      const removeFromWishList = (swat) => {
        const productDataWithoutCprops = {}
        // make a copy without cprops
        Object.keys(this.getProductData).filter(key => key !== 'cprops').forEach((key) => {
          productDataWithoutCprops[key] = this.getProductData[key]
        })

        swat.removeFromWishList(productDataWithoutCprops, (r) => {
          this.isProductAdded = false
        })
      }

      this.isProductAdded
        ? window.SwymCallbacks.push(removeFromWishList)
        : window.SwymCallbacks.push(addToWishList)
    },
    checkProductInTheList() {
      window.SwymCallbacks.push((swat) => {
        swat.fetch((wishlist) => {
          wishlist.forEach((item) => {
            if (item.epi == this.getProductData.epi) {
              this.isProductAdded = true
            }
          })
        })
      })
    }
  }
}
</script>