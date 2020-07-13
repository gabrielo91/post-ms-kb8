const express = require("express");
const app = express();
const PORT = 4000 || process.env.PORT;

app.get("", (req, res) => {
  const time = new Date();
  res.send({ hello: `from my service: ${time.toString()}` });
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
