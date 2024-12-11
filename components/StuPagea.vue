<template>
  <div class="page-container">
    <div class="container">
      <!-- 上部分：顶部图片展示 -->
      <img src="../image/book.jpeg" alt="页面顶部图片" class="top-image">
    </div>
    <div>
      <!-- 重点学科信息表 -->
      <h2>重点学科信息表</h2>
      <table class="discipline-table">
        <thead>
          <tr>
            <th>序号</th>
            <th>学科名称</th>
            <th>学制</th>
            <th>批准时间</th>
            <th>学科级别</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(discipline, index) in allDisciplines" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ discipline.name }}</td>
            <td>四年</td>
            <td>{{ discipline.approvalTime }}</td>
            <td>{{ discipline.level }}</td>
          </tr>
        </tbody>
      </table>

      <!-- 本科教育信息表 -->
      <h2>本科教育信息表</h2>
      <table class="undergraduate-table">
        <thead>
          <tr>
            <th>序号</th>
            <th>专业名称</th>
            <th>学制</th>
            <th>专业代码</th>
            <th>学科门类</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(major, index) in undergraduateMajors" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ major.name }}</td>
            <td>{{ major.length }}</td>
            <td>{{ major.code }}</td>
            <td>{{ major.category }}</td>
          </tr>
        </tbody>
      </table>

      <!-- 专科生教育信息表 -->
      <h2>专科生教育信息表</h2>
      <table class="junior-college-table">
        <thead>
          <tr>
            <th>序号</th>
            <th>专业名称</th>
            <th>学制</th>
            <th>专业代码</th>
            <th>专业大类</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(major, index) in juniorCollegeMajors" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ major.name }}</td>
            <td>{{ major.length }}</td>
            <td>{{ major.code }}</td>
            <td>{{ major.category }}</td>
          </tr>
        </tbody>
      </table>

      <!-- 研究生教育信息 -->
      <h2>研究生教育信息</h2>
      <div class="graduate-info">
        <ul>
          <li>2011 年，我校被国务院学位委员会批准为“服务国家特殊需求人才培养项目”试点单位，授权培养金融硕士专业学位研究生。</li>
          <li>我校在“特需项目”试点工作中始终贯彻和落实“服务需求、突出特色、创新模式、严格标准”的指导思想。从服务社会、满足行业对人才需求的角度出发，成立由学校和行业专家组成的金融硕士专业学位研究生联合培养委员会，采取 “双主体、双导师、双考核”的联合培养模式，致力于培养具有扎实的经济、金融学理论基础，良好的职业道德，富有创新和进取精神，较强的从事金融实际工作能力的高层次应用型金融专业人才。</li>
          <li>我校金融硕士培养采取全日制方式，学制两年，由课程学习、专业实习、学位论文研究三个主要环节组成。修满规定学分、完成专业实习并通过论文答辩者，经校学位评定委员会审核，授予金融硕士专业学位，同时获得硕士研究生毕业证书。</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 整合后的重点学科数据
      allDisciplines: [
        { name: '金融学', approvalTime: '2013.02', level: '河北省重点学科' },
        { name: '会计学', approvalTime: '2010.02', level: '河北省重点发展学科' },
        { name: '企业管理', approvalTime: '2013.02', level: '河北省重点发展学科' },
        { name: '计算机应用技术', approvalTime: '2013.02', level: '河北省重点发展学科' },
        { name: '统计学', approvalTime: '2013.02', level: '校级重点学科' },
        { name: '产业经济学', approvalTime: '2014.10', level: '校级重点学科' },
        { name: '经济法学', approvalTime: '2014.10', level: '校级重点发展学科' },
        { name: '国际商务学', approvalTime: '2014.10', level: '校级重点发展学科' },
        { name: '应用数学', approvalTime: '2014.10', level: '校级优秀培育学科' },
        { name: '外国语言学及应用语言学', approvalTime: '2014.10', level: '校级优秀培育学科' }
      ],
      // 本科教育数据
      undergraduateMajors: [
        { name: '金融学', length: '四年', code: '020301K', category: '经济学' },
        { name: '投资学', length: '四年', code: '20304', category: '经济学' },
        { name: '信用管理', length: '四年', code: '020306T', category: '经济学' },
        { name: '会计学', length: '四年', code: '120203K', category: '管理学' },
        { name: '会计学ACCA', length: '四年', code: '120203K', category: '管理学' },
        { name: '会计学CPA', length: '四年', code: '120203K', category: '管理学' },
        { name: '财务管理', length: '四年', code: '120204', category: '管理学' },
        { name: '审计学', length: '四年', code: '120207', category: '管理学' },
        { name: '保险学', length: '四年', code: '20303', category: '经济学' },
        { name: '财政学', length: '四年', code: '020201K', category: '经济学' },
        { name: '税收学', length: '四年', code: '20202', category: '经济学' },
        { name: '精算学', length: '四年', code: '020308T', category: '经济学' },
        { name: '工商管理', length: '四年', code: '120201K', category: '管理学' },
        { name: '人力资源管理', length: '四年', code: '120206', category: '管理学' },
        { name: '市场营销', length: '四年', code: '120202', category: '管理学' },
        { name: '文化产业管理', length: '四年', code: '120210', category: '管理学' },
        { name: '国际经济与贸易', length: '四年', code: '20401', category: '经济学' },
        { name: '经济学', length: '四年', code: '20101', category: '经济学' },
        { name: '物流管理', length: '四年', code: '120601', category: '管理学' },
        { name: '电子商务', length: '四年', code: '120801', category: '经济学' },
        { name: '数字经济', length: '四年', code: '020109T', category: '经济学' },
        { name: '供应链管理', length: '四年', code: '120604T', category: '管理学' },
        { name: '信息与计算科学', length: '四年', code: '70102', category: '理学' },
        { name: '信息管理与信息系统', length: '四年', code: '120102', category: '管理学' },
        { name: '计算机科学与技术', length: '四年', code: '80901', category: '工学' },
        { name: '信息安全', length: '四年', code: '080904K', category: '工学' },
        { name: '智能科学与技术', length: '四年', code: '080907T', category: '工学' },
        { name: '物联网工程', length: '四年', code: '080905', category: '工学' },
        { name: '英语', length: '四年', code: '50201', category: '文学' },
        { name: '商务英语', length: '四年', code: '50262', category: '文学' },
        { name: '翻译', length: '四年', code: '050261', category: '文学' },
        { name: '知识产权', length: '四年', code: '030102T', category: '法学' },
        { name: '法学', length: '四年', code: '030101K', category: '法学' },
        { name: '互联网金融', length: '四年', code: '020309T', category: '经济学' },
        { name: '金融工程', length: '四年', code: '20302', category: '经济学' },
        { name: '人工智能', length: '四年', code: '080717T', category: '工学' },
        { name: '区块链工程', length: '四年', code: '080917T', category: '工学' },
        { name: '金融科技', length: '四年', code: '020310T', category: '经济学' },
        { name: '经济统计学', length: '四年', code: '20102', category: '经济学' },
        { name: '数据科学与大数据技术', length: '四年', code: '080910T', category: '工学' },
        { name: '金融数学', length: '四年', code: '020305T', category: '经济学' },
        { name: '应用统计学', length: '四年', code: '71202', category: '理学' },
        { name: '数据计算及应用', length: '四年', code: '070104T', category: '理学' },
        { name: '财务管理（合作办学）', length: '四年', code: '120204H', category: '管理学' },
        { name: '会计学（合作办学）', length: '四年', code: '120203KH', category: '管理学' },
        { name: '金融学（合作办学）', length: '四年', code: '020301KH', category: '经济学' },
        { name: '金融学（合作办学）—出国方向', length: '四年', code: '020301KH', category: '经济学' }
      ],
      // 专科生教育数据
      juniorCollegeMajors: [
        { name: '金融管理与实务', length: '三年', code: '620103', category: '财经大类' },
        { name: '证券投资与管理', length: '三年', code: '620110', category: '财经大类' },
        { name: '保险实务', length: '三年', code: '620107', category: '财经大类' },
        { name: '会计', length: '三年', code: '620203', category: '财经大类' },
        { name: '国际经济与贸易', length: '三年', code: '620303', category: '财经大类' },
        { name: '工商企业管理', length: '三年', code: '620501', category: '财经大类' }
      ]
    };
  },
  created() {
    this.handleRouteChange(this.$route.path);
  },
  watch: {
    '$route.path': {
      handler(newPath) {
        this.handleRouteChange(newPath);
      },
      immediate: true
    }
  },
  methods: {
    handleRouteChange(path) {
      switch(path) {
        case '/subject/key':
          this.showKeyDisciplines();
          break;
        case '/subject/undergrad':
          this.showUndergraduatePrograms();
          break;
        case '/subject/graduate':
          this.showGraduatePrograms();
          break;
        default:
          this.showAllPrograms();
      }
    },
    showKeyDisciplines() {
      // 显示重点学科信息
      this.currentView = 'key';
    },
    showUndergraduatePrograms() {
      // 显示本科专业信息
      this.currentView = 'undergrad';
    },
    showGraduatePrograms() {
      // 显示研究生专业信息
      this.currentView = 'graduate';
    },
    showAllPrograms() {
      // 显示所有专业信息
      this.currentView = 'all';
    }
  }
};
</script>

<style scoped>
.discipline-table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #ccc;
}

.discipline-table th,
.discipline-table td {
  border: 1px solid #ccc;
  padding: 8px 12px;
  text-align: left;
}

.discipline-table th {
  background-color: #e6e6e6;
}

.undergraduate-table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #ccc;
  margin-top: 20px;
}

.undergraduate-table th,
.undergraduate-table td {
  border: 1px solid #ccc;
  padding: 8px 12px;
  text-align: left;
}

.undergraduate-table th {
  background-color: #e6e6e6;
}

.junior-college-table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #ccc;
  margin-top: 20px;
}

.junior-college-table th,
.junior-college-table td {
  border: 1px solid #ccc;
  padding: 8px 12px;
  text-align: left;
}

.junior-college-table th {
  background-color: #ebebeb;
}

.graduate-info {
  margin-top: 20px;
  line-height: 1.5;
}

.graduate-info ul {
  list-style-type: disc;
  padding-left: 20px;
}
</style>