const express = require("express");
const app = express();
const port = 3000;

// 定義root路由 ('/')
// 當有人訪問 http://localhost:3000/ 時，這個路由會被觸發
app.get("/", (req, res) => {
  // 向客戶端發送包含以下 HTML 內容的回應
  res.send("<h1>My name is Wilson Li ^_^</h1>");
});

// 定義data路由 ('/')
app.get("/", (req, res) => {
  // 獲取使用者輸出的數字
  const number = req.query.number;

  if (!number) {
    return res.send("Lack of Parameter");
  }

  if (isNaN(number) || !Number.isInteger(parseFloat(number))) {
    return res.send("Wrong Parameter");
  }

  // 計算 1 到 number 的總和
  const sum = (parseInt(number) * (parseInt(number) + 1)) / 2;

  // 向客戶端發送計算結果
  res.send(`The result of 1+2+....+${number} is ${sum}`);
});
// 啟動伺服器並監聽指定的端口號
app.listen(port, () => {
  // 當伺服器啟動後，在控制台中記錄一條消息
  console.log(`Server is running, visit: http://localhost:${port}`);
});
