<script>
export default {
  methods: {
    toggleFooter() {
      if (this.$store.state.overlays.isMenuOpen) {
        this.$store.dispatch("overlays/toggleMenu");
      }

      this.$store.dispatch("overlays/toggleFooter");
    },
  },
  render() {
    return this.$slots.default({
      isFooterOpen: this.$store.state.overlays.isFooterOpen,
      isMenuOpen: this.$store.state.overlays.isMenuOpen,
      toggleFooter: this.toggleFooter,
    });
  },
};
</script>
