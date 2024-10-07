const express = require("express");
const app = express();
const database = require('./config/database')
app.use(express.json());


database();

const userRouter = require("./routes/user.route");
app.use("/user", userRouter);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on localhost:${PORT}`);
});
