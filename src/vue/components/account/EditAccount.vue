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
import CustomerAccountSection from './CustomerAccountSection.vue'
import CustomerProfile from './CustomerProfile.vue'
import CustomerDesigners from './CustomerDesigners.vue'
import CustomerPieces from './CustomerPieces.vue'
import CustomerPublications from './CustomerPublications.vue'

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
    // this.customer = await this.sanity.createIfNotExists({
    //   _type: 'customer',
    //   _id: this.customerId,
    //   name: this.name,
    //   email: this.email,
    // })

    this.customer = await this.sanity.getDocument(this.customerId)

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
      this.customer = await this.sanity.patch(this.customerId).set(e).commit()
      this.setSectionPropsFromCustomer()
    }
  }
}
</script>