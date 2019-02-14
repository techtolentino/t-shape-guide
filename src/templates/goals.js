import React from "react";
import Link from "gatsby-link";
import Layout from "../components/layout";

export default function Template({ data }) {
  const goal = data.markdownRemark;

  return (
    <Layout>
      <div className="bx--grid">
        <div className="bx--row">
          <div className="bx--col bx--offset-lg-1">
            <div className="nav--link-return">
              <Link to="/">Go Back</Link>
            </div>
          </div>
        </div>
      </div>
      <main>
        <div className="bx--grid">
          <div className="bx--row">
            <div className="bx--col-lg-8 bx--offset-lg-1">
              <div className="page--header">
                <h1 className="card--link-title">{goal.frontmatter.title}</h1>
                <p>{goal.frontmatter.category}</p>
              </div>
            </div>
          </div>
          <div className="bx--row">
            <div className="bx--col-lg-8 bx--offset-lg-1">
              <div
                className="page--content"
                dangerouslySetInnerHTML={{ __html: goal.html }}
              />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export const postQuery = graphql`
  query GoalByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        date
        category
      }
    }
  }
`;
