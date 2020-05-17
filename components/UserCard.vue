<template>
  <b-card
    :class="{
      'user-card-female': userData.gender === 'female',
      'user-card-male': userData.gender === 'male'
    }"
  >
    <div class="picture-container">
      <img :src="userData.picture.large" alt="Profile picture" />
    </div>
    <b-card-title>{{ title }} </b-card-title>
    <b-card-sub-title class="mb-2">{{ userData.email }}</b-card-sub-title>
  </b-card>
</template>

<script>
export default {
  name: 'UserCard',
  props: {
    userData: {
      type: Object,
      required: true
    }
  },
  computed: {
    title() {
      const { title, first, last } = this.userData.name
      return `${title}. ${first} ${last}`
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/style/common.scss';

@mixin userCard($color) {
  border-bottom: 6px solid $color;

  .picture-container > img {
    border: 3px solid $color;
  }
}

.user-card-female {
  @include userCard($female-color);
}

.user-card-male {
  @include userCard($male-color);
}

.picture-container {
  margin: 14px auto 22px;
  width: 120px;

  & > img {
    display: block;
    max-width: 100%;
    border-radius: 100%;
  }
}
</style>
