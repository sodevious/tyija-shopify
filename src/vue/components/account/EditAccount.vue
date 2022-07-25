<template>
  <slot />

  <CustomerAccountSection
    v-for="(section, index) in accountSections"
    :key="index"
  >
    <template #title>
      {{ section.title }}
    </template>

    <template #content>
      <component :is="section.componentName" v-bind="section.props" @save="handleSave"/>
    </template>
  </CustomerAccountSection>
</template>

<script>
const sanityClient = require('@sanity/client')
import CustomerAccountSection from './CustomerAccountSection.vue'
import CustomerProfile from './CustomerProfile.vue'
import CustomerDesigners from './CustomerDesigners.vue'
import CustomerPieces from './CustomerPieces.vue'
import CustomerPublications from './CustomerPublications.vue'

// ideally this client should be initialized in main.js or somewhere as a plugin and refferenced here and through the app.
const client = sanityClient({
  projectId: 'rcrbb2uw',
  dataset: 'production',
  apiVersion: '2022-07-19', // use current UTC date - see "specifying API version"!
  token: 'sk6Q4635EW9XneKbGC804JnsfFLsWx1i5amYmQiG23dD1cl2AT1jtsbnvj4c3cjUlkBoMynRsUEYc2Lm5UcEt3pdpWKH9zGTn6TDXmZWiHePPlpUwpDWqVI0CkTxtPLT4ob3h2MQFefaDLfd6f5F0PpSaJNSRw0RO7kw7ZFBHDwGFOXQuBMi', // or leave blank for unauthenticated usage
  useCdn: false, // `false` if you want to ensure fresh data
})

export default {
  name: 'EditAccount',
  components: {
    CustomerAccountSection,
    CustomerProfile,
    CustomerDesigners,
    CustomerPieces,
    CustomerPublications
  },
  props: {
    name: String,
    email: String
  },
  data () {
    return {
      customer: {},
      accountSections: [
        { title: 'personal information', componentName: 'CustomerProfile', props: { gender: [], location: '' } },
        { title: 'designers', componentName: 'CustomerDesigners', props: { designers: [] } },
        { title: 'publications', componentName: 'CustomerPublications', props: { publications: [] } },
        { title: 'garment watchlists', componentName: 'CustomerPieces', props: { pieces: [] } }
      ]
    }
  },
  async mounted () {
    // this.customer = await client.createIfNotExists({
    //   _type: 'customer',
    //   _id: this.customerId,
    //   name: this.name,
    //   email: this.email,
    // })

    this.customer = await client.getDocument(this.customerId)

    console.log('customer:', this.customer)

    // set prop data for each section after the customer data is set/updated
    this.setSectionPropsFromCustomer()
  },
  computed: {
    customerId () {
      return this.email.replace('@', '_')
    }
  },
  methods: {
    setSectionPropsFromCustomer () {
      this.accountSections.forEach((section) => {
        // for each fieldName get data from customer object and set as a prop to the section props 
        Object.keys(section.props).forEach((propName) => {
          if (this.customer[propName]) {
            section.props[propName] = this.customer[propName]
          }
        })
      })
    },
    async handleSave (e) {
      this.customer = await client.patch(this.customerId).set(e).commit()
      this.setSectionPropsFromCustomer()
    }
  }
}
</script>