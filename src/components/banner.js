import React, { useRef, useEffect } from 'react';

import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { TweenMax, TimelineLite, Power3 } from 'gsap';

export default function Banner() {
  let banner = useRef(null);
  let images = useRef(null);
  const tl = new TimelineLite();

  useEffect(() => {
    const leftImage = images.firstElementChild;
    const rightImage = images.lastElementChild;

    const main = images.querySelector('.main-image');

    TweenMax.to(banner, 0, { css: { visibility: 'visible' } });
    tl.from(main, 1.2, { y: 1280, ease: Power3.easeOut })
      .from(main.firstElementChild, 2, { scale: 1.6, ease: Power3.easeOut }, 0.2)
      .from(rightImage, 1.2, { y: 1280, ease: Power3.easeOut }, 0.2)
      .from(rightImage.lastElementChild, 2, { scale: 1.6, ease: Power3.easeOut }, 0.2)
      .from(leftImage, 1.2, { y: 1280, ease: Power3.easeOut }, 0.2)
      .from(leftImage.lastElementChild, 2, { scale: 1.6, ease: Power3.easeOut }, 0.2);
  }, []);

  const data = useStaticQuery(graphql`
    query {
      poppinShades: file(relativePath: { eq: "poppin-shades.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      diamonds: file(relativePath: { eq: "diamonds.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      orange: file(relativePath: { eq: "sexy-orange.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div ref={(el) => banner = el} className="banner">
      <div className="container">
        <div ref={(el) => images = el} className="row">
          <div className="side-image left">
            <Img fluid={data.diamonds.childImageSharp.fluid} />
          </div>

          <div className="main-text">Oladimeji Odunsi</div>

          <div className="main-image">
            <Img fluid={data.poppinShades.childImageSharp.fluid} />
          </div>

          <div className="side-image right">
            <Img fluid={data.orange.childImageSharp.fluid} />
          </div>
        </div>

        <div className="scroll">
          <span>Scroll Down</span>
        </div>
      </div>

      <div className="fixed-misc">
        Artista Visual e Fotografo
      </div>
    </div>
  );
}
