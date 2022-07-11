<template>
  <Transition name="blur-fade">
    <img
      v-show="displayImage"
      :src="img"
      class="w-full"
      @click="displayImage = false"
    >
  </Transition>
</template>

<script>
export default {
  name: 'DecorativeElement',
  props: ['img'],
  data() {
    return {
      displayImage: true
    }
  }
}
</script>

<style>
.blur-fade-enter-active,
.blur-fade-leave-active {
  transition: filter 0.5s ease-out,
    opacity 0.25s ease-out;
}

.blur-fade-enter-from,
.blur-fade-leave-to {
  opacity: 0;
  filter: blur(4px);
}
</style>
