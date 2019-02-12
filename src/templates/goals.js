import React from "react";
import Link from "gatsby-link";

export default function Template({ data }) {
  const goal = data.markdownRemark;

  return (
    <div>
      <div className="bx--grid">
        <div className="bx--row bx--offset-lg-1">
          <div className="bx--col">
            <div className="nav--link-return">
              <Link to="/">Go Back</Link>
            </div>
          </div>
        </div>
      </div>
      <main>
        <div className="bx--grid">
          <div className="bx--row bx--offset-lg-1">
            <div className="bx--col">
              <div className="page--meta">
                <h1>{goal.frontmatter.title}</h1>
                <p>{goal.frontmatter.category}</p>
              </div>
            </div>
          </div>
          <div className="bx--row">
            <div className="bx--col">
              <div
                className="page--content"
                dangerouslySetInnerHTML={{ __html: goal.html }}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
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
