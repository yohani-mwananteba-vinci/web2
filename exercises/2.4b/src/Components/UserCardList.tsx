// C: Ce fichier aurait dû s'appeller UserCard.tsx (Car le composant est la carte d'un utilisateur, pas la liste de cartes d'utilisateurs (géré dans App.tsx))
import "./UserCardList.css";
import type { UserCard } from "../type";

interface UserCardListProps {
  userCards: UserCard[];            // C: La gestion de la liste des cartes d'utilisateurs devrait être dans App.tsx (ici, juste une prop "User" suffisait)
  // childrens: React.ReactNode;    //C: Inutile ici
}

const UserCardList = (props: UserCardListProps) => {
  // C: KO
  //  - Présentation OK mais un peu trop bancale
  //  - !!! ATTENTION !!! Oubli de rajouter une clé unique à chaque élément de la liste => KO
  return (
    <>
      {props.userCards.map((u) => (     //C: Il fallait définir une clé ! (index du tableau ou u.name)
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
