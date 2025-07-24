import "./UserCardList.css";
import type { UserCard } from "../type";

interface UserCardListProps {
  userCards: UserCard[];
  // childrens: React.ReactNode;
}

const UserCardList = (props: UserCardListProps) => {
  return (
    <>
      {props.userCards.map((u) => (
        <div>
          <p>
            <strong>{u.name}</strong>
            <br />
            {u.age}
          </p>
          <div className={u.isOnline ? "online" : "offline"}>
            {u.isOnline ? "En ligne" : "Hors ligne"}
          </div>
        </div>
      ))}
    </>
  );
};

export default UserCardList;
