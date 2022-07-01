<template>
  <el-menu
    background-color="#fff"
    text-color="#515767"
    active-text-color="#138a64"
    class="side-bar"
    default-active="1"
  >
    <el-menu-item index="1">
      <el-icon><HomeFilled /></el-icon> <span>首页</span>
    </el-menu-item>
    <el-sub-menu index="2">
      <template #title>
        <el-icon><document /></el-icon> <span>文章</span>
      </template>
      <el-menu-item index="2-1">文章列表</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Setting,
  HomeFilled,
} from "@element-plus/icons-vue";
</script>

<style lang="scss" scoped>
.side-bar {
  width: 250px;
  height: auto;
  .el-menu-item {
    &:hover {
      background: #f4f5f5;
    }
  }
}
</style>
