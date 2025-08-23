import type { User } from "../types";
import "./App.css";
import UserCardList from "./UserCardList";

const defaultsUsers: User[] = [
  { name: "Alice", age: 25, isOnline: true },
  { name: "Bob", age: 30, isOnline: false },
  { name: "Charlie", age: 22, isOnline: true },
];

// C: UserCardList pas utile ici, on peut directement faire la map dans App
function App() {
  return (
    <div>
      <UserCardList users={defaultsUsers} />
    </div>
  );
}

export default App;
