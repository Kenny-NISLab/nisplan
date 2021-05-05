<template>
  <article>
    <div class="inline-block rounded-full bg-gray-300 pr-5 h-16">
      <img
        :src="avatar"
        :alt="name + 'のプロフィール画像'"
        class="w-16 md:w-24 h-16 md:h-24"
      />
      <span class="ml-3">{{ name }}</span>
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
      default: '@/assets/images/defaultAvatar.jpg',
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
