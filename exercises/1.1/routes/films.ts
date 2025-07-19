import { Router } from "express";
import { Film } from "../types";

const films : Film[] = [
  {
    id: 1,
    title: "Inception",
    director: "Christopher Nolan",
    duration: 148,
    budget: 160,
    description: "A mind-bending thriller about dream invasion.",
    imageUrl: "https://image.tmdb.org/t/p/inception.jpg"
  },
  {
    id: 2,
    title: "Parasite",
    director: "Bong Joon-ho",
    duration: 132,
    budget: 11.4,
    imageUrl: "https://image.tmdb.org/t/p/parasite.jpg"
  },
  {
    id: 3,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    duration: 175
  }
];

const router = Router();

router.get("/", (_req, res) =>{
    return res.json(films);
});

export default router;