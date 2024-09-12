const AboutPage = () => {
  return (
    <>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>About Me</h1>
      <h3>Makanjuola Ibrahim A. is a Software Engineer specializing in AI/ML with experience across a range of fields. 
        He is a Millennium Fellow for the class of 2024, 
        a member of various tech communities and an active volunteer that seeks to contribute his quota to advancement in technology and education.</h3>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
