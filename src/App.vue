<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {

    // apiAddressArea () {
    //   this.$api.apiAddressArea().then(res => {
    //     if (res.isError) return
    //     this.$store.commit('app/COMMIT_REGION', res.data)
    //   })
    // }
  },
  created () {
    // this.apiAddressArea()
  }
}
</script>

<style lang="scss">
#app {
  min-width: 1200px;
  font-size: 14px;
  color: #1f2329;
  height: 100%;
  width: 100%;
}

* {
  margin: 0;
  padding: 0;
}
html,
body {
  width: 100%;
  height: 100%;
  line-height: 1.15;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  font-family: Microsoft YaHei;
}
ul {
  list-style: none;
}
a {
  text-decoration: none;
}
img {
  vertical-align: top;
  border: none;
}

.clearf:after,
.clearf:before {
  content: '';
  display: block;
  clear: both;
}

button {
  font-family: Microsoft YaHei;
}
</style>
