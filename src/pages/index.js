import React from "react";
import { Link, graphql } from "gatsby";

import Card from "../components/card";
import Layout from "../components/layout";

const IndexPage = ({ data }) => (
  <Layout>
    <div className="bx--grid bx--grid--condensed">
      <div className="bx--row bx--offset-lg-1">
        {data.allMarkdownRemark.group.map(group => (
          <div className="bx--col-lg-3" key={group.fieldValue}>
            {group.edges.map(item => (
              <Link
                key={item.node.id}
                className="card--link"
                to={item.node.frontmatter.path}
                data-priority={item.node.frontmatter.priority}
              >
                <Card>
                  <h3 className="card--link-title">
                    {item.node.frontmatter.title}
                  </h3>
                  <p className="card--link-description">
                    {item.node.frontmatter.description}
                  </p>
                  <p className="card--link-category">
                    {item.node.frontmatter.category}
                  </p>
                </Card>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  </Layout>
);

export const goalsQuery = graphql`
  query IndexPageQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___order], order: ASC}) {
      group(field: frontmatter___category) {
        fieldValue
        totalCount
        edges {
          node {
            id
            frontmatter {
              order
              title
              path
              description
              date
              category
              priority
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
