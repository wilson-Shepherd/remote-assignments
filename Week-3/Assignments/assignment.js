const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(express.static(__dirname)); // for sum.html usage
app.use(cookieParser()); // for cookie usage
app.use(bodyParser.urlencoded({ extended: true }));

// def root路由 ('/')
app.get("/", (req, res) => {
  // 向 Client 發送 respond
  res.send("<h1>My name is Wilson Li ^_^</h1>");
});

// def data路由 ('/data')
app.get("/data", (req, res) => {
  // 獲取使用者網址輸出的數字
  const number = req.query.number;

  if (!number) {
    return res.send("Lack of Parameter");
  }

  if (isNaN(number) || !Number.isInteger(parseFloat(number))) {
    return res.send("Wrong Parameter");
  }

  // 處理負數的情況
  if (parseInt(number) < 0) {
    return res.send("It has to be positive integer");
  }

  // 用 pascal number formula
  const sum = (parseInt(number) * (parseInt(number) + 1)) / 2;
  res.send(`${sum}`);

  /* 
  Optional: 假設輸入的 N 是超級大的數字，同時有多個用戶一起同時訪問這個超大的 N，
  有機會造成伺服器效能過高，從而影響伺服器的穩定性，用戶可能會出現斷開連接的情況。
  */
});

// def myName路由 ('/myName')
app.get("/myName", (req, res) => {
  const username = req.cookies.username;
  if (username) {
    res.send(`<h1>${username}!</h1>`);
  } else {
    res.send(`
      <h1>Please enter your name:</h1>
      <form action="/trackName" method="POST">
        <input type="text" name="username" />
        <button type="submit">Submit</button>
      </form>
    `);
  }
});

// def trackName路由 (‘/trackName’)
app.post("/trackName", (req, res) => {
  const { username } = req.body;
  if (username) {
    res.cookie("username", username);
  }
  res.redirect("/myName");
});

app.listen(port, () => {
  console.log(`Server is running, visit: http://localhost:${port}`);
});
