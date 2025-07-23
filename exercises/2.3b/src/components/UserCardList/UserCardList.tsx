import type { UserCard } from "../../types";

interface UserCardProps {
  users: UserCard[];
}

const UserCardList = (props: UserCardProps) => {
  return (
    <>
      {props.users.map((user) => (
        <div key={user.name}>
          <h2>{user.name}</h2>
          <p>Age: {user.age}</p>
        </div>
      ))}
    </>
  );
};

export default UserCardList;
