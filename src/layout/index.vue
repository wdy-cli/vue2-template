<template>
  <el-container style="height: 500px; border: 1px solid #eee">
    <el-header>
      <Header></Header>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <Aside></Aside>
      </el-aside>
      <el-main>
        <Main></Main>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Aside from './components/Aside.vue'
import Header from './components/Header.vue'
import Main from './components/Main.vue'
export default {
  name: 'LayoutIndex',
  methods: {

  },
  data () {
    return {

    }
  },
  components: {
    Header,
    Aside,
    Main
  },
  mounted () {

  },
  created () {

  }
}

</script>
<style scoped lang='scss'>
.page_wrap {
}
</style>
