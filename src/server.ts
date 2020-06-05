import express from "express";

const app = express();

app.get("/users", () => {
  console.log("Listagem");
});
console.log("Server UP");

app.listen(3333);
