<template>
  <button
    class="px-4"
    @click="switchTheme"
  >
    <svg class="w-12 h-10 lg:h-12">
      <use :xlink:href="icon" />
    </svg>
  </button>
</template>

<script>
export default {
  name: 'ThemeSwitcher',

  props: {
    initialTheme: {
      type: String,
      default: localStorage.theme
    }
  },
  data() {
    return {
      mode: this.initialTheme
    }
  },
  computed: {
    icon() {
      return this.mode === 'light' ? '#light_toggle' : '#dark_toggle'
    }
  },
  mounted() {
    if (localStorage.theme === 'dark') {
      this.mode = 'dark'
      localStorage.theme = 'dark'
    } else {
      this.mode = 'light'
      localStorage.theme = 'light'
    }
  },
  methods: {
    switchTheme() {
      const currentTheme = localStorage.theme;
      const themeLogic = (currentTheme === 'light') ? 'dark' : 'light';

      this.mode = themeLogic;
      localStorage.theme = this.mode;

      document.documentElement.classList.replace(currentTheme, this.mode)
    }
  }
}
</script>
