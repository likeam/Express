import express from "express";

const allStudents = (req, res) => {
  res.send("All Students");
};

const newStudent = (req, res) => {
  res.send("Create new User");
};

const updateStudent = (req, res) => {
  res.send("Update Student ID");
};

const deleteStudent = (req, res) => {
  res.send("Student Deleted");
};

export { allStudents, newStudent, updateStudent, deleteStudent };
