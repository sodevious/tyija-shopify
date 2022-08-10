<template>
  <form
    action="javascript:"
    class="max-w-md"
    @submit="handleSubmit"
  >
    <div class="mb-8">
      <div
        v-for="(input, index) in profileInputs"
        :key="index"
        class="field my-3"
      >
        <!-- render checkbox input and its options -->
        <template v-if="input.type === 'checkbox'">
          <fieldset>
            <legend>{{ input.legend }}</legend>
            <div
              v-for="(option, index) in input.options"
              :key="index"
            >
              <input
                type="checkbox"
                :name="input.name"
                :value="option.value"
                v-bind="option.attrs"
                @change="(e) => option.attrs.checked = e.target.checked"
              >
              <label
                :for="option.attrs.id"
                class="ml-2"
              >{{ option.title }}</label>
            </div>
          </fieldset>
        </template>
        <!-- render regular text inputs -->
        <template v-else>
          <label :for="input.attrs.id">{{ input.label }}</label>
          <input
            v-model="input.value"
            v-bind="input.attrs"
            class="w-full block"
          >
        </template>
      </div>
    </div>

    <SaveButton />
  </form>
</template>

<script>
import customerSchema from '../../../../studio/schemas/documents/customer.tsx'
export default {
  name: 'CustomerProfile',
  props: {
    name: String,
    email: String,
    gender: Array,
    location: String
  },
  emits: ['save'],
  data () {
    return {
      profileInputs: [
        {
          type: 'checkbox',
          name: 'gender',
          legend: 'Identifying as:',
          options: []
        },
        {
          label: 'Location:',
          attrs: {
            id: 'location',
            name: 'location',
            type: 'text'
          }
        },
      ]
    }
  },
  watch: {
    name (newValue) {
      this.profileInputs = this.profileInputs.map((input) => {
        if (input.attrs && input.attrs.id === 'name') {
          input.value = newValue
        }
        return input
      })
    },
    email (newValue) {
      this.profileInputs = this.profileInputs.map((input) => {
        if (input.attrs && input.attrs.id === 'email') {
          input.value = newValue
        }
        return input
      })
    },
    gender (newValue) {
      this.profileInputs = this.profileInputs.map((input) => {
        if (input.type === 'checkbox' && input.name === 'gender') {
          // make options which came from props checked 
          newValue.forEach((gender, index) => {
            input.options.forEach((option) => {
              if (option.value === gender) {
                option.attrs.checked = true
              }
            })
          })
        }
        return input
      })
    },
    location (newValue) {
      this.profileInputs = this.profileInputs.map((input) => {
        if (input.attrs && input.attrs.id === 'location') {
          input.value = newValue
        }
        return input
      })
    }    
  },
  mounted () {
    // set gender checkbox input options from sanity schema
    this.profileInputs.forEach((input) => {
      if (input.type === 'checkbox' && input.name === 'gender') {
        const genderSanitySchemaOptions = customerSchema.fields.find(field => field.name === 'gender').options.list

        // console.log(genderSanitySchemaOptions)
        genderSanitySchemaOptions.forEach((option, index) => {
          input.options[index] = {
            value: option.value,
            title: option.title,
            attrs: {
              id: `genderOption${index}`
            }
          }
        })
      }
    })
  },
  methods: {
    getProfileInputSanityObject () {
      const profileInputSanityObject = {}
      this.profileInputs.forEach((input) => {
        if (input.type === 'checkbox' && input.name === 'gender') {
          profileInputSanityObject.gender = input.options.filter(option => option.attrs.checked).map(option => option.value)
          return
        }
        profileInputSanityObject[input.attrs.id] = input.value
      })
      return profileInputSanityObject
    },
    handleSubmit () {
      const profileInputSanityObject = this.getProfileInputSanityObject()
      this.$emit('save', profileInputSanityObject)
    }
  }
}
</script>