<template>
  <div v-if="resultShouldBeVisible" class="result-container">
    <div class="header">
      <h2>Users</h2>
      <b-button size="sm" variant="outline-primary" @click="saveFile"
        >Download as JSON</b-button
      >
    </div>
    <b-card-group columns>
      <UserCard
        v-for="(user, index) in results.data"
        :key="index"
        :user-data="user"
      />
    </b-card-group>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import UserCard from './UserCard'

export default {
  name: 'Results',
  components: {
    UserCard
  },
  computed: {
    ...mapState(['results']),
    resultShouldBeVisible() {
      return this.results.data.length > 0 && !this.results.isLoading
    }
  },
  methods: {
    // Solution to download as JSON found here
    // https://stackoverflow.com/questions/48611671/vue-js-write-json-object-to-local-file
    saveFile() {
      const data = JSON.stringify(this.results.data)
      const blob = new Blob([data], { type: 'text/plain' })
      const e = document.createEvent('MouseEvents')
      const a = document.createElement('a')
      a.download = 'users.json'
      a.href = window.URL.createObjectURL(blob)
      a.dataset.downloadurl = ['text/json', a.download, a.href].join(':')
      e.initEvent(
        'click',
        true,
        false,
        window,
        0,
        0,
        0,
        0,
        0,
        false,
        false,
        false,
        false,
        0,
        null
      )
      return a.dispatchEvent(e)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/style/common.scss';

.result-container {
  width: 100%;
  padding: 20px 0;
  animation: 1s appear;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 1px solid #dde2e9;
  margin-bottom: 24px;
}
</style>
