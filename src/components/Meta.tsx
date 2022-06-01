import Head from 'next/head';

interface IMetaProps {
  title: string;
  keywords: string;
  description: string;
}

const Meta = ({ title, keywords, description }: IMetaProps) => {
  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, viewport-fit=cover"
      />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: 'Alexander Hirdman - Portfolio',
  keywords:
    'web development, programming, portfolio, frontend, backend, fullstack, javascript, html, css, github, tdd, agile, scrum, web, development',
  description: 'A portfolio website created by Alexander Hirdman',
};

export default Meta;
