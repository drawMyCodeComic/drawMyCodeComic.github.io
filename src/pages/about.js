import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/Layout';
import { AboutDMC } from '../components/AboutDMC/AboutDMC';
import { LandingSection } from '../components/LandingSection/LandingSection';
import { Container } from 'reactstrap';
import { useMediaQuery } from 'react-responsive';
import SEO from "../components/Seo/seo";

const AboutPage = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 800px)' });
  return (
    <Layout>
      <SEO title="About" />
      <LandingSection height={800} top={100} bottom={40}>
        <Container fluid="sm">
          <AboutDMC isMobile={isMobile} />
        </Container>
      </LandingSection>
    </Layout>
  )
}

export default AboutPage;
