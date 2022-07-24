<script>
import { ref, toRef } from 'vue'
export default {
  props: {
    initial: {
      type: String,
      required: true,
      default: null
    }
  },
  setup (props, { slots }) {
    const initial = toRef(props, 'initial')
    const active = ref(initial.value)
    const show = (payload) => active.value = payload
    const hash = ref(window.location.hash)

    return () => slots.default({
      active: active.value,
      show,
      hash: hash.value
    })
  }
}
</script>