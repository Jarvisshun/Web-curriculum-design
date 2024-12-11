<template>
  <div class="symbols">
    <h2>校徽校训校歌</h2>
    <div class="content">
      <div class="section">
        <h3>校徽</h3>
        <div class="emblem">
          <!-- <div class="emblem-image">
            <img src="../../assets/logo.jpg" alt="河北金融学院校徽" class="emblem-img"/>
          </div> -->
          <div class="emblem-desc">
            <p>校徽以春秋战国时代赵国特有钱币——尖足铲形币为主体造型，体现了学校所在地——燕赵大地河北的地域特点和悠久的货币流通历史。尖足铲形币后面的曲线代表延绵于燕赵大地的山脉、河流，喻指传统文化中的"仁"与"智"的精神。山脉的延绵不绝和河水的川流不息象征着学校历史源远流长，发展绵延有力，向社会源源不断的输出杰出人才。</p>
            <p>校徽主体图标外围，学校的中英文名称呈圆环状排列，与尖足铲形币的主体形象标志相呼应，整体上构成庄重的极具文化感的徽章效果。铲币下面1952年为学校建校时间。</p>
            <p>校徽色彩为深蓝色略加紫，在视觉效果上极具厚重感、严肃感。校徽标志主体突出、左右对称、风格坚实稳重，充分展现了学校历史及学校专业特征，涵纳了"明德守信 求真尚行"的校训。</p>
          </div>
        </div>
      </div>

      <div class="section">
        <h3>校训</h3>
        <div class="motto">
          <div class="motto-text">明德守信 求真尚行</div>
          <div class="motto-explanation">
            <p>"明德"，语出《礼记·大学》"大学之道，在明明德，在亲民，在止于至善。" "明德"即弘扬光大崇高的道德情操和理想追求。对学校而言，德为育人之本；对学子而言，德为成人之本。彰显我校以德治校、以德育人。</p>
            <p>"守信"，孔子曰"人无信而不立"。诚实守信是一切职业道德的立足点，也是人生和事业成功的基础。作为主要培养金融财经类专业人才的金融院校，"守信"体现了"诚信为金，博学为融"树人理念。</p>
            <p>"求真"即为"求是"，也就是不断地认识事物的本质，把握事物的规律，追求真理。"求真"要求师生崇尚科学，实事求是，探索真知。</p>
            <p>"尚行"出自《皇极经世书·观物篇》，意为崇尚实践。我国历代先哲论学皆崇尚践行，荀子明确提出"不闻不若闻之，闻之不若见之，见之不若知之，知之不若行之。""尚行"要求摒绝空谈，注重理论联系实际，培养应用型人才。</p>
            <p>"明德 守信 求真 尚行"，内涵熔古铸今，主旨寓意深远。"明德"是根本，"守信"是态度，"求真"是基础，"尚行"是方法。"明德 守信"强调道德和理想，体现着学校的行为道德准则和价值取向；"求真 尚行"强调学识与实践，体现着学校的治学理念和务实求是的精神。" 明德 守信 求真 尚行"旨在鼓励师生做品德高尚、言行一致、探索真理、追求真知、服务人民、奉献社会之人。</p>
          </div>
        </div>
      </div>

      <div class="section">
        <h3>校歌《逐梦更高更远》</h3>
        <div class="song">
          <div class="song-info">
            <p>作词：王丽华</p>
            <p>作曲：曹贤邦</p>
          </div>
          <div class="song-lyrics">
            <p>金辉漫天，巍巍太行蜿蜒。</p>
            <p>银杏翩翩，锦鲤击水正酣。</p>
            <p>日月昭昭，星汉灿烂，</p>
            <p>成人达己，美美与共斑斓。</p>
            <p>日月昭昭，星汉灿烂，</p>
            <p>成人达己，美美与共斑斓。</p>
            <br/>
            <p>融通古今，涓涓细流成渊。</p>
            <p>守正创新，星辰大海浩瀚。</p>
            <p>明德守信，求真尚行，</p>
            <p>情系家国，逐梦更高更远。</p>
            <p>明德守信，求真尚行，</p>
            <p>情系家国，逐梦更高更远。</p>
            <p>明德守信，求真尚行，</p>
            <p>情系家国，逐梦更高更远。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineComponent } from 'vue'

defineComponent({
  name: 'SchoolSymbols'
})
</script>

<style scoped>
.symbols {
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

.section {
  margin: 30px 0;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

h3 {
  color: #2c3e50;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}

.emblem {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}

.emblem-desc {
  max-width: 800px;
  text-align: justify;
}

.emblem-desc p {
  margin-bottom: 15px;
  text-indent: 2em;
}

.motto {
  text-align: center;
}

.motto-text {
  font-size: 32px;
  font-weight: bold;
  color: #2c3e50;
  margin: 30px 0;
  letter-spacing: 8px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.motto-explanation {
  text-align: justify;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.motto-explanation p {
  margin-bottom: 15px;
  text-indent: 2em;
}

.song {
  text-align: center;
}

.song-info {
  margin: 20px 0;
  font-size: 18px;
}

.song-info p {
  margin: 10px 0;
}

.song-lyrics {
  margin: 20px auto;
  max-width: 600px;
  text-align: center;
  line-height: 1.8;
}

.song-lyrics p {
  margin: 5px 0;
}

@media (max-width: 768px) {
  .motto-text {
    font-size: 24px;
    letter-spacing: 4px;
  }
}
</style> 