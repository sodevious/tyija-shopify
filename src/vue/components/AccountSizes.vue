<script>
const sanityClient = require('@sanity/client')

const client = sanityClient({
    projectId: 'bh42io6v',
    dataset: 'production',
    apiVersion: '2022-07-19', // use current UTC date - see "specifying API version"!
    token: 'skyKZIPQJoG4oTHPAAy9t0xXXQTY6Bk6bD4MWUtyZfIehAYVFvbC3MjfrI6kq7dpvlHkcGnz4VdUMnC61OZ1cTg51HP5a0tEF9BDnGHoG4sLtlNv4zYIVwBZLXbH5BDeFuBRRJtSisibX7ilNGVXNvWlgE57sjXrFozB7iLk5IUVjN5FoVQO', // or leave blank for unauthenticated usage
    useCdn: false, // `false` if you want to ensure fresh data
})

export default {
    props: ['name', 'email'],
    data() {
        return {
            customer: {},
            message: '',
            saved: false,
            sizes: ['xs', 'sm', 'md', 'lg'],
            selectedSize: null
        }
    },
    computed: {
        makeID() {
            return this.email.replace('@', '_')
        }
    },
    mounted() {
        this.customer = {
            _type: 'customer',
            _id: this.makeID,
            name: this.name,
            email: this.email,
        }
        client.createIfNotExists(this.customer).then((res) => {
            console.log('Created/updated customer in Sanity')
            this.selectedSize = res.sizes
        })
    },
    methods: {
        updateSizes() {
            client.patch(this.makeID)
                .set({ sizes: this.selectedSize }) // Shallow merge
                .commit() // Perform the patch and return a promise
                .then((updatedSize) => {
                    console.log(updatedSize)
                    this.message = 'Updated ✓'
                })
                .catch((err) => {
                    this.message = err.message
                })
        }
    }
}
</script>

<template>
    <div class="grid grid-cols-6 gap-4 mb-8">
        <span v-for="size in sizes" :key="size" @click="message = ''">
            <input type="radio" :id="size" :name="size" :value="size" v-model="selectedSize" />
            <label :for="size" class="ml-2 uppercase">{{ size }}</label>
        </span>
    </div>

    <button class="bg-white text-black p-2 mr-4" @click="updateSizes">Update Sizes</button>
    <span v-if="message" v-text="message"></span>
</template>