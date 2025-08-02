import { Request } from "express";

interface Pizza {
  id: number;
  title: string;
  content: string;
}

interface PizzaToUpdate {
  title?: string;
  content?: string;
}

type NewPizza = Omit<Pizza, "id">;

interface Drink {
  id: number;
  title: string;
  image: string;
  volume: number;
  price: number;
}

type NewDrink = Omit<Drink, "id">;

interface AuthenticatedUser {
  username: string;
  token: string;
}

interface User {
  id: number;
  username: string;
  password: string;
}


type PotentialUser = Omit<User, "id">;

interface AuthenticatedRequest extends Request {
  user?: User;
}

type MaybeAuthenticatedUser = AuthenticatedUser | undefined;

interface JwtPayload {
  username: string;
  exp: number; // Expiration time (in seconds since the epoch)
  iat: number; // Issued at time (in seconds since the epoch)
}

interface Ticket {
  id : number,
  title: string,
  description: string,
  creator: MaybeAuthenticatedUser,
  dateCreation: Date
}

type NewTicket = Omit<Ticket, "id">;


export type {
  Pizza,
  NewPizza,
  PizzaToUpdate,
  Drink,
  NewDrink,
  AuthenticatedUser,
  User,
  MaybeAuthenticatedUser,
  PotentialUser,
  AuthenticatedRequest,
  JwtPayload,
  Ticket,
  NewTicket
};
