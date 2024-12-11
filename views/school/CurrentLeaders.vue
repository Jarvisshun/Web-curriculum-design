<template>
  <div class="current-leaders">
    <h2>现任领导</h2>
    <div class="content">
      <div class="leaders-table">
        <table>
          <thead>
            <tr>
              <th>职务</th>
              <th>姓名</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>党委书记</td>
              <td>徐永斌</td>
            </tr>
            <tr>
              <td>校长</td>
              <td>杨伟坤</td>
            </tr>
            <tr>
              <td>党委副书记</td>
              <td>朱连才</td>
            </tr>
            <tr>
              <td>党委副书记</td>
              <td>黄伟</td>
            </tr>
            <tr>
              <td>党委常委、副校长</td>
              <td>韩景旺</td>
            </tr>
            <tr>
              <td>党委常委、副校长</td>
              <td>秦菊香</td>
            </tr>
            <tr>
              <td>党委常委、副校长</td>
              <td>王伟</td>
            </tr>
            <tr>
              <td>
                党委常委、纪委书记<br>
                省监委驻河北金融学院监察专员<br>
                二级高级监察官
              </td>
              <td>聂会文</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineComponent } from 'vue'

defineComponent({
  name: 'SchoolCurrentLeaders'
})
</script>

<style scoped>
.current-leaders {
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

.leaders-table {
  margin: 30px 0;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 15px 20px;
  text-align: left;
  border-bottom: 1px solid #eee;
}

th {
  background-color: #f8f9fa;
  color: #2c3e50;
  font-weight: bold;
}

tr:hover {
  background-color: #f5f7fa;
}

td {
  line-height: 1.6;
}

tbody tr:last-child td {
  border-bottom: none;
}
</style> 