import type { UserCard } from "../type";
import "./App.css";
import UserCardList from "./UserCardList";

function App() {
  const userList: UserCard[] = [
    { name: "Yoni", age: 23, isOnline: true },
    { name: "Christophe", age: 47, isOnline: false },
    { name: "Anne-Françoise", age: 50, isOnline: true },
  ];

  return (
    <>
      <h1>Liste de cartes des utilisateurs</h1>
      <UserCardList userCards={userList} />
    </>
  );
}

export default App;
