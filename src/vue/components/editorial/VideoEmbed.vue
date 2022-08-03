<template>
    <section v-html="markup" class="article-video"></section>
</template>

<script>
export default {
    name: "VideoEmbed",
    props: ['video'],
    data() {
        return {
            markup: null,
            ratio: 16 / 9
        }
    },
    mounted() {
        fetch('https://noembed.com/embed?url=' + this.video.url)
            .then(response => response.json())
            .then(data => {
                this.markup = data.html
                this.ratio = `${data.width} / ${data.height}`
            })
    }
}
</script>

<style>
.article-video iframe {
    aspect-ratio: v-bind(ratio);
}
</style>