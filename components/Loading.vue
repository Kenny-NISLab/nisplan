<template>
  <div>
    <transition name="pageLoading">
      <div
        v-show="pageLoading"
        class="fixed inset-0 bg-white z-10 flex justify-center items-center"
      >
        <img src="../static/twitter-card.png" alt="NISPLAN" class="max-h-64" />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageLoading: true,
    }
  },
  mounted() {
    window.addEventListener('load', () => {
      setTimeout(() => {
        this.pageLoading = false
      }, 1500)
    })
  },
}
</script>

<style scoped>
.pageLoading-leave-active {
  transition: all 0.25s ease-out;
}
.pageLoading-enter,
.pageLoading-leave-to {
  opacity: 0;
}
.max-h-64 {
  max-width: 16rem;
}
</style>
