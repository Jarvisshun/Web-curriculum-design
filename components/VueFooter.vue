<template>
    <div>
        <div>
    <footer class="footer">
        <div class="footer-container">
            <div class="footer-links">
                <h4>链接</h4>
                <ul>
                    <li><a href="#about">关于我们</a></li>
                </ul>
            </div>
            <div class="footer-social">
                <h4>关注我们</h4>
                <ul>
                    <li><a>23信安二班</a></li>
                </ul>
                <p>{{ currentTime }}</p>
            </div>
        </div>
    </footer>
  </div>
    </div>
    </template>
    
    <script>
      export default {
  data() {
    return {
      currentTime: ''
    };
  },
  methods: {
    updateTime() {
      const now = new Date();
      this.currentTime = now.toLocaleString(); // 获取本地时间
    }
  },

  mounted() {
    this.updateTime();
    setInterval(this.updateTime, 1000); // 每秒更新时间
  },

  beforeUnmount() {
    clearInterval(this.updateInterval); // 清除定时器以避免内存泄漏
  }
};
    </script>
    
    <style>
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