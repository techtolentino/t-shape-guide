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
              <Link className="page--link" to="/">
              <svg className="page--return" focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M6.7 12.3L2.9 8.5H15v-1H2.9l3.8-3.8L6 3 1 8l5 5z"></path></svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <main>
        <div className="bx--grid">
          <div className="bx--row">
            <div className="bx--col-lg-8 bx--offset-lg-1">
              <div className="page--header">
                <h1 className="page--header-title">{goal.frontmatter.title}</h1>
                <p className="page--header-meta">{goal.frontmatter.category}</p>
              </div>
            </div>
          </div>
          <div className="bx--row">
            <div className="bx--col-lg-8 bx--offset-lg-1">
            <h2 className="page--section-header">Overview</h2>
              <div
                className="page--content"
                dangerouslySetInnerHTML={{ __html: goal.html }}
              />
            </div>
          </div>
          <div className="bx--row">
            <div className="bx--col-lg-8 bx--offset-lg-1">
              <div className="page--content">
              <p><strong>Resources</strong></p>
              <ul>
                {goal.frontmatter.resources.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              </div>
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
        resources
      }
    }
  }
`;
