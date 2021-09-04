const express = require("express");

const app = express();

//register view engine configurations
app.set("view engine", "ejs");
app.set("views", "views");

app.get("/", (req, res) => {
  const blogs = [
    {
      title: "lorem ipsum dolor sit amet, consectetur adipiscing",
      snippet: "lorem ipsum dolor sit amet lo",
      author: "lorem ipsum ",
      date: "sept 24, 2020",
    },
    {
      title: "lorem ipsum dolor sit amet, consectetur adipiscing",
      snippet: "lorem ipsum dolor sit amet lo",
      author: "lorem ipsum ",
      date: "sept 24, 2020",
    },
    {
      title: "lorem ipsum dolor sit amet, consectetur adipiscing",
      snippet: "lorem ipsum dolor sit amet lo",
      author: "lorem ipsum ",
      date: "sept 24, 2020",
    },
    {
      title: "lorem ipsum dolor sit amet, consectetur adipiscing",
      snippet: "lorem ipsum dolor sit amet lo",
      author: "lorem ipsum ",
      date: "sept 24, 2020",
    },
    {
      title: "lorem ipsum dolor sit amet, consectetur adipiscing",
      snippet: "lorem ipsum dolor sit amet lo",
      author: "lorem ipsum ",
      date: "sept 24, 2020",
    },
  ];

  res.render("index", { blogs });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/blogs/create", (req, res) => {
  res.render("create");
});

app.get("/post", (req, res) => {
  res.render("post");
});
app.get("/contact", (req, res) => {
  res.render("contact");
});

app.use((req, res) => {
  res.status(404).render("not-found");
});
app.use(express.static(__dirname));
app.listen(3000);
