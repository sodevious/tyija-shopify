<script>
export default {
  props: {
    initialProduct: {
      type: Object,
    },
  },
  data() {
    return {
      resHTML: `<!-- loading -->`,
    };
  },
  mounted: function () {
    this.fetchProducts();
  },
  methods: {
    makeImageUrl(image) {
      return image + "&width=400";
    },
    fetchProducts() {
      fetch(
        `${window.Shopify.routes.root}recommendations/products?product_id=${this.initialProduct}&limit=4&section_id=product-recommendations`
      )
        .then((response) => response.text())
        .then((text) => {
          if (text) {
            this.resHTML = text;
          }
        });
    },
  },
  render() {
    return this.$slots.default({
      resHTML: this.resHTML,
    });
  },
};
</script>
