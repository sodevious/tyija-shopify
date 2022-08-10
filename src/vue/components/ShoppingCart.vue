<template>
  <div
    v-if="$store.state.overlays.isCartOpen"
    class="fixed z-50 top-0 right-0 bottom-0 w-[24rem] text-black bg-red p-8 overflow-y-auto"
  >
    <div class="flex justify-between">
      <span class="inline-flex justify-center items-center w-6 leading-100 h-6 bg-white rounded-full">
        {{ $store.state.cart.itemCount }}
      </span>

      <button @click="$store.dispatch('overlays/toggleCart')">
        <svg class="w-5 h-5">
          <use xlink:href="#close_info" />
        </svg>
      </button>
    </div>

    <div
      v-for="product in $store.state.cart.items"
      :key="product.key"
      class="py-6 border-b grid grid-cols-3 gap-8"
    >
      <div class="col-span-2">
        <img
          :src="product.featured_image.url"
          :alt="product.featured_image.alt"
          class="object-cover aspect-3/4"
        >
      </div>

      <div class="flex justify-between flex-col">
        <p
          v-if="product.vendor"
          class="uppercase"
        >
          {{ product.vendor }}
        </p>

        <p>
          {{ product.title }}
        </p>

        <p>
          ${{ $store.getters['cart/formattedPrice'](product.final_line_price) }}
        </p>

        <input
          type="number"
          class="bg-transparent border text-center p-1 text-sm"
          :value="product.quantity"
          @change="async ($event) => {
            await $store.dispatch('cart/updateItem', {
              [product.key]: $event.target.value
            })
          }"
        >
      </div>
    </div>

    <h5 class="py-6 text-h5 uppercase w-3/5">
      {{ shopifyTranslations.checkout_disclaimer || "SHIPPING/TAXES CALCULATED AT CHECKOUT" }}
    </h5>

    <div class="flex uppercase justify-between">
      <p>{{ shopifyTranslations.subtotal || "Subtotal" }}</p>
      <p>${{ $store.getters['cart/formattedPrice']($store.state.cart.subtotalPrice) }}</p>
    </div>

    <button
      class="button block text-center text-h3 py-1 my-6 w-full"
      @click="$store.dispatch('cart/goToCheckout')"
    >
      {{ shopifyTranslations.checkout || "checKout" }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'ShoppingCart',
  props: ['translatedStrings'],
  computed: {
    shopifyTranslations() {
      const parseTranslations = JSON.parse(this.translatedStrings)

      return parseTranslations[0]
    }
  },
  async mounted() {
    // Initial cart load
    await this.$store.dispatch('cart/loadCart')
  }

}
</script>



