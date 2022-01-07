const express = require("express");
const app = express();

app.use(express.json());

const cors = require("cors");
app.use(cors());

const { addMessage, seeMessage } = require("./user");

app.get("/message", async (req, res) => {
  const list = await seeMessage();
  res.json(list);
});

app.post("/addmessage", async (req, res) => {
  const msg = req.body;
  await addMessage(msg);
  res.json({ message: "Your Message Delevered successfully" });
});

app.listen(4000, () => console.log("this is optional, server started"));