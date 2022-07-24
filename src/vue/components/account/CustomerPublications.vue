<template>
  <div class="py-10">
    <span class="block mb-10 uppercase">
      please let us know what your two favorites are!
    </span>

    <form action="javascript:" class="w-[400px]" @submit="handleSubmit">
      <div
        v-for="(input, index) in publicationInputs"
        :key="index"
        class="mb-10"
      >
        <div class="mb-7">
          <!-- <label>{{ input.label }}</label> -->
          <input
            v-model="input.value"
            v-bind="input.attrs"
            class="block w-full border-b"
          >
        </div>
        <span>#{{ index + 1 }} {{ input.value === '' ? input.initialValue : input.value }}</span>
      </div>
      <button class="text-h5 button-sm md:button" type="submit">
        saVe
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'CustomerPublications',
  props: {
    publications: Array
  },
  emits: ['save'],
  data () {
    return {
      publicationInputs: [
        {
          value: '',
          initialValue: '',
          attrs: {
            id: 'publication1',
            name: 'publication1',
            type: 'text',
            placeholder: 'TYPE...'
          }
        },
        {
          value: '',
          initialValue: '',
          attrs: {
            id: 'publication2',
            name: 'publication2',
            type: 'text',
            placeholder: 'TYPE...'
          }
        }
      ]
    }
  },
  watch: {
    // set loaded customer designers -> set initialValue for designerInputs when props are set
    publications (newValue) {
      newValue.forEach((publication, index) => {
        this.publicationInputs[index].initialValue = publication
        this.publicationInputs[index].value = publication
      })
    }
  },
  methods: {
    resetPublicationInputs () {
      this.publicationInputs.forEach((input) => {
        input.value = ''
      })
    },
    getPublicationInputSanityObject () {
      const publications = this.publicationInputs.map(input => input.value === '' && input.initialValue !== '' ? input.initialValue : input.value)
      return {
        publications
      }
    },
    handleSubmit () {
      const publicationInputSanityObject = this.getPublicationInputSanityObject()
      this.$emit('save', publicationInputSanityObject)
    //   this.resetPublicationInputs()
    }
  }
}
</script> 