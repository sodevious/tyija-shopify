<script>
export default {
  data() {
    return {
      faqCategory: [],
      openFaq: ''
    }
  },
  methods: {
    openCategory(handle) {
      this.openFaq = handle
    }
  },
  async mounted() {
    const query = '*[_type == "faqCategory"]';

    this.faqCategory = await this.sanity.fetch(query)
    console.log(this.faqCategory)
  },
  render() {
    return this.$slots.default({
      faqCategory: this.faqCategory,
      openCategory: this.openCategory,
      openFaq: this.openFaq
    });
  },
};
</script>
