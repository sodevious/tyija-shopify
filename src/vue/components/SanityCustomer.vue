<script>
const sanityClient = require('@sanity/client')

const client = sanityClient({
    projectId: 'bh42io6v',
    dataset: 'production',
    apiVersion: '2022-07-19', // use current UTC date - see "specifying API version"!
    token: 'skyKZIPQJoG4oTHPAAy9t0xXXQTY6Bk6bD4MWUtyZfIehAYVFvbC3MjfrI6kq7dpvlHkcGnz4VdUMnC61OZ1cTg51HP5a0tEF9BDnGHoG4sLtlNv4zYIVwBZLXbH5BDeFuBRRJtSisibX7ilNGVXNvWlgE57sjXrFozB7iLk5IUVjN5FoVQO', // or leave blank for unauthenticated usage
    useCdn: false, // `false` if you want to ensure fresh data
})
import customerSchema from '../../../studio/schemas/documents/customer.tsx'
import AccountSection from './AccountSection.vue'

export default {
    props: ['name', 'email'],
    componemts: {
        AccountSection
    },
    data() {
        return {
            customer: {},
            schema: customerSchema.fields,
            message: '',
            saved: false,
        }
    },
    computed: {
        makeID() {
            return this.email.replace('@', '_')
        },
        formatSchema() {
            let formatted = {}

            customerSchema.fields.forEach(k => {
                formatted[k.name] = k
            });

            console.log(formatted)
            return formatted
        }
    },
    mounted() {
        client.getDocument(this.makeID).then((res) => {
            console.log('Fetch customer in Sanity')
            this.customer = res

            console.log(res)
        })
    },
    methods: {
        saveCustomer() {
            client.patch(this.makeID)
                .set(this.customer) // Shallow merge
                .commit() // Perform the patch and return a promise
                .then((res) => {
                    console.log(res)
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
    <account-section section="profile">
        <template #title>
            Profile
        </template>

        <template #content>
            <form class="max-w-md" @click="message = ''">
                <div class="field my-3">
                    <label for="name">Name:</label>
                    <input type="text" class="border w-full block" id="name" name="name" :value="customer.name"
                        readonly>
                </div>
                <div class="field my-3">
                    <label for="name">Email:</label>
                    <input type="text" class="border w-full block" id="email" name="email" :value="customer.email"
                        readonly>
                </div>
                <div class="field my-3">
                    <label for="name">Location:</label>
                    <input type="text" v-model="customer.location" class="border w-full block" id="location"
                        name="location">
                </div>
                <div class="field my-3">
                    <p>{{ formatSchema.gender.title }}:</p>

                    <div class="block" v-for="field in formatSchema.gender.options.list">
                        <input type="checkbox" :id="field.value" :value="field.value" v-model="customer.gender">
                        <label :for="field.value" class="ml-2">{{ field.title }}</label>
                    </div>
                </div>
            </form>

            <button class="bg-white text-black p-2 mr-4" @click="saveCustomer">Save</button>
            <span v-text="message"></span>
        </template>
    </account-section>

    <account-section section="sizes">
        <template #title>
            My Sizes
        </template>

        <template #content>
            <div class="grid grid-cols-6 gap-4 mb-8">
                <span v-for="size in formatSchema.sizes.options.list" :key="size.title" @click="message = ''">
                    <input type="radio" :id="size.value" :name="size.title" :value="size.value"
                        v-model="customer.sizes" />
                    <label :for="size.value" class="ml-2 uppercase">{{ size.title }}</label>
                </span>
            </div>

            <button class="bg-white text-black p-2 mr-4" @click="updateSizes">Update Sizes</button>
        </template>
    </account-section>

    <account-section section="designers">
        <template #title>
            Designers
        </template>

        <template #content>
            <input type="text" v-model="customer.designers" />

            <button class="bg-white text-black p-2 mr-4" @click="updateSizes">Update</button>
        </template>
    </account-section>
</template>