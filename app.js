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
  const header = {
    img: "home-bg",
    title: "Before & After",
    subtitle: "Hello Mf",
  };
  res.render("index", { title: "home", blogs, header });
});

app.get("/about", (req, res) => {
  const header = {
    img: "about-bg",
    title: "About Me",
    subtitle: "This is what I do.",
  };
  res.render("about", { title: "about", header });
});

app.get("/blogs/create", (req, res) => {
  const header = {
    img: "post-sample-image",
    title: "Create Post",
    subtitle: "Tell Us Something.",
  };
  res.render("create", { title: "create blog", header });
});

app.get("/post", (req, res) => {
  res.render("post", { title: "post" });
});

app.get("/contact", (req, res) => {
  const header = {
    img: "contact-bg",
    title: "Contact Me",
    subtitle: "Have questions? I have answers.",
  };
  res.render("contact", { title: "contact", header });
});

app.use((req, res) => {
  const header = {
    img: "about-bg",
    title: "404",
    subtitle: "Are you lost?.",
  };

  res.status(404).render("not-found", { title: "404", header });
});

app.listen(3000);
