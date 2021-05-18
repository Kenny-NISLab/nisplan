<template>
  <article>
    <div class="h-8 flex items-center">
      <img
        :src="avatar"
        :alt="name + 'のプロフィール画像'"
        class="rounded-full h-full"
      />
      <span class="ml-4">{{ name }}</span>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
      default: 'Not Found',
    },
    avatar: {
      type: String,
      required: true,
      default: require('@/assets/images/defaultAvatar.jpg'),
    },
    index: {
      type: Number,
      required: true,
      default: 0,
    },
    id: {
      type: Number,
      required: true,
      default: 0,
    },
  },
}
</script>
<style scoped>
.line-height-username {
  line-height: 2rem;
}
</style>
