// C: OK mais on aurait dû avec le type User (car c'est une personne qui possède le nom et l'âge)
interface UserCard {
  name: string;
  age: number;
}

export type { UserCard };
