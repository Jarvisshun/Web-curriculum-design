<template>
  <div class="constitution">
    <h2>学校章程</h2>
    <div class="content">
      <div class="chapter">
        <h3>河北金融学院章程</h3>
        
        <div class="section">
          <h4>序言</h4>
          <p>河北金融学院前身是1952年由中国人民银行总行创办的保定银行学校，1984年更名为"保定金融专科学校"，2000年划归河北省人民政府管理，2007年升格为本科院校，更名为"河北金融学院"，2011年成为"服务国家特需项目"金融专业硕士学位研究生培养试点单位。</p>
          <p>学校发扬植根金融行业办学的优良传统，坚持"以师生发展为中心，构建师生成长共同体"的办学理念，培养为中国特色社会主义服务，具有高尚品德、家国情怀、科学思维、工匠精神、国际视野和良好发展潜质的高素质复合型、应用型经济管理人才，致力于建设新时代高水平应用型财经大学。</p>
        </div>

        <div class="section">
          <h4>第一章 总则</h4>
          <p>学校是河北省人民政府举办，由中央与地方共建、以地方管理为主的全日制普通高等学校。学校主管部门是河北省教育厅。学校是非营利性事业组织，具有独立法人资格。</p>
          <p>学校坚持中国共产党领导，全面贯彻党的教育方针，坚持社会主义办学方向，落实立德树人根本任务。</p>
        </div>

        <div class="section">
          <h4>第二章 学生</h4>
          <p>学生是指被学校依法录取、取得入学资格，具有学校学籍的受教育者。学生在校期间依法享有参加教育教学活动、使用教育教学资源、参加社会实践等权利，同时须履行遵守法律法规、遵守学校规章制度等义务。</p>
        </div>

        <div class="section">
          <h4>第三章 教职工</h4>
          <p>学校教职工由教师、其他专业技术人员、管理人员和工勤人员等组成。学校实行教师资格认证和岗位聘用制度，建立健全教职工培训体系和职业发展制度。</p>
        </div>

        <div class="section">
          <h4>第四章 管理体制和组织机构</h4>
          <p>学校实行中国共产党河北金融学院委员会领导下的校长负责制。学校设立学术委员会、学位评定委员会等机构，建立教职工代表大会制度。</p>
        </div>

        <div class="section">
          <h4>第五章 教学科研机构</h4>
          <p>学校设立学院（系、部）、研究所等教学科研机构，实行校院两级管理体制。学院（系、部）在学校授权范围内实行自主管理。</p>
        </div>

        <div class="section">
          <h4>第六章 校友</h4>
          <p>校友是学校的宝贵资源。学校设立河北金融学院校友总会，以多种方式联络校友、服务校友，促进学校和校友共同发展。</p>
        </div>

        <div class="section">
          <h4>第七章 经费、资产、后勤</h4>
          <p>学校经费来源包括财政补助收入、事业收入等。学校实行统一领导、集中核算、分级管理的财务管理制度，建立健全后勤管理和服务保障体系。</p>
        </div>

        <div class="section">
          <h4>第八章 学校校训、标识和其他</h4>
          <p>学校校训为"明德守信、求真尚行"。校徽为圆形，以战国时代赵国特有钱币——尖足铲形币为主体造型。校庆日为每年的9月28日。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineComponent } from 'vue'

defineComponent({
  name: 'SchoolConstitution'
})
</script>

<style scoped>
.constitution {
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

.chapter {
  margin: 20px 0;
}

h3 {
  color: #2c3e50;
  text-align: center;
  margin-bottom: 30px;
  font-size: 24px;
}

.section {
  margin: 30px 0;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
}

h4 {
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
</style> 