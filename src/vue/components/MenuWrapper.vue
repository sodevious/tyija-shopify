<script>
export default {
    computed: {
        isMenuOpen() {
            return this.$store.state.overlays.isMenuOpen;
        },
    },
    methods: {
        toggleMenu() {
            this.$store.dispatch("overlays/toggleMenu");
        }
    },
};
</script>

<template>
  <button
    class="px-4 block absolute h-header top-0 bottom-0 left-0 z-40 md:hidden"
    @click="toggleMenu"
  >
    <svg class="w-4 h-4 light:text-gray index:text-black">
      <use xlink:href="#menu" />
    </svg>
  </button>

  <div
    v-if="isMenuOpen"
    class="tyija-overlay flex-col flex-1 items-evenly z-[60] hidden  nav-open:block md:hidden md:nav-open:hidden"
  >
    <button
      class="text-right block w-full pr-8"
      @click="$store.dispatch('overlays/toggleMenu')"
    >
      <svg class="w-4 h-4 h-header float-right">
        <use xlink:href="#close_info" />
      </svg>
    </button>
    
    <div class="grid h-full index:grid-rows-menu">
      <slot nav-context="mobile" />
    </div>
  </div>
  <div
    v-else
    class="hidden md:flex justify-center flex-col flex-1"
  >
    <slot />
  </div>
</template>
