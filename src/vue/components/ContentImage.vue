<template>
  <img
    :src="$urlFor(asset).width(800).quality(70)"
    :alt="asset.alt"
  >
</template>

<script>
	export default {
		name: "ContentImage",
        props:{
            asset:Object,
            default: () => {
                return {}
            }
        }
    }
</script>