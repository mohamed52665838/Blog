const express = require("express");
const app = express();

app.use(express.json());

app.post("/:id", (req, res) => {
  try {
    const id = req.params.id;

    console.log(typeof parseInt(id));

    const data = req.body;
    
    res.status(201).json({ name: data.name, age: data.age, id });
  } catch (error) {
    res.status(500).json(error)
  }
});

const PORT = 4000;
app.listen(PORT);
