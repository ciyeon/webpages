<template>
  <div>
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect"
      background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" :router=flag>
      <el-menu-item index="/operate/home">主页</el-menu-item>
      <el-menu-item index="/operate/write">编写案例</el-menu-item>
      <el-menu-item index="/operate/test">润色案例</el-menu-item>
      <el-submenu index="2" id="user">
        <template slot="title">欢迎，用户{{this.$store.state.userMessage.name}}</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
      </el-submenu>
    </el-menu>
    <router-view />
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        activeIndex2: '/operate/home',
        flag: true
      };
    },
    created () {
      this.activeIndex2 = this.$route.path
      axios.get('/api/user', {
        headers: {
          'token': this.$store.state.jwt
        }
      }).then(res => {
        //console.log(res)
        if (res.data.code == 1) {
          this.$store.commit('setName', res.data.data.name)
          this.$store.commit('setPermission', res.data.data.permission)
          //console.log(this.$store.state.userMessage.name)
        }
        else {
          this.$store.commit('setName', '请求失败 ')
        }
      }).catch(err => {
        console.log(err.response)
      })
    },
    methods: {
      handleSelect (key) {
        console.log(key);
      }
    }
  }
</script>

<style>
  #user {
    float: right;
  }
</style>