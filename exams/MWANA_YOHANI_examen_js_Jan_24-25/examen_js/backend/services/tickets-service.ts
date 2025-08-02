import path from "node:path";
import { Ticket, NewTicket } from "../types";
import { parse, serialize } from "../utils/json";
import { AuthenticatedUser } from "../types";
const jsonDbPath = path.join(__dirname, "/../data/tickets.json");


const fetchTickets = async (): Promise<Ticket[]> => {
  try {
    const response = await fetch("/api/support");
    if (!response.ok) {
      throw new Error("Failed to fetch tickets : " + response.statusText);
    }
    const data = await response.json();
    if (!data || !Array.isArray(data)) {
      throw new Error("Invalid data");
    }
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const addTicket = async (
  ticket: NewTicket,
  authenticatedUser: AuthenticatedUser
): Promise<Ticket> => {
  try {
    const response = await fetch("/api/support", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: authenticatedUser.token,
      },
      body: JSON.stringify(ticket),
    });
    if (!response.ok) {
      throw new Error("Failed to add ticket : " + response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }

const ticketsTable: Ticket[] = [];

function readOneTicket(id: number): Ticket | undefined {
  const tickets = parse(jsonDbPath, ticketsTable);
  const ticket = tickets.find((ticket) => ticket.id === id);
  if (!ticket) {
    return undefined;
  }
  return ticket;
}

function createOneTicket(newTicket: NewTicket): Ticket {
  const tickets = parse(jsonDbPath, ticketsTable);

  const nextId =
    tickets.reduce((maxId, ticket) => (ticket.id > maxId ? ticket.id : maxId), 0) + 1;
  
  const createdTicket = {id: nextId,...newTicket,};

  tickets.push(createdTicket);
  serialize(jsonDbPath, tickets);

  return createdTicket;
}


export {
  fetchTickets,
  addTicket,
  readOneTicket,
  createOneTicket,
};

