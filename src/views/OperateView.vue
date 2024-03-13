<template>
  <div>
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect"
      background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" :router=flag>
      <el-menu-item index="/operate/home">Home</el-menu-item>
      <el-menu-item index="/operate/about">About</el-menu-item>
      <el-menu-item index="/operate/test">Test</el-menu-item>
      <el-submenu index="2" id="user">
        <template slot="title">欢迎，</template>
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
        activeIndex2: '1',
        flag: true
      };
    },
    created () {
      axios.get('/api/emps/' + this.$store.userMessage.account, {
        headers: {
          'token': this.$store.jwt
        }
      }).then(res => {
        if (res.data.code == 1) {
          this.$store.commit('setName', res.data.name)
          console.log(this.$store.userMessage.name)
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
    position: absolute;
    right: 0;
  }
</style>