<script>
export default {
    props: ['section'],
    data() {
        return {
            isEditing: false
        }
    },
    computed: {
        getSection() {
            return `#${this.section}`
        }
    },
    methods: {
        toggle() {
            this.isEditing = !this.isEditing;
        }
    }
}
</script>

<template>
    <section :id="section" class="border-b p-4 md:p-8">
        <div class="flex justify-between items-center">
            <h3 class="text-h3 uppercase">
                <slot name="title" />
            </h3>

            <a :href="getSection" @click="toggle" class="text-h5 text-right uppercase">
                Edit
            </a>
        </div>

        <div class="mt-4" v-show="isEditing">
            <slot name="content" />
        </div>
    </section>
</template>
