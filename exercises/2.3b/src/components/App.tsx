import type { UserCard } from "../types";

import PageTitle from "./PageTitle";
import Footer from "./Footer";
import UserCardList from "./UserCardList";

const App = () => {
  const title = "Welcome to My App";

  // C: Constantes inutiles ici, car elles sont déjà définies dans le tableau users
  const name1 = "Alice";
  const age1 = 25;
  const name2 = "Bob";
  const age2 = 30;
  const name3 = "Charlie";
  const age3 = 35;

  // C: Aurait dû être un User[]
  const users: UserCard[] = [
    {
      name: name1,
      age: age1,
    },
    {
      name: name2,
      age: age2,
    },
    {
      name: name3,
      age: age3,
    },
  ];

  const footerText = "© 2023 My App";

  // C: La gestion de la liste d'utilisateurs aurait dû être faite ici, pas dans UserCardList mais OK
  return (
    <div>
      <PageTitle title={title} />
      <UserCardList users={users} />
      <Footer footerText={footerText} />
    </div>
  );
};

export default App;
