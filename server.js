const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

// Memory storage (temporary)
let sites = {};

// Form page
app.get("/", (req, res) => {
  res.send(`
    <h1>Create Your Site</h1>
    <form method="POST" action="/create">
      <input name="name" placeholder="Enter site name" required /><br><br>
      <input name="title" placeholder="Title" required /><br><br>
      <textarea name="desc" placeholder="Description"></textarea><br><br>
      <button type="submit">Create</button>
    </form>
  `);
});

// Create site
app.post("/create", (req, res) => {
  const { name, title, desc } = req.body;

  sites[name] = { title, desc };

  res.send(`
    <h2>Site Created ✅</h2>
    <a href="/${name}">Go to your site</a>
  `);
});

// Show site
app.get("/:name", (req, res) => {
  const name = req.params.name;

  if (sites[name]) {
    res.send(`
      <h1>${sites[name].title}</h1>
      <p>${sites[name].desc}</p>
    `);
  } else {
    res.send("Site not found ❌");
  }
});

app.listen(3000);
