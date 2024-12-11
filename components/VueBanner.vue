<template>
  <div class="carousel-container">
  <el-carousel :interval="4000" arrow="always"  class="custom-carousel">
    <el-carousel-item v-for="(item, index) in images" :key="index" class="carousel-item">
      <img :src="item.src" :alt="item.alt" class="carousel-image" />
    </el-carousel-item>
  </el-carousel>
</div>
</template>

<script>
import elimg1 from '../image/elimg1.jpg'; // 引入本地图片
import elimg2 from '../image/elimg2.jpg';
import elimg3 from '../image/elimg3.jpg';
export default {
  data() {
    return {
      images: [
        {
          src: elimg1,
          alt: 'Slide 1',
        },
        {
          src: elimg2,
          alt: 'Slide 2',
        },
        {
          src: elimg3,
          alt: 'Slide 3',
        },
      ],
    };
  },
};
</script>

<style scoped>
.carousel-item{
  height: 450px; /* 固定高度 */
}

.carousel-container {
  width: 100%; /* 轮播图容器宽度 */
  height: 450px; /* 固定高度 */
  margin: 0 auto; /* 居中对齐 */
 
  border: 2px solid #ccc; /* 边框 */
  border-radius: 10px; /* 圆角效果 */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); /* 阴影效果 */
}

.custom-carousel {
  width: 100%; 
  height: 100%;
}
.carousel-image {
  width: 100%;       
  height: 100%;    
  border-radius: 10px; /* 圆角效果 */
}


</style>
