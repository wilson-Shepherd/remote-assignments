const express = require('express');
const app = express();
const port = 3000;

// 定義根路由 ('/')
// 當有人訪問 http://localhost:3000/ 時，這個路由會被觸發
app.get('/', (req, res) => {
    // 向客戶端發送包含以下 HTML 內容的回應
    res.send('<h1>My name is Wilson Li ^_^</h1>');
  });
  
  // 啟動伺服器並監聽指定的端口號
  app.listen(port, () => {
      // 當伺服器啟動後，在控制台中記錄一條消息
      console.log(`Server is running, visit: http://localhost:${port}`);
});