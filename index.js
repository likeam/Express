import express from "express";

const app = express();

app.get("/student", (req, res) => {
  res.send("All Students");
});

app.post("/student", (req, res) => {
  res.send("Add New Students");
});

app.put("/student", (req, res) => {
  res.send("Update Student");
});

app.delete("/student", (req, res) => {
  res.send("Delete  Students");
});

app.listen(8000, () => console.log("Server Up!"));
