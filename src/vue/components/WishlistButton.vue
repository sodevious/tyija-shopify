<template>
  <button
    class="hover:text-red"
    @click="getProductData"
  >
    <svg
      enable-background="new 0 0 28.2 25.6"
      viewBox="0 0 28.2 25.6"
      xmlns="http://www.w3.org/2000/svg"
      class="w-7 h-7"
    >
      <path
        d="m14.5 23.6-1.6-1.4c-5.7-5.1-9.4-8.4-9.4-12.6 0-3.4 2.7-6 6.1-6 1.9 0 3.8.9 4.9 2.3 1.2-1.4 3-2.3 5-2.3 3.4 0 6 2.6 6 6 0 4.1-3.7 7.5-9.4 12.6z"
        :fill="isProductAdded ? 'red' : 'none'"
        stroke="currentColor"
      />
    </svg>
  </button>
</template>

<script>
export default {
  name: 'WishlistButton',
  props: {
    productHandle: String,
    productId: String,
    productLink: String,
    swymProductData: Object
  },
  data() {
    return {
      isProductAdded: false,
      rawData: Object
    }
  },
  mounted() {
    if (!window.SwymCallbacks) {
      window.SwymCallbacks = []
    }

    this.checkProductInTheList()
  },
  methods: {
    getProductData() {
      fetch(`/products/${this.productHandle}/${this.productId}.json`)
        .then((response) => response.json())
        .then((data) => {
          this.toggleInWishList(data)
        })
    },
    toggleInWishList(data) {
      let productData = {
        'epi': data.product.variants[0].id,
        'empi': data.product.id,
        'du': this.productLink,
        'iu': this.productImage,
        'pr': data.product.variants[0].price,
        'cprops': {
          'productPath': this.productLink,
          'productTitle': data.product.title,
          'productVendor': data.product.vendor
        }
      }

      const addToWishList = (swat) => {
        swat.addToWishList(productData, (r) => {
          this.isProductAdded = true
        })
      }

      const removeFromWishList = (swat) => {
        const productDataWithoutCprops = {}
        // make a copy without cprops
        Object.keys(productData).filter(key => key !== 'cprops').forEach((key) => {
          productDataWithoutCprops[key] = productData[key]
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
      console.log('check')
      window.SwymCallbacks.push((swat) => {
        swat.fetch((wishlist) => {
          wishlist.forEach((item) => {
            if (item.epi == this.productId) {
              this.isProductAdded = true
            }
          })
        })
      })
    }
  }
}
</script>