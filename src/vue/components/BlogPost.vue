<script>
import { SanityBlocks } from 'sanity-blocks-vue-component';
import ImageWithSplat from './editorial/ImageWithSplat.vue';
import ImageWithText from './editorial/ImageWithText.vue';
import SingleImage from './editorial/SingleImage.vue';
import VideoEmbed from './editorial/VideoEmbed.vue';
import ArticleCarousel from './editorial/ArticleCarousel.vue';
import ArticleFootnote from './editorial/ArticleFootnote.vue';

export default {
  name: 'BlogPost',
  components: {
    SanityBlocks,
    ImageWithSplat,
    ImageWithText,
    SingleImage,
    VideoEmbed,
    ArticleCarousel,
  },
  props: {
    handle: String
  },
  data() {
    return {
      postContent: null,
      serializers: {
        styles: {
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          h4: 'h4',
          h6: 'h5',
          blockquote: 'blockquote',
        },
        marks: {
          sup: 'sup',
        },
        types: {
          footnote: ArticleFootnote
        }
      }
    }
  },
  async mounted() {
    const query = `*[_type == "article" && handle.current == "${this.handle}"][0] {
        ..., 
        'page_modules': page_modules[]{  
          ...,
          _type == 'imageWithSplat' => {
            ...,
            "productSlug": product -> store.slug.current
          },
          _type == 'imageWithText' => {
            body[]{
            ...,
            _type == 'imageWithStyle' => {
              ...,
              imageWithSplat {
                ...,
                "productSlug": product -> store.slug.current
              }
            }
          }
        }
      }
    }`
    this.postContent = await this.sanity.fetch(query)
    console.log(this.postContent)
  },
}
</script>

<template>
  <template v-if="postContent !== null">
    <template
      v-for="section in postContent.page_modules"
      :key="section._key"
    >
      <ImageWithSplat
        v-if="section._type == 'imageWithSplat'"
        :section-data="section"
      />
      <ImageWithText
        v-else-if="section._type == 'imageWithText'"
        :section-data="section"
      />
      <SingleImage
        v-else-if="section._type == 'picture'"
        :section-data="section"
      />
      <VideoEmbed
        v-else-if="section._type == 'videoEmbed'"
        :video="section"
      />
      <ArticleCarousel
        v-else-if="section._type == 'carousel'"
        :section-data="section"
      />
      <SanityBlocks
        v-else-if="section._type == 'paragraphRichtext'"
        :blocks="section.body"
        :serializers="serializers"
      />
      <p v-else>
        {{ section._type }}
      </p>
    </template>

 
  </template>
  <section
    v-else
    class="p-4 md:p-8"
  >
    <!-- Fallback for Shopify content -->
    <slot />
  </section>
</template>

