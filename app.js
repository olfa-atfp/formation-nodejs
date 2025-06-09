const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/", (req, res) => {
  console.log(req.body);

  res.send(`Je suis ${req.body.surname} et j'ai ${req.body.myage} ans`);
});

// app.get("/", (req, res) => {
//   res.send("<h1>Premier test !!!!!????</h1>");
// });

app.get("/", (req, res) => {
  console.log(__dirname);
  res.sendFile(__dirname + "/index.html");
});

app.listen(3000, () => {
  console.log("Server started on port 3000...");
});