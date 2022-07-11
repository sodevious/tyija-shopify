<script>
import { useSanityFetcher } from 'vue-sanity'
import { SanityBlocks } from 'sanity-blocks-vue-component';
// import { h, defineComponent } from 'vue';
import ContentImage from '@/vue/components/ContentImage.vue'

export default {
    components: { SanityBlocks },
    props: {
        handle: String
    },

    setup(props) {
        const serializers = {
            types: {
                image: ContentImage,
            }
        }

        const { data: blocks } = useSanityFetcher(`*[_type == "article" && handle.current == "${props.handle}"][0].body`)
        return { blocks, serializers };
    }
}
</script>


<template>
  <div v-if="blocks">
    <SanityBlocks
      :blocks="blocks"
      :serializers="serializers"
    />
  </div>
  <div v-else>
    <slot />
  </div>
</template>