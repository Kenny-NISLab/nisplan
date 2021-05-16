<template>
  <article class="w-3/6 mb-3">
    <div
      class="inline-block text-center rounded-full h-8 line-height-username min-w-full"
    >
      <img
        :src="avatar"
        :alt="name + 'のプロフィール画像'"
        class="rounded-full float-left h-full"
      />
      <span>{{ name }}</span>
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
