import type { Movie } from "../../types";
import Cinema from "../Cinema";
import PageTitle from "../PageTitle";

const CinemaPage = () => {
  const pageTitle = "Informations sur les films dans les cinémas";

  const cinema1Name = "UGC DeBrouckère";

  // C: Inutile de rajouter un type CinemaMovie, on rajoute juste id et duration dans le tb des cinemas
  const moviesCinema1: Movie[] = [
    {
      id: 1,
      title: "HAIKYU-THE DUMPSTER BATTLE",
      director: "Susumu Mitsunaka",
      duration: 85,
      description:
        "A high-energy sports anime movie focusing on the intense volleyball rivalry between Karasuno High and their fierce competitors.",
    },
    {
      id: 2,
      title: "GOODBYE JULIA",
      director: "Mohamed Kordofani",
      duration: 120,
      description:
        "A poignant drama that explores themes of love, loss, and the complex dynamics of human relationships in a deeply emotional narrative.",
    },
    {
      id: 3,
      title: "INCEPTION",
      director: "Christopher Nolan",
      duration: 148,
      description:
        "A mind-bending sci-fi thriller where a skilled thief, who enters people's dreams to steal secrets, is given a chance to have his criminal record erased if he can implant an idea into a target's subconscious.",
    },
    {
      id: 4,
      title: "PARASITE",
      director: "Bong Joon-ho",
      duration: 132,
      description:
        "An Oscar-winning dark comedy thriller that examines class disparities through the story of two families — one wealthy, the other destitute — and their increasingly complicated relationship.",
    },
  ];

  const cinema2Name = "UGC Toison d'Or";

  // C: Inutile de rajouter un type CinemaMovie, on rajoute juste id et duration dans le tb des cinemas
  const moviesCinema2: Movie[] = [
    {
      id: 5,
      title: "THE WATCHERS",
      director: "Ishana Night Shyamalan",
      duration: 102,
      description:
        "A suspenseful thriller that follows a group of people who are under constant surveillance, leading them to uncover dark secrets about their observers and themselves.",
    },
    {
      id: 6,
      title: "BAD BOYS: RIDE OR DIE",
      director: "Adil El Arbi, Bilall Fallah",
      duration: 115,
      description:
        "The latest installment in the action-packed Bad Boys franchise, featuring detectives Mike Lowrey and Marcus Burnett as they take on their most dangerous case yet.",
    },
    {
      id: 7,
      title: "TENET",
      director: "Christopher Nolan",
      duration: 150,
      description:
        "A complex and visually stunning sci-fi action film where a protagonist embarks on a time-bending mission to prevent World War III, navigating through a world of temporal inversion.",
    },
    {
      id: 8,
      title: "THE IRISHMAN",
      director: "Martin Scorsese",
      duration: 209,
      description:
        "An epic crime drama that chronicles the life of Frank Sheeran, a mob hitman, as he reflects on his involvement with the Bufalino crime family and the mysterious disMovieListPageearance of his friend, Jimmy Hoffa.",
    },
  ];

  return (
    <div>
      <PageTitle title={pageTitle} />

      <Cinema name={cinema1Name} movies={moviesCinema1} />

      <Cinema name={cinema2Name} movies={moviesCinema2} />
    </div>
  );
};

export default CinemaPage;
