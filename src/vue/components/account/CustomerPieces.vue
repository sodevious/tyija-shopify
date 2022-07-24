<template>
  <div class="py-4">
    <span class="block mb-10 uppercase">
      please let us know what your three most wanted are!
    </span>

    <form action="javascript:" class="w-[400px]" @submit="handleSubmit">
      <div
        v-for="(input, index) in pieceInputs"
        :key="index"
        class="mb-10"
      >
        <div class="mb-7">
          <input
            v-model="input.value"
            v-bind="input.attrs"
            class="block w-full border-b"
          >
        </div>
        <span>#{{ index + 1 }}</span>
      </div>

       <button class="text-h5 button-sm md:button" type="submit">
        saVe
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'CustomerPieces',
  props: {
    pieces: Array
  },
  emits: ['save'],
  data () {
    return {
      pieceInputs: [
        {
        //   value: '',
          initialValue: '',
          attrs: {
            id: 'piece1',
            name: 'piece1',
            type: 'text',
            placeholder: 'TYPE...'
          }
        },
        {
        //   value: '',
          initialValue: '',
          attrs: {
            id: 'piece2',
            name: 'piece2',
            type: 'text',
            placeholder: 'TYPE...'
          }
        },
        {
        //   value: '',
          initialValue: '',
          attrs: {
            id: 'piece3',
            name: 'piece3',
            type: 'text',
            placeholder: 'TYPE...'
          }
        }
      ]
    }
  },
  watch: {
    // set loaded customer designers -> set initialValue for designerInputs when props are set
    pieces (newValue) {
      newValue.forEach((piece, index) => {
        this.pieceInputs[index].value = piece
        this.pieceInputs[index].initialValue = piece
      })
    }
  },
  methods: {
    resetPieceInputs () {
      this.pieceInputs.forEach((input) => {
        input.value = ''
      })
    },
    getPieceInputSanityObject () {
      const pieces = this.pieceInputs.map(input => input.value === '' && input.initialValue !== '' ? input.initialValue : input.value)
      return {
        pieces
      }
    },
    handleSubmit () {
      const pieceInputSanityObject = this.getPieceInputSanityObject()
      this.$emit('save', pieceInputSanityObject)
    //   this.resetPieceInputs()
    }
  }
}
</script> 