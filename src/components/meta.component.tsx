import Helmet from 'react-helmet';

const Meta = (title: string) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta
        name="description"
        content="Johnny WebDev - FullStack web developer with experience in building responsive and user-friendly websites. Specializing in React, Next and NodeJS"
      />
    </Helmet>
  );
};

export default Meta;
