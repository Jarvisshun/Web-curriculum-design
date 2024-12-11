<template>
  <div class="history">
    <h2>历史沿革</h2>
    <div class="content">
      <div class="timeline">
        <div class="time-item">
          <h3>建校初期（1952-1959）</h3>
          <p>1952年，中国人民银行保定银行学校成立，这是学校的最初起点。1956年天津银行学校和1957年河北省分行干校先后并入，形成了更大规模的教育机构。</p>
        </div>

        <div class="time-item">
          <h3>恢复发展时期（1964-1980）</h3>
          <p>1964年，学校恢复为中国人民银行保定银行学校。1972年，更名为河北财金学校。1980年，学校进行双重更名，分别称为中国人民银行河北银行学校和河北银行学校。</p>
        </div>

        <div class="time-item">
          <h3>专科发展时期（1984-1992）</h3>
          <p>1984年，学校升格为专科院校，更名为保定金融专科学校，标志着学校进入了高等教育阶段。1992年，更名为保定金融高等专科学校，进一步提升了办学层次。</p>
        </div>

        <div class="time-item">
          <h3>本科发展时期（2007-至今）</h3>
          <p>2007年，学校成功升格为本科院校，正式更名为河北金融学院，这标志着学校发展进入了一个新的历史阶段。</p>
        </div>
      </div>

      <div class="history-chart">
        <h3>学校更名历程</h3>
        <ul>
          <li><span class="year">1952-1959：</span>中国人民银行保定银行学校</li>
          <li><span class="year">1964：</span>中国人民银行保定银行学校（恢复）</li>
          <li><span class="year">1972：</span>河北财金学校</li>
          <li><span class="year">1980：</span>中国人民银行河北银行学校/河北银行学校</li>
          <li><span class="year">1984：</span>保定金融专科学校</li>
          <li><span class="year">1992：</span>保定金融高等专科学校</li>
          <li><span class="year">2007：</span>河北金融学院</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineComponent } from 'vue'

defineComponent({
  name: 'SchoolHistory'
})
</script>

<style scoped>
.history {
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

.timeline {
  margin: 30px 0;
}

.time-item {
  margin: 20px 0;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
  border-left: 4px solid #3498db;
}

h3 {
  color: #2c3e50;
  margin-bottom: 15px;
  font-size: 18px;
  font-weight: bold;
}

p {
  text-indent: 2em;
  margin-bottom: 15px;
  line-height: 1.8;
}

.history-chart {
  margin: 30px 0;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
}

.history-chart ul {
  list-style: none;
  padding: 0;
}

.history-chart li {
  margin: 15px 0;
  padding-left: 20px;
  position: relative;
}

.history-chart li:before {
  content: "•";
  color: #3498db;
  position: absolute;
  left: 0;
}

.year {
  font-weight: bold;
  color: #2c3e50;
  margin-right: 10px;
}
</style> 