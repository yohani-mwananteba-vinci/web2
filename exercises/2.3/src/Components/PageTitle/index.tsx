// C: OK mais un fichier PageTitle.tsx était suffisant pour le composant PageTitle
interface PageTitleProps {
  title: string;
}

const PageTitle = (props: PageTitleProps) => {
  return <h1>{props.title}</h1>;
};

export default PageTitle;