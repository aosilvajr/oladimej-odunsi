import React from 'react';

import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

export default function aboutBlurb() {
  const data = useStaticQuery(graphql`
    query {
      flower: file(relativePath: { eq: "flower-mouth.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fist: file(relativePath: { eq: "fist.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div className="about-blurb">
      <div className="container">
        <div className="row">
          <div className="inner-blurb">
            <div className="content">
              <h3>Habilidade de criar</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Rerum quos eius doloribus,
                corporis dignissimos molestiae facilis praesentium at.
                Minus aperiam repellendus harum illum
                ullam libero rem impedit dolorum sint adipisci sapiente
                saepe suscipit aut soluta voluptas
                perferendis ad necessitatibus ut tempore quae beatae
                accusamus officiis, eveniet nam? Fugiat,
                eum asperiores.
              </p>

              <div className="btn-row">
                <Link to="/work">View Series</Link>
              </div>
            </div>


            <div className="images">
              <div className="top-right">
                <Img fluid={data.fist.childImageSharp.fluid} />
              </div>

              <div className="bottom-left">
                <Img fluid={data.flower.childImageSharp.fluid} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="black-box" />
      <div className="black-box overlay" />
    </div>
  );
}
