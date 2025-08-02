import { useNavigate, useOutletContext } from "react-router-dom";
import PageTitle from "../PageTitle";
import { BookContext } from "../../../types";
import LoginForm from "../LoginForm";

const HomePage = () => {
  const { authenticatedUser, clearUser }: BookContext = useOutletContext();
  const navigate = useNavigate();

  if (authenticatedUser) {
    return (
      <div>
        <PageTitle title="Home Page" />
        <p>Welcome, {authenticatedUser.username}</p>
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            clearUser();
            navigate("/");
          }}
        >
          Logout
        </a>
      </div>
    );
  }

  return (
    <div>
      <PageTitle title="Home Page" />
      <LoginForm />
    </div>
  );
};

export default HomePage;
