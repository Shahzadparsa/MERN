const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log("Server Start"));
app.use(express.static("build"));

const items =
[
  {
    name: "LAptop",
    price: 500 ,

  },
  {
    name: "Desktop",
    price: 200 ,
  },
];

app.get("/api/items" , (req, res )=> {
  res.send(items);
})