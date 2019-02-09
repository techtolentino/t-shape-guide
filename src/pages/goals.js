import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";

const GoalsPage = ({ data }) => (
  <Layout>
    <h1>Goals</h1>
    {data.allMarkdownRemark.edges.map(goal => (
      <div key={goal.node.id}>
        <h3>{goal.node.frontmatter.title}</h3>
        <p>{goal.node.frontmatter.date}</p>
        <small>{goal.node.frontmatter.category}</small>
        <Link to={goal.node.frontmatter.path}>View</Link>
      </div>
    ))}
  </Layout>
);

export const goalsQuery = graphql`
  query GoalsIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            category
          }
        }
      }
    }
  }
`;

export default GoalsPage;
