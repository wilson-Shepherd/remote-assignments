const express = require("express");
const app = express();
const port = 3000;
app.use(express.static(__dirname)); // for sum.html usage

// def root路由 ('/')
app.get("/", (req, res) => {
  // 向 Client 發送 respond
  res.send("<h1>My name is Wilson Li ^_^</h1>");
});

// def data路由 ('/')
app.get("/data", (req, res) => {
  // 獲取使用者網址輸出的數字
  const number = req.query.number;

  if (!number) {
    return res.send("Lack of Parameter");
  }

  if (isNaN(number) || !Number.isInteger(parseFloat(number))) {
    return res.send("Wrong Parameter");
  }

  if (parseInt(number) < 0) {
    return res.send("It has to be positive integer");
  }

  // 計算 1 到 number 的總和
  const sum = (parseInt(number) * (parseInt(number) + 1)) / 2;

  // 向客戶端發送計算結果
  res.send(`${sum}`);

  /* 
  Optional: 假設輸入的 N 是超大的數字，如果同時有多個用戶一起同時訪問，
  可能會造成伺服器效能過高，從而影響伺服器的穩定性。
  */
});

// 啟動伺服器並監聽指定的端口號
app.listen(port, () => {
  // 當伺服器啟動後，在控制台中記錄一條消息
  console.log(`Server is running, visit: http://localhost:${port}`);
});
