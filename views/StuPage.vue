<template>
  <div class="stu-page">
    <div class="sidebar">
      <el-menu
        class="school-menu"
        :default-active="activeIndex"
        @select="handleSelect">
        <el-menu-item index="/school/intro">学校简介</el-menu-item>
        <el-menu-item index="/school/constitution">学校章程</el-menu-item>
        <el-menu-item index="/school/history">历史沿革</el-menu-item>
        <el-menu-item index="/school/current-leaders">现任领导</el-menu-item>
        <el-menu-item index="/school/statistics">统计概览</el-menu-item>
        <el-menu-item index="/school/symbols">校徽校训校歌</el-menu-item>
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

const activeIndex = ref('/school/intro')

const handleSelect = (key) => {
  router.push(key)
}
</script>

<style scoped>
.stu-page {
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

.school-menu {
  border-right: none;
}
</style> 