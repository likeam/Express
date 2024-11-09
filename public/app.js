import exprsss from "express";
import path from "path";

const app = exprsss();

app.use(exprsss.static("./public"));

app.get("./", (req, res) => {
  res.sendFile(path.join(process.cwd(), "./public/index.html"));
});

app.listen(8000, console.log("Server UP!"));
