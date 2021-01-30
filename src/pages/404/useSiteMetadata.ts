import { graphql, useStaticQuery } from 'gatsby';

export const useSiteMetadata = (): SiteMetadataResponse => {
  const { site } = useStaticQuery<SiteMetadataQuery>(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
          }
        }
      }
    `
  );
  const siteUrl = new URL(site.siteMetadata.siteUrl);
  return { origin: siteUrl.origin };
};

interface SiteMetadataResponse {
  origin: string;
}
interface SiteMetadataQuery {
  site: {
    siteMetadata: {
      siteUrl: string;
    };
  };
}
