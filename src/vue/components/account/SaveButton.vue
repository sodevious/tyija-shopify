<template>
    <div class="flex items-center">
        <button class="text-h5 button-sm md:button mr-4" @click="handleSave" type="submit">
            saVe
        </button>

        <p v-show="saving" class="uppercase">saved</p>
    </div>
</template>

<script>
export default {
    name: 'SaveButton',
    computed: {
        saving() {
            return this.$store.state.account.saved;
        }
    },
    methods: {
        handleSave() {
            // This should be a callback
            this.$store.commit('account/TOGGLE_SAVE')
            setTimeout(function () { this.$store.commit('account/TOGGLE_SAVE') }.bind(this), 3000)
        }
    }
}
</script>       
