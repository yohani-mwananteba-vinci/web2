import "./App.css";

import type { UserCard } from "../../types";
import PageTitle from "../PageTitle/PageTitle";
import Footer from "../Footer/Footer";
import UserCardList from "../UserCardList/UserCardList";

const App = () => {
  const title = "Welcome to My App";
  const name1 = "Alice";
  const age1 = 25;
  const name2 = "Bob";
  const age2 = 30;
  const name3 = "Charlie";
  const age3 = 35;

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

  return (
    <div>
      <PageTitle title={title} />
      <UserCardList users={users} />
      <Footer footerText={footerText} />
    </div>
  );
};

export default App;
