<template>
  <button
    :disabled="isInBag || !isAvailable"
    class="button my-8 text-h3 mx-auto block md:mx-0 disabled:cursor-not-allowed disabled:opacity-40"
    @click.prevent="addToCart"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'ProductButton',
  props: {
    variantId: {
      type: Number,
      required: true
    },
    addToCartLabel: {
      type: String,
      default: 'add tO bag'
    },
    inCart: {
      type: String,
      default: 'in bAg'
    },
    available: {
      type: String,
      default: 'true'
    }
  },
  computed: {
    isInBag () {
      return this.$store.state.cart.items.find(item => item.variant_id === this.variantId)
    },
    text () {
      if (this.isAvailable) {
        return this.isInBag ? this.inCart : this.addToCartLabel 
      } else {
        return this.isInBag ? this.inCart : 'Out of stock'
      }
    },
    isAvailable () {
      if (this.available == 'true') {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    addToCart () {
      if (this.isAvailable) {
        this.$store.dispatch('cart/addItem', {
          id: this.variantId,
          quantity: 1
        })
      } else return;
    }
  }
}
</script>
