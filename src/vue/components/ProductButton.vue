<template>
  <button
    :disabled="isInBag"
    class="button my-8 text-h3 mx-auto block md:mx-0"
    @click.prevent="$store.dispatch('cart/addItem', {
      id: variantId,
      quantity: 1
    })"
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
    addToCart: {
      type: String,
      default: 'add tO bag'
    },
    inCart: {
      type: String,
      default: 'in bAg'
    },
  },
  computed: {
    isInBag () {
      return this.$store.state.cart.items.find(item => item.variant_id === this.variantId)
    },
    text () {
      return this.isInBag ? this.inCart : this.addToCart 
    }
  }
}
</script>
