import { graphql } from 'gatsby';
import React from 'react';

import Layout from '../components/site/Layout';
import SEO from '../components/site/SEO';

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Substrate Technology" />
      <div className="lg:w-1/2">
        <h1 className="text-7xl font-extrabold">Substrate Technology</h1>
        <p>
          What if developers could build on a blockchain framework specifically optimized for their requirements that
          seamlessly evolves with their needs and without forks? Welcome to Substrate, the only flexible, open,
          interoperable, and future proof blockchain framework.
        </p>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query {
    locales: allLocale {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
