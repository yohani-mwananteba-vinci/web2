import { Outlet } from "react-router-dom";


// C: 
// - Il fallait le Footer et le Header dans App.tsx pour qu'ils soient présents sur toutes les pages
// - La NavBar doit être séparer du Header pour pouvoir l'utiliser dans d'autres pages (mais il peut être un de ces childrens)
const App = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

// C: Version corrigée de App.tsx:
// const App = () => {
//   return (
//     <div>
//       <Header urlLogo="https://media.istockphoto.com/id/1429764305/fr/vectoriel/bande-de-film-vierge-isol%C3%A9e-sur-le-fond-blanc.jpg?s=1024x1024&w=is&k=20&c=is5Y6cun0NC8PxJd51p4YnUoLUpyb758Bdigh4Bqn48=">
//         <h1>Tous sur les films</h1>
//         <NavBar />
//       </Header>

//       <main className="page-content">
//         <Outlet />
//       </main>

//       <Footer urlLogo="https://media.istockphoto.com/id/1202770152/fr/photo/bobine-de-film-disolement-sur-le-fond-jaune-lumineux-dans-les-couleurs-pastel.jpg?s=1024x1024&w=is&k=20&c=2yKBrC8oyimPdW-5IxFWN_zxFPVK3KWYL9OE2gVmVX4=">
//         <p>© myMovies</p>
//       </Footer>
//     </div>
//   );
// };

export default App;
