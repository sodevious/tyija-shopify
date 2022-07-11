<script>
import { useSanityFetcher } from 'vue-sanity'

export default {
  setup(props, { slots }) {

    const { data: products } = useSanityFetcher('*[_type == "product"]')

    return () => slots.default({
      products: products.value
    })
  }
}
</script>