const express = require("express");

const app = express();

//register view engine configurations
app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.static("public"));

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

  res.render("index", { title: "home", blogs });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "about" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "create blog" });
});

app.get("/post", (req, res) => {
  res.render("post", { title: "post" });
});
app.get("/contact", (req, res) => {
  res.render("contact", { title: "contact" });
});

app.use((req, res) => {
  res.status(404).render("not-found");
});

app.listen(3000);
