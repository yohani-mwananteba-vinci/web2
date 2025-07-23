// C: "OK" mais le fichier aurait dû s'appeler UserCard.tsx (La gestion de la liste doit se faire dans app.tsx)
import type { UserCard } from "../types";

interface UserCardProps {
  users: UserCard[];  //C: Aurait dû être de type User
}

const UserCardList = (props: UserCardProps) => {
  // C: OK mais Gestion de la liste dans le composant App.tsx, uniquement l'affichage de l'item UserCard ici
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
