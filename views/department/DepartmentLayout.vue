<template>
  <div class="dept-page">
    <div class="sidebar">
      <el-menu
        class="department-menu"
        :default-active="activeIndex"
        @select="handleSelect">
        <el-menu-item index="/department/party">党政管理机构</el-menu-item>
        <el-menu-item index="/department/teaching">教学机构</el-menu-item>
        <el-menu-item index="/department/research">科研机构</el-menu-item>
        <el-menu-item index="/department/support">教辅机构</el-menu-item>
        <el-menu-item index="/department/other">其它</el-menu-item>
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
const activeIndex = ref('/department/party')

const handleSelect = (key) => {
  router.push(key)
}
</script>

<style scoped>
.dept-page {
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

.department-menu {
  border-right: none;
}
</style> 