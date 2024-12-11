<template>
  <div>
    <!-- 网站头部区域 -->
    <header class="header">
      <!-- 左侧的 logo 容器 -->
      <div class="logo-container">
        <!-- 显示学校 logo 图片 -->
        <img src="../image/logo.jpg" alt="Logo" class="logo" />
      </div>
      <!-- 搜索框容器 -->
      <div class="search-container">
        <!-- 搜索输入框 -->
        <input type="text" placeholder="搜索..." class="search-input" />
        <!-- 搜索按钮 -->
        <button class="search-button">搜索</button>
      </div>
    </header>

    <!-- 导航栏区域 -->
    <header>
      <!-- 首页按钮 -->
      <button @click="gotomain">首页</button>
      
      <!-- 学校概况下拉菜单 -->
      <div class="dropdown">
        <button @click="gotopage">学校概况</button>
        <div class="dropdown-content">
          <a @click="gotoIntro">学校简介</a>
          <a @click="gotoCharter">学校章程</a>
          <a @click="gotoHistory">历史沿革</a>
          <a @click="gotoCurrentLeaders">现任领导</a>
          <a @click="gotoStats">统计概览</a>
          <a @click="gotoSymbols">校徽校训校歌</a>
        </div>
      </div>

      <!-- 机构设置下拉菜单 -->
      <div class="dropdown">
        <button @click="gotopage2">机构设置</button> 
        <div class="dropdown-content">
          <a @click="gotoParty">党政管理机构</a>
          <a @click="gotoTeaching">教学机构</a>
          <a @click="gotoAdmin">科研机构</a>
          <a @click="gotoDirect">教辅机构</a>
          <a @click="gotoOther">其它</a>
        </div>
      </div>

      <!-- 学科专业按钮 -->
      <button @click="gotopage3">学科专业</button>

      <!-- 师资队伍按钮 -->
      <button @click="gotoFacultyTeam">师资队伍</button>
    </header>
  </div>
</template>
  
<script>
export default {
  methods: {
    // 跳转到首页
    gotomain() {
      this.$router.push({ name: 'MainHome' });
    },
    // 跳转到学校概况
    gotopage() {
      this.$router.push('/school/intro');
    },
    // 跳转到机构设置
    gotopage2() {
      this.$router.push('/department');
    },
    // 跳转到学科专业
    gotopage3() {
      this.$router.push('/subject');
    },
    // 跳转到学校简介
    gotoIntro() {
      this.$router.push('/school/intro');
    },
    // 跳转到学校章程
    gotoCharter() {
      this.$router.push('/school/constitution');
    },
    // 跳转到历史沿革
    gotoHistory() {
      this.$router.push('/school/history');
    },
    // 跳转到现任领导
    gotoCurrentLeaders() {
      this.$router.push('/school/current-leaders');
    },
    // 跳转到统计概览
    gotoStats() {
      this.$router.push('/school/statistics');
    },
    // 跳转到校徽校训校歌
    gotoSymbols() {
      this.$router.push('/school/symbols');
    },
    // 跳转到党政管理机构
    gotoParty() {
      this.$router.push('/department/party');
    },
    // 跳转到教学机构
    gotoTeaching() {
      this.$router.push('/department/teaching');
    },
    // 跳转到科研机构
    gotoAdmin() {
      this.$router.push('/department/research');
    },
    // 跳转到教辅机构
    gotoDirect() {
      this.$router.push('/department/support');
    },
    // 跳转到其他机构
    gotoOther() {
      this.$router.push('/department/other');
    },
    // 跳转到师资队伍
    gotoFacultyTeam() {
      this.$router.push({
        path: '/faculty/team',
        query: { section: 'summary' }
      });
    }
  }
};
</script>
  
<style scoped>
/* 通用按钮样式 */
button {
  border: none;
  outline: none;
  margin-left: 60px;
  font-size: 20px;
  text-align: center;
  background-color: #4fa1d8;
  padding: 0 20px;
  width: 120px;
  cursor: pointer;
}

/* 按钮悬停样式 */
button:hover {
  background-color: yellow;
}

/* 顶部导航栏样式 */
header {
  background-color: #4fa1d8;
  padding: 1rem;
  height: 20px;
  text-align: center;
}

/* 导航链接样式 */
nav a {
  margin-right: 5rem;
  color: white;
  text-decoration: none;
  text-align: center;
}

/* 顶部头部样式 */
.header {
  display: flex;
  justify-content: left;
  align-items: center;
  height: 60px;
  background-color: rgb(20, 20, 128);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

/* Logo 样式 */
.logo-container {
  max-width: 100px;
  width: 100%;
}

.logo {
  width: 400px;
  height: auto;
}

/* 搜索框容器样式 */
.search-container {
  display: flex;
  align-items: center;
  margin-left: auto;
}

/* 搜索输入框样式 */
.search-input {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
}

/* 搜索按钮样式 */
.search-button {
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* 下拉菜单容器样式 */
.dropdown {
  position: relative;
  display: inline-block;
}

/* 下拉菜单内容样式 */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #002147;
  width: 120px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  margin-left: 60px;
}

/* 下拉菜单项样式 */
.dropdown-content a {
  color: white;
  padding: 12px 0;
  text-decoration: none;
  display: block;
  text-align: center;
  font-size: 16px;
}

/* 下拉菜单项悬停样式 */
.dropdown-content a:hover {
  background-color: #003366;
}

/* 鼠标悬停显示下拉菜单 */
.dropdown:hover .dropdown-content {
  display: block;
}
</style>
