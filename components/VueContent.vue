<template>
  <div>
  <div id="app">
    <h1>走进河金</h1>
    <el-row :gutter="20">
      <el-col :span="8" v-for="article in articles" :key="article.id">
        <el-card :body-style="{ padding: '20px' }">
          <div  class="clearfix">
            <span id="spantitle">{{ article.title }}</span>
          </div>
          <img :src="article.image" class="card-image" />
          <div class="content">
            <p id="pid">{{ article.description }}</p>
          </div>
          <div style="text-align: right;">
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
<div id="video">
  <h1>宣传视频</h1>
  <video controls width="1200px">
      <source :src="videoSrc" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
</div>
 
  
  </div>
</template>

<script>
import videoFile from '../image/video.mp4';
import hejin1 from '../image/hejin1.jpg'; // 引入本地图片
import hejin2 from '../image/hejin2.jpg';
import hejin3 from '../image/hejin3.jpg';
export default {
  data() {
    return {
      videoSrc:videoFile,
      articles: [
        {
          id: 1,
          title: '层楼叠榭皆爱 书香锦润校园',
          description: '校园楼宇在阳光下闪耀散发科技与内涵之美，仿佛一位多才的学者彰显着他的渊博遨游在知识的海洋沉浸在此 感受文化的魅力',
          image: hejin1
        },
        {
          id: 2,
          title: '香飘十里之外 味美最醉人心',
          description: '五颜六色的河金美食散发着迷人的香酸甜苦辣咸，仿佛人生百态不断吸引河金人去探索，去解密',
          image: hejin2
        },
        {
          id: 3,
          title: '奋斗在于拼搏 青春诠释梦想',
          description: '河金人努力的身影在自律中变得更加坚毅，自习室里一摞摞的书籍是河金人前进的决心，图书馆坐满的座位带着河金人的理想',
          image: hejin3
        }
      ],
    };
  },
};
</script>

<style scoped>
#spantitle{
  font-size: 20px;
  font-weight: bold;
}
#pid{
  font-family: 'SimSun', '宋体', serif; 

}
#app{
  margin: 10px;
}
.custom-card {
  width: 300px; /* 设置宽度 */
  height: 400px; /* 设置高度 */
  border: 2px solid #409EFF; /* 设置边框颜色和大小 */
  border-radius: 10px; /* 设置圆角 */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* 添加阴影 */
}
.card-image {
  width: 100%;
  height: 500px;
}
.content {
  min-height: 60px; /* 确保内容区有一定高度 */
}

.footer {
    background-color: #333;
    color: #fff;
    padding: 20px 0;
    position: relative;
    
}

.footer-container {
    display: flex;
    justify-content: space-around;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.footer-links, .footer-social, .footer-info {
    flex: 1;
    margin: 0 10px;
}

.footer h4 {
    margin-bottom: 10px;
    font-size: 18px;
}

.footer ul {
    list-style-type: none;
    padding: 0;
}

.footer ul li {
    margin: 5px 0;
}

.footer a {
    color: #fff;
    text-decoration: none;
}

.footer a:hover {
    text-decoration: underline;
}
</style>
