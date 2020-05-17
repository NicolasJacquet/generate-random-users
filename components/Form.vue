<template>
  <b-card>
    <b-form class="pl-3 pr-3" @submit.prevent="generate">
      <div class="input-container">
        <b-form-group class="mr-3" label="Number" label-for="number">
          <b-form-input
            id="number"
            v-model="number"
            size="lg"
            min="1"
            type="number"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Gender" label-for="gender">
          <b-form-select
            id="gender"
            v-model="gender"
            size="lg"
            :options="genderOptions"
          ></b-form-select>
        </b-form-group>
      </div>
      <b-button
        :disabled="results.isLoading"
        size="lg"
        block
        type="submit"
        variant="primary"
        class="mb-2"
      >
        <b-spinner v-if="results.isLoading" label="Loading..." small />
        <span v-else>Generate!</span>
      </b-button>
    </b-form>
  </b-card>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Form',
  data() {
    return {
      number: 1,
      gender: 'all',
      genderOptions: [
        { value: 'all', text: 'All' },
        { value: 'male', text: 'Male' },
        { value: 'female', text: 'Female' }
      ]
    }
  },
  computed: {
    ...mapState(['results'])
  },
  methods: {
    generate() {
      this.$store.dispatch('results/loadResults', {
        gender: this.gender,
        number: this.number
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.input-container {
  display: flex;
  text-align: left;
  align-items: center;

  & > div {
    width: 50%;
  }
}
</style>
