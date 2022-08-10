<template>
  <section class="border-t p-4 md:p-8">
    <div class="flex justify-between items-center">
      <h3 class="text-h3 uppercase">
        <slot name="title" />
      </h3>

      <button
        class="text-h5 text-right uppercase"
        @click="toggle"
      >
        {{ isEditing ? 'close' : 'edit' }}
      </button>
    </div>

    <div
      v-show="isEditing"
      class="mt-4"
    >
      <slot name="content" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'CustomerAccountSection',
  data() {
    return {
      isEditing: false
    }
  },
  methods: {
    toggle() {
      this.isEditing = !this.isEditing;
    }
  }
}
</script> 
