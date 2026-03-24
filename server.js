const express = require("express");
const app = express();

// Dummy data (baad me database bana sakte ho)
const sites = {
  web1: {
    title: "Web1 Site",
    desc: "Welcome to Web1 🔥"
  },
  web2: {
    title: "Web2 Site",
    desc: "Welcome to Web2 🚀"
  }
};

// Route handle
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

// Home page
app.get("/", (req, res) => {
  res.send(`
    <h1>Main Page</h1>
    <p>Try /web1 or /web2</p>
  `);
});

app.listen(3000);
