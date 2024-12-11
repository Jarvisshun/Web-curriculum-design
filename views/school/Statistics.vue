<template>
  <div class="statistics">
    <h2>统计概览</h2>
    <div class="content">
      <div class="stat-section">
        <h3>基本情况</h3>
        <div class="stat-grid">
          <div class="stat-item">
            <span class="label">校园面积（亩）</span>
            <span class="value">1135</span>
          </div>
          <div class="stat-item">
            <span class="label">建筑面积（万平方米）</span>
            <span class="value">22.13</span>
          </div>
        </div>
      </div>

      <div class="stat-section">
        <h3>在校学生人数</h3>
        <div class="stat-grid">
          <div class="stat-item">
            <span class="label">在校学生总数</span>
            <span class="value">13775</span>
          </div>
          <div class="stat-item">
            <span class="label">其中：硕士生</span>
            <span class="value">185</span>
          </div>
          <div class="stat-item">
            <span class="label">本科生</span>
            <span class="value">12137</span>
          </div>
          <div class="stat-item">
            <span class="label">专科生</span>
            <span class="value">717</span>
          </div>
          <div class="stat-item">
            <span class="label">留学生</span>
            <span class="value">38</span>
          </div>
          <div class="stat-item">
            <span class="label">函授生</span>
            <span class="value">698</span>
          </div>
        </div>
      </div>

      <div class="stat-section">
        <h3>图书资料</h3>
        <div class="stat-grid">
          <div class="stat-item">
            <span class="label">纸质图书（万册）</span>
            <span class="value">138</span>
          </div>
          <div class="stat-item">
            <span class="label">电子图书（万册）</span>
            <span class="value">34</span>
          </div>
          <div class="stat-item">
            <span class="label">纸质期刊（种）</span>
            <span class="value">892</span>
          </div>
          <div class="stat-item">
            <span class="label">数据库（个）</span>
            <span class="value">17</span>
          </div>
        </div>
      </div>

      <div class="stat-section">
        <h3>学科专业</h3>
        <div class="stat-grid">
          <div class="stat-item">
            <span class="label">学院、教学部</span>
            <span class="value">17</span>
          </div>
          <div class="stat-item">
            <span class="label">本科专业</span>
            <span class="value">29</span>
          </div>
          <div class="stat-item">
            <span class="label">专科专业</span>
            <span class="value">6</span>
          </div>
        </div>
      </div>

      <div class="stat-section">
        <h3>重点建设</h3>
        <div class="stat-list">
          <div class="list-item">
            <span class="label">硕士学位授权学科点</span>
            <span class="value">1个</span>
          </div>
          <div class="list-item">
            <span class="label">省级重点学科</span>
            <span class="value">1个</span>
          </div>
          <div class="list-item">
            <span class="label">省级重点发展学科</span>
            <span class="value">3个</span>
          </div>
          <div class="list-item">
            <span class="label">国家级品牌特色专业</span>
            <span class="value">1个</span>
          </div>
          <div class="list-item">
            <span class="label">省级一流本科专业建设点</span>
            <span class="value">10个</span>
          </div>
          <div class="list-item">
            <span class="label">省级品牌特色专业</span>
            <span class="value">4个</span>
          </div>
        </div>
      </div>

      <div class="stat-section">
        <h3>师资队伍</h3>
        <div class="stat-grid">
          <div class="stat-item">
            <span class="label">教职工总数</span>
            <span class="value">815人</span>
          </div>
          <div class="stat-item">
            <span class="label">专任教师</span>
            <span class="value">625人</span>
          </div>
          <div class="stat-item">
            <span class="label">正高职</span>
            <span class="value">96人</span>
          </div>
          <div class="stat-item">
            <span class="label">副高职</span>
            <span class="value">213人</span>
          </div>
        </div>
      </div>

      <div class="stat-section">
        <h3>科研情况</h3>
        <div class="stat-grid">
          <div class="stat-item">
            <span class="label">省级科研平台</span>
            <span class="value">6个</span>
          </div>
          <div class="stat-item">
            <span class="label">市级科研平台</span>
            <span class="value">3个</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineComponent } from 'vue'

defineComponent({
  name: 'SchoolStatistics'
})
</script>

<style scoped>
.statistics {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

h2 {
  color: #2c3e50;
  border-bottom: 2px solid #3498db;
  padding-bottom: 10px;
  margin-bottom: 20px;
}

.content {
  line-height: 1.8;
  color: #333;
}

.stat-section {
  margin: 30px 0;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

h3 {
  color: #2c3e50;
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: bold;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
}

.stat-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.stat-item {
  padding: 15px;
  background: white;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.stat-list .list-item {
  padding: 12px 15px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.stat-list .list-item:last-child {
  border-bottom: none;
}

.label {
  color: #666;
}

.value {
  color: #2c3e50;
  font-weight: bold;
}
</style> 