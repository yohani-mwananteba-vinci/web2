import type { User } from "../types";
import UserCard from "./UserCard";

interface UserCardListProps {
  users: User[];
}

// C: Il vaut mieux utiliser l'index lors d'un map comme key car les noms peuvent se répéter
// {props.users.map((u, index) => (
//   <div key={index} ... />
// ))}
const UserCardList = (props: UserCardListProps) => {
  return (
    <div>
      {props.users.map((u) => (
        <div key={u.name}>
          <UserCard user={u} />
        </div>
      ))}
    </div>
  );
};

export default UserCardList;
