<script>
import { useSanityFetcher } from 'vue-sanity'
import { ref } from 'vue'

export default {
  setup(props, { slots }) {

    const { data: faqCategory } = useSanityFetcher('*[_type == "faqCategory"]')
    const openFaq = ref()

    return () => slots.default({
      faqCategory: faqCategory.value,
      openFaq
    })
  }
}
</script>