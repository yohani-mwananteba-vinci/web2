import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import NavBar from "../Navbar/Navbar";
import PageTitle from "../PageTitle/PageTitle";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div>
      <Header urlLogo="https://media.istockphoto.com/id/1429764305/fr/vectoriel/bande-de-film-vierge-isol%C3%A9e-sur-le-fond-blanc.jpg?s=1024x1024&w=is&k=20&c=is5Y6cun0NC8PxJd51p4YnUoLUpyb758Bdigh4Bqn48=">
        <h1>Home Page</h1>
      </Header>

      <main className="homepage-content">
        <PageTitle title="I Movies" />
        <div>
          <p>
            <i>
              Welcome to our application ! You can consult our cinema and movies
              on the others pages.
            </i>
          </p>
        </div>

        <div>
          <NavBar />
        </div>

        <br />
        <br />
        <br />
        <br />
      </main>

      <Footer urlLogo="https://media.istockphoto.com/id/1202770152/fr/photo/bobine-de-film-disolement-sur-le-fond-jaune-lumineux-dans-les-couleurs-pastel.jpg?s=1024x1024&w=is&k=20&c=2yKBrC8oyimPdW-5IxFWN_zxFPVK3KWYL9OE2gVmVX4=">
        <p>© myMovies</p>
      </Footer>
    </div>
  );
};

export default HomePage;
