import express from "express";

const router = express.Router();

router.get("/all", (req, res) => {
  res.send("All Teacher");
});

router.post("/create", (req, res) => {
  res.send("Sign in New Teacher");
});

router.put("/update", (req, res) => {
  res.send("Upate Teacher ID");
});

router.delete("/delete", (req, res) => {
  res.send("Remove Teacher From The DB");
});

export default router;
