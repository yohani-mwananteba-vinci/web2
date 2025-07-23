interface FooterProps {
  footerText: string;   // C: aurait pû s'appeler text
}

const PageTitle = (props: FooterProps) => {
  return <footer>{props.footerText}</footer>;
};

export default PageTitle;
