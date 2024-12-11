<template>
  <div class="faculty-page">
    <div class="sidebar">
      <el-menu
        class="faculty-menu"
        :default-active="activeIndex"
        @select="handleSelect">
        <el-menu-item index="/faculty/overview">师资概况</el-menu-item>
        <el-menu-item index="/faculty/talents">杰出人才</el-menu-item>
        <el-menu-item index="/faculty/professors">教授名录</el-menu-item>
      </el-menu>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const activeIndex = ref('/faculty/overview')

const handleSelect = (key) => {
  router.push(key)
}
</script>

<style scoped>
.faculty-page {
  display: flex;
  min-height: calc(100vh - 60px);
}

.sidebar {
  width: 200px;
  background-color: #f5f7fa;
  border-right: 1px solid #e6e6e6;
}

.content {
  flex: 1;
  padding: 20px;
}

.faculty-menu {
  border-right: none;
}
</style> 