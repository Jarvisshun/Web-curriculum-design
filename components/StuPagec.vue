<template>
    <div class="container">
      <!-- 上部分：顶部图片展示 -->
      <img src="../image/top_image.jpg" alt="页面顶部图片" class="top-image">
    
    <div>
      <nav>
        <a href="#" @click.prevent="currentSection ='summary'">师资队伍概括</a>
        <a href="#" @click.prevent="currentSection = 'innovationTeam'">创新团队</a>
        <a href="#" @click.prevent="currentSection = 'outstandingTalents'">杰出人才</a>
        <a href="#" @click.prevent="currentSection = 'tutorInfo'">导师信息</a>
      </nav>
      <section v-if="currentSection ==='summary'">
        <h2>师资队伍概括</h2>
        <div class="summary">
          <p>人才资源是第一资源，在我国实施科教兴国和人才强国战略的机遇期，将我校建成金融特色鲜明的高水平应用型财经大学，关键在于建设一支优秀的人才队伍，构建有利于吸引、培养优秀人才和创新团队的大学文化，充分调动教职员工的积极性和创造性。加快实施人才强校战略，大力加强师资队伍建设，是推进学校各项事业发展的重中之重。</p>
          <p>学校一直十分重视师资队伍的培养，按照"高水平、应用型、国际化"的师资队伍建设目标，优化结构，强化激励，建立促进教师资源的开发利用和优秀人才迅速成长的有效机制，建设一支师德高尚、结构合理、素质良好、应用能力强的高水平教师队伍。全校共有教职工近 800 人，具有硕士以上学历学位教职工占 90%以上，高级专业技术职务教师比例占 30%以上，双师型教师 100 余人，双语教师近 50 人，近年来学校派出教师出国研修 97 人次，国外研修和具有海外留学背景的教师占专任教师近四分之一；有行业背景和行业挂职锻炼的教师占专任教师近四分之一。专业教师具有年轻化、学缘结构好、国际化、应用性强的特点，基本上形成了一支能够适应新型优质本科大学教育的高素质教师队伍。</p>
          <p>学校坚持培养与引进相结合，提高教师的整体素质。聘请 12 位国内外高水平知名学者担任首席专家和专业带头人，带领及打造青年教师教学科研团队；重视新教师上岗培训，引导教师树立使命感和责任感；实行教师教学能力提升计划，加强教师的专业技能及科研能力培训；落实《河北金融学院教职工读博士学研究生的规定》，鼓励教师在职提高学历水平，激活教师内在的进修提高动力。近年来，学校拥有河北省管优秀专家、河北省有突出贡献的中青年专家、河北省"三三三人才工程"、全国优秀教师、河北省优秀教师、河北省教学名师等省级以上高层次人才 32 名。</p>
          <p>学校重视应用型教师队伍建设，为应用型人才的培养和服务地方经济发展奠定坚实的师资基础。招聘有行业背景的实践型人才参与到育人过程中，鼓励教师参与实践能力提高的各个环节，有六个月以上行业经验和行业背景的教师 100 余人。构建高素质的外聘教师队伍，从金融机构和其他业务部门聘请工作经验丰富又具备一定理论水平的技术人员、管理人员或业务骨干作为外聘教师，承担技能性较强的课程的教学和实训指导工作，学校的行业外聘教师 100 余人。形成了专兼结合、理论与实践结合的应用型师资队伍。</p>
          <p>学校重视青年教师培养，使青年教师成为促进学校发展的骨干力量和生力军。实施以师德建设为根本、以专题培训为基础、以提升教学能力为核心、以提升科研能力为手段、以提升应用能力为目标的青年教师职业发展培训体系。年教师思维活跃、成长迅速。近三年优秀教学奖获得者中青年教师占比 45%；双师型"教师中青年教师占比 50%；省、市级课题立项年教师分别占 26%和 53.7%；"翻转课堂"参与人员中，青年教师达 70%；指导学生参与校外学术竞赛获市级以上奖项的，青年教师达 74.5%。青年教师的培养与发展将会为学校的可持续发展提供强大的、不竭的动力与支撑。</p>
          <p>学校坚持开放办学，重视教师的国际化视野。 2010 年至 2015 年，我校累计聘用外籍教师 104 人次，合作院校派遣专业教师达 35 人次；在美国、爱尔兰和印度建立 3 个教师海外研修基地，共派出 97 人次不同领域的专业教师赴合作院校进行访学，派出领域覆盖学校所有专业。</p>
          <p>"十三五"期间，学校将以深化体制机制改革为突破，着力推进领军人物锻造计划、优秀团队建设计划、教学名师培养计划、青年教师素质提升计划，激发人才活力、增强人才凝聚力，培养造就一支适应新型优质本科大学要求，能满足应用型人才培养需要的布局合理、结构优化、素质优良、具有较强创新应用能力和国际视野的高水平师资队伍，为应用型人才的培养和服务地方经济发展提供坚强的人才保障！</p>
        </div>
      </section>
      <section v-if="currentSection === 'innovationTeam'" class="section innovation - team - section">
        <h2 class="section - title">创新团队</h2>
        <div class="innovation - team - content">
          <h3>各类教学团队一览表</h3>
          <h4>省级优秀教学团队</h4>
          <table class="table">
            <thead>
              <tr>
                <th>序号</th>
                <th>名称</th>
                <th>团队带头人</th>
                <th>团队成员</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>金融学教学团队</td>
                <td>陈尊厚</td>
                <td>王春满、秦菊香、李海燕、张建民、李艳红、刘秀兰、尹继志、苗绘、秦响应、郭净、耿军会</td>
              </tr>
              <tr>
                <td>2</td>
                <td>会计学教学团队</td>
                <td>程培先</td>
                <td>侯艳蕾、唐晓娟、赵兴梅、郭长城、杨会朴、刘红红、宋艳敏、李小娟、王鑫斌、赵爱莉、胡俊芬、贾亚丽</td>
              </tr>
              <tr>
                <td>3</td>
                <td>信息管理与信息系统教学团队</td>
                <td>郑艳娟</td>
                <td>王涛、何志强、张红霞、曹莹、崔新会、郭佳、朱建林、齐晓娜、安文广、杜辉、刘冲、李明祥</td>
              </tr>
            </tbody>
          </table>
          <h4>省级精品课程教学团队</h4>
          <table class="table">
            <thead>
              <tr>
                <th>序号</th>
                <th>部门</th>
                <th>课程名称</th>
                <th>课程负责人</th>
                <th>录课教师</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>保险系</td>
                <td>保险学</td>
                <td>王香兰</td>
                <td>王香兰</td>
              </tr>
              <tr>
                <td>2</td>
                <td>信管系</td>
                <td>C语言程序设计</td>
                <td>赵秀明</td>
                <td>赵秀明、郑艳娟、张红霞、罗新方</td>
              </tr>
              <tr>
                <td>3</td>
                <td>会计系</td>
                <td>中级财务会计</td>
                <td>唐晓娟</td>
                <td>唐晓娟、杨会朴、陈琳</td>
              </tr>
              <tr>
                <td>4</td>
                <td>经贸系</td>
                <td>统计学</td>
                <td>李爱兰</td>
                <td>李爱兰、娟、刘学兵、周素彦、谢敬、张沧丽</td>
              </tr>
              <tr>
                <td>5</td>
                <td>信管系</td>
                <td>数据库原理</td>
                <td>张宇敬</td>
                <td>张宇静、崔新会、朱建林、赵秀明</td>
              </tr>
            </tbody>
          </table>
          <h4>校级精品课程教学团队</h4>
          <table class="table">
            <thead>
              <tr>
                <th>序号</th>
                <th>部门</th>
                <th>课程名称</th>
                <th>课程负责人</th>
                <th>职称</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>商务外语系</td>
                <td>金融英语</td>
                <td>赵惠娟</td>
                <td>教授</td>
              </tr>
              <tr>
                <td>2</td>
                <td>法学系</td>
                <td>金融法</td>
                <td>王儒靓</td>
                <td>教授</td>
              </tr>
              <tr>
                <td>3</td>
                <td>管理系</td>
                <td>市场营销学</td>
                <td>赵清</td>
                <td>教授</td>
              </tr>
              <tr>
                <td>4</td>
                <td>会计系</td>
                <td>基础会计</td>
                <td>唐晓娟</td>
                <td>教授</td>
              </tr>
              <tr>
                <td>5</td>
                <td>经贸系</td>
                <td>现代物流管理</td>
                <td>胡书金</td>
                <td>教授</td>
              </tr>
              <tr>
                <td>6</td>
                <td>保险系</td>
                <td>财产保险</td>
                <td>高鹏</td>
                <td>副教授</td>
              </tr>
              <tr>
                <td>7</td>
                <td>金融系</td>
                <td>商业银行经营管理</td>
                <td>李艳红</td>
                <td>教授</td>
              </tr>
              <tr>
                <td>8</td>
                <td>金融系</td>
                <td>证券投资学</td>
                <td>李海燕</td>
                <td>教授</td>
              </tr>
              <tr>
                <td>9</td>
                <td>金融系</td>
                <td>金融学</td>
                <td>张建民</td>
                <td>教授</td>
              </tr>
              <tr>
                <td>10</td>
                <td>管理系</td>
                <td>管理学</td>
                <td>尚云仙</td>
                <td>教授</td>
              </tr>
              <tr>
                <td>11</td>
                <td>商外系</td>
                <td>国际贸易实务（英语）</td>
                <td>赵惠娟</td>
                <td>教授</td>
              </tr>
              <tr>
                <td>12</td>
                <td>商外系</td>
                <td>综合英语教程</td>
                <td>徐三乔</td>
                <td>教授</td>
              </tr>
              <tr>
                <td>13</td>
                <td>会计系</td>
                <td>ERP沙盘模拟实训</td>
                <td>曹荣</td>
                <td>教授</td>
              </tr>
              <tr>
                <td>14</td>
                <td>信息管理与工程系</td>
                <td>计算机网络原理</td>
                <td>赵秀明</td>
                <td>教授</td>
              </tr>
              <tr>
                <td>15</td>
                <td>金融系</td>
                <td>国际金融</td>
                <td>王敬花</td>
                <td>副教授</td>
              </tr>
              <tr>
                <td>16</td>
                <td>管理系</td>
                <td>公共关系学</td>
                <td>李红英</td>
                <td>副教授</td>
              </tr>
              <tr>
                <td>17</td>
                <td>法学系</td>
                <td>国际经济法</td>
                <td>王儒靓</td>
                <td>教授</td>
              </tr>
              <tr>
                <td>18</td>
                <td>法学系</td>
                <td>经济法</td>
                <td>王儒靓</td>
                <td>教授</td>
              </tr>
              <tr>
                <td>19</td>
                <td>商务外语系</td>
                <td>剑桥商务英语</td>
                <td>王杰</td>
                <td>副教授</td>
              </tr>
              <tr>
                <td>20</td>
                <td>经贸系</td>
                <td>国际贸易理论与实务</td>
                <td>田晓丽</td>
                <td>教授</td>
              </tr>
              <tr>
                <td>21</td>
                <td>信管系</td>
                <td>网络操作系统应用</td>
                <td>郑艳娟</td>
                <td>教授</td>
              </tr>
              <tr>
                <td>22</td>
                <td>信管系</td>
                <td>数据结构</td>
                <td>张宇敬</td>
                <td>教授</td>
              </tr>
              <tr>
                <td>23</td>
                <td>信管系</td>
                <td>Java程序设计</td>
                <td>张红霞</td>
                <td>副教授</td>
              </tr>
              <tr>
                <td>24</td>
                <td>会计系</td>
                <td>会计电算化</td>
                <td>程培先</td>
                <td>教授</td>
              </tr>
              <tr>
                <td>25</td>
                <td>会计系</td>
                <td>财务管理</td>
                <td>宋艳敏</td>
                <td>教授</td>
              </tr>
              <tr>
                <td>26</td>
                <td>管理系</td>
                <td>人力资源管理</td>
                <td>石春玲</td>
                <td>副教授</td>
              </tr>
              <tr>
                <td>27</td>
                <td>管理系</td>
                <td>广告学</td>
                <td>赵晓明</td>
                <td>讲师</td>
              </tr>
              <tr>
                <td>28</td>
                <td>经贸系</td>
                <td>宏观经济学</td>
                <td>季小江</td>
                <td>教授</td>
              </tr>
              <tr>
                <td>29</td>
                <td>信管系</td>
                <td>管理信息系统</td>
                <td>张红霞</td>
                <td>副教授</td>
              </tr>
              <tr>
                <td>30</td>
                <td>信管系</td>
                <td>Web开发技术</td>
                <td>曹莹</td>
                <td>副教授</td>
              </tr>
            </tbody>
          </table>
        </div>
          </section>
          <section v-if="currentSection === 'outstandingTalents'" class="section outstanding - talents - section">
      <h2 class="section - title">杰出人才</h2>
      <div class="outstanding - talents - content">
        <h3>. 专家：</h3>
        <ul>
          <li>杨兆廷  国务院政府特殊津贴专家</li>
          <li>汤生玲  河北省省管优秀专家</li>
          <li>杨兆廷  河北省有突出贡献中青年专家</li>
        </ul>
        <h3>模范：</h3>
        <ul>
          <li>杨兆廷  河北省劳动模范</li>
          <li>万素英  河北省劳动模范</li>
          <li>田晓丽  河北省五一劳动奖章</li>
          <li>赵清华  河北省模范教师</li>
          <li>赵永新  河北省模范教师</li>
          <li>刘晓俊  河北省模范教师</li>
        </ul>
        <h3>名师：</h3>
        <ul>
          <li>郑艳娟  全国优秀教师</li>
          <li>秦菊香  河北省教学名师</li>
          <li>赵永新  河北省教学名师</li>
          <li>王香兰  河北省教学名师</li>
          <li>李海燕  河北省优秀教师</li>
          <li>张沧丽  河北省优秀教师</li>
          <li>田秀峰  河北省优秀教师</li>
        </ul>
        <h3>人才：</h3>
        <ul>
          <li>杨蕾  河北省青年拔尖人才</li>
          <li>河北省新世纪"三三三人才工程"第二层次人选：
            <ul>
              <li>杨兆廷、苗  绘、杨  蕾、阎东彬</li>
            </ul>
          </li>
          <li>河北省新世纪"三三三人才工程"第三层次人选：
            <ul>
              <li>陈志强、秦菊香、鲍静海、李海申、李志明、邢  琳、郭  净、陈小荣、胡继成</li>
              <li>李  明、袁国强、王  宁、王宝娜、尹  航、康绍大、李巧莎、胡叶星寒</li>
              <li>刘妮雅、刘  宾、刘政永、何志强、程颖慧、丁立磊、马瑞贤、杨  念</li>
              <li>任爱华、郑思海、胡恒松</li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
      <section v-if="currentSection === 'tutorInfo'">
        <h2>导师信息</h2>
        <div class="tutor-info">
          <table>
            <thead>
              <tr>
                <th>姓名</th>
                <th>职称</th>
                <th>研究领域</th>
                <th>荣誉称号</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>王宪明</td>
                <td>校内导师</td>
                <td>金融工程</td>
                <td> 河北省有突出贡献中青年专家</td>
              </tr>
              <tr>
                <td>王春满</td>
                <td>河北金融学院教授</td>
                <td>货币运行与金融体制、货币政策与金融监管、金融信托与社会保障度等</td>
                <td> 1988年河北省先进金融工作者、1996年河北省高校先进科技工作者、2009年金融教育先进工作者</td>
              </tr>
              <tr>
                <td>田晓丽</td>
                <td>教授、金融与投资学院党总支书记</td>
                <td>国际金融、国际贸易的研究</td>
                <td>2011年5月获河北省"五一"劳动奖章，
                  2013年8月被评为保定市社科优秀青年专家，市厅级课题4项</td>
              </tr>
              <tr>
                <td>田卫民</td>
                <td>副研究员</td>
                <td>金融经济学；数量经济学</td>
                <td> 第一批河北省高校百名优秀创新人才支持计划</td>
              </tr>
              <tr>
                <td>刘洪生</td>
                <td>河北金融学院副教授</td>
                <td> 公司金融、资本市场、商业银行理论与实务</td>
                <td>《管理会计导论》与王思妍等合译，东北财经大学出版社，2009年9月</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const currentSection = ref('summary');
  </script>
  
  <style scoped>
  /* 整体页面布局和样式 */
  .container {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
   
   /* 上部分：顶部图片样式保持不变 */
   .top-image {
     width: 100%;
     max-height: 200px;
     object-fit: cover;
   }
  nav {
    background-color: #333;
    color: white;
    display: flex;
    justify-content: space-around;
    padding: 10px 0;
  }
  
  nav a {
    color: white;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  nav a:hover {
    color: #ccc;
  }
  
  section {
    padding: 20px;
    border: 1px solid #ccc;
    margin: 20px;
    border-radius: 5px;
  }
  
  h2 {
    color: #333;
    border-bottom: 2px solid #333;
    padding-bottom: 10px;
    margin-bottom: 15px;
  }
  
  /* 师资队伍概括样式 */
  .summary p {
    text-align: justify;
    line-height: 1.5;
  }
  
  /* 创新团队样式 */
  .innovation-team ul {
    list-style-type: none;
    padding: 0;
  }
  
  .innovation-team li {
    margin-bottom: 15px;
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  /* 杰出人才样式 */
  .outstanding-talents ul {
    list-style-type: none;
    padding: 0;
  }
  
  .outstanding-talents li {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .outstanding-talents img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-right: 15px;
  }
  
  /* 导师信息样式 */
  .tutor-info table {
    width: 100%;
    border-collapse: collapse;
  }
  
  .tutor-info th,
  .tutor-info td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
  }
  
  .tutor-info th {
    background-color: #333;
    color: white;
  }
  </style>