import express from "express";
import student from "./routes/student.js";

const app = express();

// 1- Create router folder to  put our routes in separate file.
// 2- Create instanse of express.Router()
// 3- Insted of app.mthod we use router.Method()
// 4- Expoert router
// 5- Import router
// 6- use the (app.use) buil-in middleware & porvidie your

// Route params

app.use("/student", student);

app.listen(8000, () => console.log("Server Up!"));
