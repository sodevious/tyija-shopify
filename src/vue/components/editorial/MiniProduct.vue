<template v-if="product.title">
  <a
    :href="product.url"
    class="font-sans text-h4 uppercase block mb-8"
  >
    <span class="block">{{ product.vendor }}</span>

    {{ product.title }}
  </a>

  <p class="text-h4 mb-8">
    ${{ product.price / 100 }}
  </p>
  <p
    class="text-sm mb-8"
    v-html="product.description"
  />

  <product-button 
    v-if="product.variants"
    :variant-id="product.variants[0].id"
  />
</template>

<script>
import ProductButton from '../ProductButton.vue';

export default {
    name: "ImageWithSplat",
    components: {
        ProductButton,
    },
    props: ['productHandle'],
    data() {
        return {
            product: {}
        };
    },
    async mounted() {
        const url = `${window.Shopify.routes.root}products/${this.productHandle}.js`
        console.log('mounted')
        this.product = await fetch(url).then((response) => response.json())
        console.log(this.product)
    }
}
</script>

