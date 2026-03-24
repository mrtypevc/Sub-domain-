const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

// memory storage
let sites = {};

// Home page
app.get("/", (req, res) => {
  res.send(`
    <h1>Auto Website Generator 🚀</h1>
    <p>बस URL में कुछ भी लिखो</p>
    <p>Example: /varun</p>
  `);
});

// Auto create + show
app.get("/:name", (req, res) => {
  const name = req.params.name;

  // अगर site exist नहीं है → खुद बना दे
  if (!sites[name]) {
    sites[name] = {
      title: name.toUpperCase() + "'s Site",
      desc: "This site was created automatically 🔥"
    };
  }

  res.send(`
    <h1>${sites[name].title}</h1>
    <p>${sites[name].desc}</p>
  `);
});

app.listen(3000);
