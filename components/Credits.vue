<template>
  <div class="credit">
    <b-button v-b-modal.modal-center variant="link" size="sm">Credits</b-button>
    <b-modal
      id="modal-center"
      centered
      title="Credits"
      ok-only
      ok-title="Close"
    >
      <b-list-group>
        <b-list-group-item
          v-for="(credit, index) in credits"
          :key="index"
          class="item"
          target="_blank"
          rel="noreferrer"
          :href="credit.url"
          >{{ credit.label }}:
          <strong>{{ credit.content }}</strong></b-list-group-item
        >
      </b-list-group>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'Credits',
  data() {
    return {
      credits: [
        {
          label: 'Author',
          content: 'Nicolas Jacquet',
          url: 'https://github.com/NicolasJacquet'
        },
        {
          label: 'API',
          content: 'Randomuser.me',
          url: 'https://randomuser.me/'
        },
        {
          label: 'Icons',
          content: 'Vitaly Gorbachev',
          url: 'https://www.flaticon.com/authors/vitaly-gorbachev'
        },
        {
          label: 'Framework',
          content: 'NUXTJS',
          url: 'https://nuxtjs.org/'
        },
        {
          label: 'UI',
          content: 'Bootstrap Vue',
          url: 'https://bootstrap-vue.org'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.credit {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #f4f8fe;
  z-index: 100;
}
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
