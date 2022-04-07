const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.all("/good", (req, res, next) => {
  console.log("good place!");
  const answer= JSON.parse(JSON.stringify({
    massage: "very",
    massage2: "strange"
  }));
  return res.status(201).json(answer);
});

app.all("/bad", (req, res, next) => {
  console.log("A call to the bad place");
  res.status(404).send("No");
});


const port = process.env.PORT || 1234;

app.listen(port, () => {
  console.log(`Password server's up in port: ${port}`)
});
