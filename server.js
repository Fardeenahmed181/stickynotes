const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));

app.use("/api/sticky", require("./src/api/sticky"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "sticky.html"));
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
