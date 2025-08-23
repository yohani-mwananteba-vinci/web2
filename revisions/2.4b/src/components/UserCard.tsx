import type { User } from "../types";
import "./UserCard.css";

interface UserCardProps {
  user: User;
}

const UserCard = (props: UserCardProps) => {
  return (
    <div>
      <h2>{props.user.name}</h2>
      <p>{props.user.age}</p>
      <p className={props.user.isOnline ? "online" : "offline"}>
        {props.user.isOnline ? "En ligne" : "Hors ligne"}
      </p>
    </div>
  );
};

export default UserCard;
