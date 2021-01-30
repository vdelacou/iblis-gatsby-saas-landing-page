import { graphql, useStaticQuery } from 'gatsby';
import { FixedObject } from 'gatsby-image';

export const useGetImages = (): DataResponse => {
  const { socialImage } = useStaticQuery<DataProps>(
    graphql`
      query {
        socialImage: file(relativePath: { eq: "social.png" }) {
          childImageSharp {
            fixed(width: 1200, height: 630) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
      }
    `
  );
  return { socialImage: socialImage.childImageSharp.fixed };
};

interface DataProps {
  socialImage: {
    childImageSharp: {
      fixed: FixedObject;
    };
  };
}

interface DataResponse {
  socialImage: FixedObject;
}
