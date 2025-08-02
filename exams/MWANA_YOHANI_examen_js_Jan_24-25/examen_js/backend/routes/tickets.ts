import { Router } from "express";
import { NewTicket } from "../types";
import {
    fetchTickets,
    addTicket,
  readOneTicket,
  createOneTicket,
} from "../services/tickets-service";
import { authorize, isAdmin } from "../utils/auths";

const router = Router();

// router.get("/", (req, res) => {
//   const budgetMax = Number(req.query["budget-max"]);
//   const tickets = readAllTickets(budgetMax);
//   return res.json(tickets);
// });

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const ticket = readOneTicket(id);
  if (!ticket) {
    return res.sendStatus(404);
  }
  return res.json(ticket);
});

router.post("/", authorize, isAdmin, (req, res) => {
  const body: unknown = req.body;
  if (
    !body ||
    typeof body !== "object" ||
    !("title" in body) ||
    !("description" in body) ||
    typeof body.title !== "string" ||
    typeof body.description !== "string" ||
    !body.title.trim() ||
    !body.description.trim()
  ) {
    return res.sendStatus(400);
  }

  const { title, description, creator, dateCreation } = body as NewTicket;

  const newTicket = createOneTicket({ title, description, creator, dateCreation });
  return res.json(newTicket);
});

export default router;
