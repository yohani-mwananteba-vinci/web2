import { Movie } from "../types";

import Footer from "./Footer";
import Header from "./Header";
import Cinema from "./Cinema";
import PageTitle from "./PageTitle";

import logo from "../../assets/images/istockphoto-1642381175-612x612.jpg";  // C: On pouvait directement mettre le chemin dans le composant

const App = () => {
  const pageTitle = "Informations sur les films dans les cinémas";

  const cinema1Name = "UGC DeBrouckère";

  const moviesCinema1: Movie[] = [
    {
      title: "HAIKYU-THE DUMPSTER BATTLE",
      director: "Susumu Mitsunaka",
    },
    {
      title: "GOODBYE JULIA",
      director: "Mohamed Kordofani",
    },
    {
      title: "INCEPTION",
      director: "Christopher Nolan",
    },
    {
      title: "PARASITE",
      director: "Bong Joon-ho",
    },
  ];

  const cinema2Name = "UGC Toison d'Or";

  const moviesCinema2: Movie[] = [
    {
      title: "THE WATCHERS",
      director: "Ishana Night Shyamalan",
    },
    {
      title: "BAD BOYS: RIDE OR DIE",
      director: "Adil El Arbi, Bilall Fallah",
    },
    {
      title: "TENET",
      director: "Christopher Nolan",
    },
    {
      title: "THE IRISHMAN",
      director: "Martin Scorsese",
    },
  ];

  // C: Pas besoin de mettre children dans le Header et Footer, on peut directement mettre l'élément HTML à l'intérieur des balises
  //  Exemple: <Header logo={logo}><p><h1>Tous les films</h1></Header>
  return (
    <div>
      <Header logo={logo} children={"Voila le header"}/>
      
      <PageTitle title={pageTitle} />

      <Cinema name={cinema1Name} movies={moviesCinema1} />

      <Cinema name={cinema2Name} movies={moviesCinema2} />

      <Footer logo={logo} children="Voila le footer" />
    </div>
  );
};

export default App;
