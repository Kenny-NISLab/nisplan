<template>
  <transition name="fade">
    <article>
      <div class="h-8 flex ml-6 items-center">
        <img
          :src="avatar"
          :alt="name + 'のプロフィール画像'"
          class="rounded-full h-full"
        />
        <span class="ml-4">{{ name }}</span>
      </div>
    </article>
  </transition>
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
.fade-enter {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}
.fade-enter-active {
  transition: all 5s ease-out;
}
</style>
