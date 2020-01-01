const express = require("express");
let app = express();
app.use(express.json());
let cors = require("cors")();

app.use(cors);
require("./plugins/db")(app);
require("./routes/admin")(app);

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
