<script>
export default {
  props: ["link", "childContext", "menuContext", "navContext"],
  data() {
    return {
      currentLink: '',
    }
  },
  computed: {
    activeLink() {
      return this.$store.state.overlays.currentMenuItem;
    },
    isCurrent() {
      if (this.activeLink) {
        if (this.activeLink == this.link) {
          return true
        } else {
          return false
        }
      } else {
        return (
          this.link == window.location.pathname || this.isChildCurrent || this.isEditorial
        );
      }
    },
    isChildCurrent() {
      return this.childContext == "true";
    },
    hasChildren() {
      return this.menuContext > 0;
    },
    isEditorial() {
      return this.currentLink.includes("blogs") && window.location.pathname.includes("blogs");
    },
  },
  methods: {
    handleClick(event, url) {
      this.$store.dispatch("overlays/setCurrentLink", url);
      if (this.navContext == "mobile") {
        event.preventDefault();
      }
    },
  }
};
</script>

<template>
  <div class="nav-vertical-wrapper">
    <slot
      :is-current="isCurrent"
      :handle-click="handleClick"
    />

    <div v-show="isCurrent">
      <slot name="child" />
    </div>
  </div>
</template>
