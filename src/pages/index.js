import React from "react";
import { Link, graphql } from "gatsby";

import Card from "../components/card";
import CardHeader from "../components/cardHeader";
import Layout from "../components/layout";

const IndexPage = ({ data }) => (
  <Layout>
    <div className="bx--grid bx--grid--condensed">
      <div className="bx--row bx--offset-lg-1">
        {data.allMarkdownRemark.group.map(group => (
          <div className="bx--col-md-2 bx--col-lg-3" key={group.fieldValue}>
            <CardHeader>
              <h3>{group.fieldValue}</h3>
            </CardHeader>

            {group.edges.map(item => (
              <Link
                key={item.node.id}
                className="card--link"
                to={item.node.frontmatter.path}
              >
                <Card>
                  <h3>{item.node.frontmatter.title}</h3>
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
    allMarkdownRemark {
      group(field: frontmatter___category) {
        fieldValue
        totalCount
        edges {
          node {
            id
            frontmatter {
              title
              path
              description
              date
              category
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
