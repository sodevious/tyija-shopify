<template>
  <div class="py-4">
    <span class="block mb-10 uppercase">
      please let us know what your three favorites are!
    </span>

    <form action="javascript:" class="w-[400px]" @submit="handleSubmit">
      <div
        v-for="(input, index) in designerInputs"
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
        <span>#{{ index + 1 }}</span>
      </div>

      <SaveButton></SaveButton>
    </form>
  </div>
</template>

<script>
export default {
  name: 'CustomerDesigners',
  props: {
    designers: Array
  },
  emits: ['save'],
  data () {
    return {
      designerInputs: [
        {
          value: '',
          initialValue: '',
          attrs: {
            id: 'designer1',
            name: 'designer1',
            type: 'text',
            placeholder: 'TYPE...'
          }
        },
        {
          value: '',
          initialValue: '',
          attrs: {
            id: 'designer2',
            name: 'designer2',
            type: 'text',
            placeholder: 'TYPE...'
          }
        },
        {
          value: '',
          initialValue: '',
          attrs: {
            id: 'designer3',
            name: 'designer3',
            type: 'text',
            placeholder: 'TYPE...'
          }
        }
      ]
    }
  },
  watch: {
    // set loaded customer designers -> set initialValue for designerInputs when props are set
    designers (newValue) {
      newValue.forEach((designer, index) => {
        this.designerInputs[index].initialValue = designer
        this.designerInputs[index].value = designer
      })
    }
  },
  methods: {
    resetDesignerInputs () {
      this.designerInputs.forEach((input) => {
        input.value = ''
      })
    },
    getDesignerInputSanityObject () {
      const designers = this.designerInputs.map(input => input.value === '' && input.initialValue !== '' ? input.initialValue : input.value)
      return {
        designers
      }
    },
    handleSubmit () {
      const designerInputSanityObject = this.getDesignerInputSanityObject()
      this.$emit('save', designerInputSanityObject)
      // this.resetDesignerInputs()
    }
  }
}
</script>