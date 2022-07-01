<template>
  <HeaderNav></HeaderNav>
  <div class="content">
    <SideBar></SideBar>
    <div class="main"></div>
  </div>
</template>

<script setup lang="ts">
import HeaderNav from "@/components/HeaderNav.vue";
import SideBar from "@/components/SideBar.vue";
</script>

<style lang="scss">
@use "@/styles/reset.scss";
html,
body {
  width: 100%;
  height: 100%;
  background: #f4f5f5;
}
#app {
  width: 100%;
  height: 100%;

  .content {
    display: flex;
    height: calc(100% - 60px);
    .main {
      flex: 1;
      height: 100%;
      overflow-y: auto;
    }
  }
}
</style>
