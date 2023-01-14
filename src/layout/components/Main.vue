<template>
  <div class="page_wrap">
    <keep-alive>
      <router-view :key="key"
                   v-if="keepAlive" />
    </keep-alive>
    <router-view :key="key"
                 v-if="!keepAlive" />
  </div>
</template>

<script>
export default {
  name: 'MainComponent',
  computed: {
    key () {
      return this.$route.path
    },
    keepAlive () {
      return this.$route.meta.keepAlive
    }
  }
}

</script>
<style scoped lang='scss'>
.page_wrap {
}
</style>
