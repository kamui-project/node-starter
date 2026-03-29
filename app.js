const path = require("path");
const express = require("express");
const knex = require("knex");
const knexConfig = require("./knexfile");

const db = knex(knexConfig);
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "static")));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/greetings", async (req, res) => {
  const greetings = await db("greetings").orderBy("created_at", "desc");
  res.render("greetings", { greetings });
});

app.post("/greetings", async (req, res) => {
  const message = (req.body.message || "").trim();
  if (message) {
    await db("greetings").insert({ message });
  }
  res.redirect("/greetings");
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

const port = parseInt(process.env.PORT || "8000", 10);
app.listen(port, "0.0.0.0", () => {
  console.log(`Listening on http://localhost:${port}`);
});
