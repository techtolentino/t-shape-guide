import React from "react";
import { Link, graphql } from "gatsby";

import Card from "../components/card";
import Layout from "../components/layout";

const GoalsPage = ({ data }) => (
  <Layout>
    <div className="bx--grid bx--grid--condensed">
      <div className="bx--row">
        <div className="bx--col">
          <div className="card--row">
            {data.allMarkdownRemark.edges.map(goal => (
              <Card key={goal.node.id}>
                <Link to={goal.node.frontmatter.path} className="card--link">
                  <h4 className="card--link-title">
                    {goal.node.frontmatter.title}
                  </h4>
                  <p className="card--link-description">
                    {goal.node.frontmatter.description}
                  </p>
                  <p className="card--link-date">
                    <small>{goal.node.frontmatter.date}</small>
                  </p>
                  <p>
                    <small className="card--link-category">
                      {goal.node.frontmatter.category}
                    </small>
                  </p>
                  <svg
                    className="card--link-icon"
                    focusable="false"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                  >
                    <path d="M9.3 3.7l3.8 3.8H1v1h12.1l-3.8 3.8.7.7 5-5-5-5z" />
                  </svg>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

function checkCategory(props) {
  const childProps = props;
  return childProps;
}

export const goalsQuery = graphql`
  query GoalsIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            description
            date
            title
            category
          }
        }
      }
    }
  }
`;

export default GoalsPage;
