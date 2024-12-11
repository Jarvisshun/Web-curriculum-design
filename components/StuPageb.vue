<template>
  <div class="container">
    <!-- 上部分：顶部图片展示 -->
    <img src="../image/top_image.jpg" alt="页面顶部图片" class="top-image">
    <!-- 中部分 -->
    <div class="middle-section">
      <!-- 中部分的右部分（移除了左侧导航） -->
      <div class="right-section">
        <div class="middle-content">
          <!-- 机构列表 -->
          <div class="department-list" style="flex-wrap: wrap;">
            <div class="department-item" v-for="(department, deptIndex) in currentDepartments" :key="deptIndex" @click="showDepartmentInfo(department)">
              {{ department.name }}
            </div>
          </div>
          <!-- 在页面中间添加图片 -->
          <div class="middle-images">
            <img src="../image/elimg2.jpg" alt="中间图片1" class="middle-image-1">
          </div>
        </div>
      </div>
    </div>
    <!-- 下部分：机构介绍展示 -->
    <div class="bottom-section">
      <div id="department-info">
        <p v-if="selectedDepartmentInfo">{{ selectedDepartmentInfo.description }}</p>
        <p v-else>请选择机构以查看介绍。</p>
      </div>
    </div>
  </div>
</template>
  
    <script>
    export default {
      data() {
        return {
          categories: [
            {
              name: '党政管理机构',
              departments: [
              {
                name: '党委办公室/行政办公室',
                description: '学校党委与行政综合事务协调服务部门，处理信息、文件、会议等工作，保障党政工作运转。'
              },
              {
                name: '党委宣传部/新闻中心',
                description: '负责学校宣传思想事务，进行内外宣传、文化活动推广，塑造学校形象与传播价值观。'
              },
              {
                name: '监察审计处/纪委办公室',
                description: '监督审查学校行政与财务，履行纪委纪律检查职能，维护党纪党风与工作合规性。'
              },
              {
                name: '教务处',
                description: '主导学校教学规划与管理，涵盖课程编排、资源调配、质量监督评估等，保障教学秩序与质量。'
              },
              {
                name: '人事处',
                description: '处理教职工人事事务，包括招聘、培训、考核、职称评定、薪酬福利管理等，助力师资队伍建设。'
              },
              {
                name: '财务处',
                description: '承担学校财务管理，涉及预算编制、资金收支核算、报表编制、资产管理等，维护财务稳定健康。'
              },
              {
                name: '校园规划处',
                description: '规划校园长期发展，包括土地利用、基础设施建设、环境美化规划等，绘制校园发展蓝图。'
              },
              {
                name: '国际教育交流中心',
                description: '推动国际教育合作交流，负责国际学生事务、学术交流活动组织、教师海外培训等。'
              },
              {
                name: '党委组织部/党委统战部',
                description: '组织部负责党组织建设与干部工作；统战部联系民主党派等统一战线成员，凝聚各方力量。'
              },
              {
                name: '工会',
                description: '教职工自愿结合组织，开展福利、权益维护、文体活动，增强学校凝聚力与教职工交流。'
              },
              {
                name: '团委',
                description: '组织学生思想政治教育、文化、实践、志愿服务活动，管理学生团组织，培养学生综合素质。'
              },
              {
                name: '学生工作部/学生处/武装部',
                description: '学生工作部与学生处负责学生思政教育、行为规范管理等；武装部承担军事训练、国防教育与征兵工作。'
              },
              {
                name: '科研处',
                description: '管理推动学校科研项目，涵盖申报组织、经费管理、成果转化推广、团队建设等，提升科研水平。'
              },
              {
                name: '国有资产与后勤管理处',
                description: '管理国有资产清查登记等工作，提供后勤保障服务，包括环境卫生、水电暖供应、食堂监管等。'
              },
              {
                name: '安全工作处',
                description: '维护校园安全稳定，执行安全制度、开展教育活动、巡逻防控、处理突发事件，营造安全环境。'
              },
              {
                name: '校友办公室',
                description: '联络服务校友，建立信息库，组织活动，挖掘校友资源，促进校友与母校交流合作。'
              }
              ]
            },
            {
              name: '教学机构',
              departments: [
              {
                name: '金融与投资学院',
                description: '专注金融与投资教学研究，培养专业人才，开展学术研究与实践教学，输送金融人才。'
              },
              {
                name: '保险与财政学院',
                description: '围绕保险与财政学科教学科研，教授专业课程，培养相关领域人才，开展学术与社会服务。'
              },
              {
                name: '经济贸易学院',
                description: '以经济学和贸易学为方向，开设专业课程，培养学生经济贸易知识技能，推动学术与实践应用。'
              },
              {
                name: '国际商务外语学院',
                description: '培养学生外语应用与国际商务知识技能，开设外语与商务课程，开展教学研究与文化交流。'
              },
              {
                name: '金融科技学院',
                description: '结合金融与科技，设置课程体系，培养复合型人才，探索金融科技创新应用。'
              },
              {
                name: '国际教育学院',
                description: '承担国际学生教育教学任务，开展国际教育合作项目，如中外联合培养、交换生项目等，促进国际教育资源交流共享，为学生搭建国际化学习平台，助力其拓展国际视野与跨文化交流能力。'
              },
              {
                name: '体育教育教学部',
                description: '负责体育教育，包括课程教学、体质测试、活动组织、竞赛举办、师资建设，推动体育文化建设。'
              },
              {
                name: '外语教育教学部',
                description: '专注外语教学，提供全校外语基础课程，研究教学方法，提升外语教学质量。'
              },
              {
                name: '会计学院',
                description: '以会计学为核心，培养会计人才，设置专业课程体系，开展理论与实践研究，提供人才支持。'
              },
              {
                name: '管理学院',
                description: '涵盖多管理学科，培养学生管理能力，开展学术研究与实践应用，培养管理人才。'
              },
              {
                name: '信息工程与计算机学院',
                description: '专注信息工程与计算机教学研究，培养学生专业技能，开展技术创新与应用开发。'
              },
              {
                name: '法学院',
                description: '进行法学教育研究，开设专业课程，培养法律人才，开展理论研究与实践服务。'
              },
              {
                name: '大数据科学学院',
                description: '围绕大数据教学科研，设置课程体系，培养大数据处理能力，探索前沿应用。'
              },
              {
                name: '研究生部',
                description: '负责研究生招生、培养、学位授予管理，制定方案制度，组织教学科研活动，保障教育质量。'
              },
              {
                name: '马克思主义学院',
                description: '承担思想政治理论课教学，开展理论研究与学科建设，培养学生正确三观，提供思政教育支持。'
              },
              {
                name: '人文艺术教育教学部',
                description: '培养学生人文素养与艺术修养，开设人文艺术课程，开展文化艺术活动，促进全面发展。'
              }
              ]
            },
            {
              name: '科研机构',
              departments: [
              {
                name: '校学术委员会',
                description: '学校学术事务咨询审议机构，审议学科建设、学术评价等事务，保障学术决策科学公正。'
              },
              {
                name: '金融研究所',
                description: '聚焦金融研究，开展理论、市场、政策研究，支撑金融学科建设，提供行业建议与交流合作。'
              },
              {
                name: '德融研究院',
                description: '研究德融相关主题在多领域应用，探索融合机制路径，提供特色研究与社会服务平台。'
              },
              {
                name: '河北省科技金融协同创新中心',
                description: '推动区域科技与金融协同创新，整合资源，开展创新模式研究与服务平台建设。'
              },
              {
                name: '河北省科技金融重点实验室',
                description: '开展科技金融基础理论与应用技术研究，配备设施，吸引科研人员，提供技术支撑。'
              },
              {
                name: '爱尔兰研究中心',
                description: '专注爱尔兰文化、教育等研究，促进学校与爱尔兰学术交流合作，开展研究项目与活动。'
              }
              ]
            },
            {
              name: '教辅机构',
              departments: [
              {
                name: '图书馆',
                description: '学校信息资源中心，收藏丰富资源，提供借阅、检索、咨询、研讨空间，支撑教学科研。'
              },
              {
                name: '高教研究所',
                description: '从事高等教育理论与实践研究，关注政策、管理、改革等课题，提供决策咨询与理论依据。'
              },
              {
                name: '实验教学中心',
                description: '组织管理实验教学，提供场地、设备、技术支持，制定计划标准，培养实践能力。'
              },
              {
                name: '金博物馆',
                description: '展示金融文物资料与文化，传播金融历史知识，丰富校园文化，提供研究平台。'
              },
              {
                name: '金融理论探索编辑部',
                description: '编辑出版金融理论学术期刊，征集评审稿件，促进金融学术交流传播。'
              },
              {
                name: '信息技术中心',
                description: '负责学校信息化建设管理，涵盖网络、系统、技术应用、数据中心管理，提升信息化水平。'
              }
              ]
            },
            {
              name: '其它',
              departments: [
                { name: '餐厅', description: '餐厅是学校提供餐饮服务的地方，有多种餐饮选择。' },
                { name: '学生公寓', description: '学生公寓专为学生打造，集住宿、生活辅助于一体，有多种房型与配套设施，实行规范管理，分校内校外两类。' },
                { name: '博学楼', description: '知识殿堂，学子于斯广纳智慧，如蜜蜂入繁花盛境，博采众长。' },
                { name: '尚行楼', description: '实践熔炉，理论在此锻造成真，似雏鸟试翼苍穹，以行践知。' },
                { name: '笃学楼', description: '钻研静所，众人潜心叩问真知，像耕者深耕沃野，笃志不倦。' },
              ]
            }
          ],
          currentDepartments: [],
          selectedDepartmentInfo: null
        };
      },
      created() {
        this.handleRouteChange();
      },
      watch: {
        '$route.path': {
          handler() {
            this.handleRouteChange();
          },
          immediate: true
        }
      },
      methods: {
        handleRouteChange() {
          const path = this.$route.path;
          let categoryName = '';
          
          switch(path) {
            case '/department/party':
              categoryName = '党政管理机构';
              break;
            case '/department/teaching':
              categoryName = '教学机构';
              break;
            case '/department/research':
              categoryName = '科研机构';
              break;
            case '/department/support':
              categoryName = '教辅机构';
              break;
            case '/department/other':
              categoryName = '其它';
              break;
            default:
              categoryName = '党政管理机构';
          }
          
          const targetCategory = this.categories.find(c => c.name === categoryName);
          if (targetCategory) {
            this.showDepartments(targetCategory);
          }
        },
        showDepartments(category) {
          this.currentDepartments = category.departments;
        },
        showDepartmentInfo(department) {
          this.selectedDepartmentInfo = department;
        }
      }
    };
    </script>
  
    <style scoped>
 .container {
   display: flex;
   flex-direction: column;
   width: 100%; /* 设���宽度为100%，占满父元素宽度（一般就是浏览器视口宽度） */
   min-width: 100%; /* 确保最小宽度也是占满视口宽度 */
   height: 100vh; /* 设置高度为视口高度，1vh等于视口高度的1% */
   min-height: 100vh; /* 确保最小高度也是占满视口高度 */
   margin: 0 auto;
 }
  
  /* 上部分：顶部图片样式保持不变 */
  .top-image {
    width: 100%;
    max-height: 200px;
    object-fit: cover;
  }
  
  /* 中部分整体样式 */
  .middle-section {
    display: flex;
    flex: 1;
    margin-top: 10px;
  }
  
  /* 中部分的右部分样式 */
  .right-section {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space - between;
  }
  
 /* 中间内容整体容器样式，设置为flex布局，方便机构列表和图片水平排列等 */
 .middle-content {
   display: flex;
   flex: 1;
   justify-content: space-between; /* 让机构列表和图片在水平方向均匀分布空间，可按需调整 */
 }
 
 /* 机构列表样式，可根据实际需求调整宽度等 */
 .department-list {
   width: 70%; /* 占据70%的宽度，可根据需求改变占比 */
   flex: 1;
   overflow-y: auto;
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   gap: 10px;
   transition: opacity 0.3s ease-in-out;
 }
 
 /* 中间图片的容器样式，设置为flex布局方便图片排列等 */
 .middle-images {
   display: flex;
   flex-direction: column; /* 图片垂直排列，可根据需求改为水平排列 */
   justify-content: space-between; /* 调整图片之间间距布局，可按需修改 */
   width: 30%; /* 占据30%的宽度，可根据需求改变占比 */
 }
 /* 中间第一张图片样式 */
 .middle-image-1 {
   width: 100%; /* 可根据实际需求调整宽度 */
   height: 100%; /* 可根据实际需求调整高度 */
   object-fit: cover;
   margin-left: 7px; /* 增大了左边的间距，这里设置为30px，可根据实际需求调整具体数值 */
 }
  /* 机构列表中的每个项目样式 */
  .department-item {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease-in-out;
    padding: 15px;
    border-radius: 8px;
    background-color: #e9e9e9;
    color: #444;
  }
  .department-item:hover {
    background-color: #d0d0d0;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  /* 下部分：机构介绍展示区域样式 */
  .bottom-section {
    height: 200px;
    border-top: 1px solid #e0e0e0;
    padding: 10px;
    margin-top: 10px;
  }
  
  #department-info {
    margin-top: 20px;
    border: 2px solid green;
    border-radius: 8px;
    padding: 20px;
  }
  
  .category-card {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease-in-out;
    padding: 15px;
    border-radius: 8px;
    background-color: #f9f9f9;
    color: #333;
  }
  .category-card:hover {
    background-color: #e0e0e0;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
    </style>