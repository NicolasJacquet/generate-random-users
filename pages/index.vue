<template>
  <b-container class="container" fluid="md">
    <header class="header">
      <Logo />
      <h1 class="title">
        Generate Random Users
      </h1>
    </header>
    <Form />
    <Results />
    <Credits />
    <b-alert
      v-model="results.error"
      class="position-fixed fixed-bottom m-0 rounded-0"
      style="z-index: 2000;"
      variant="warning"
    >
      An error occurred, please try again later.
    </b-alert>
  </b-container>
</template>

<script>
import { mapState } from 'vuex'
import Logo from '~/components/Logo.vue'
import Form from '~/components/Form.vue'
import Results from '~/components/Results.vue'
import Credits from '~/components/Credits.vue'

export default {
  components: {
    Logo,
    Form,
    Results,
    Credits
  },
  computed: {
    ...mapState(['results'])
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
}

.header {
  margin-bottom: 30px;
  padding-top: 30px;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 26px;
  color: #35495e;
  letter-spacing: 1px;
}

@media (min-width: 380px) {
  .title {
    font-size: 40px;
  }
}
</style>
