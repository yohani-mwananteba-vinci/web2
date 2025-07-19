import express from "express";

import filmRouter from "./routes/films";

const app = express();
let reqCounter = 0;     // Compteur de requêtes

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/films", filmRouter);

// Application-level middleware comptant le nbr de requête de type GET (S'éxecute à chaque requêtes)
app.use((_req, _res, next) => {
    if(_req.method === "GET")
        reqCounter++;
    console.log("GET Counter : " + reqCounter);
    next();
});

export default app;
