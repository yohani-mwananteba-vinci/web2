interface FooterProps {
  footerText: string;
}

const PageTitle = (props: FooterProps) => {
  return <footer>{props.footerText}</footer>;
};

export default PageTitle;
