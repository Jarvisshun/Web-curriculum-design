<template>
  <div class="subject-page">
    <div class="sidebar">
      <el-menu
        class="subject-menu"
        :default-active="activeIndex"
        @select="handleSelect">
        <el-menu-item index="/subject/key">重点学科</el-menu-item>
        <el-menu-item index="/subject/undergrad">本科专业</el-menu-item>
        <el-menu-item index="/subject/graduate">研究生专业</el-menu-item>
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
const activeIndex = ref('/subject/key')

const handleSelect = (key) => {
  router.push(key)
}
</script>

<style scoped>
.subject-page {
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

.subject-menu {
  border-right: none;
}
</style> 