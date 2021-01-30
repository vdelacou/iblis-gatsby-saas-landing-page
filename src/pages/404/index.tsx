import { Box, Container, CssBaseline } from '@material-ui/core';
import { PageRendererProps } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl';
import React, { FC, PropsWithChildren } from 'react';
import { NotFound } from '../../components/not_found';
import { Seo } from '../../components/seo';
import { useGetImages } from './_useGetImages';
import { useSiteMetadata } from './_useSiteMetadata';

const Page: FC<PageRendererProps> = (props: PropsWithChildren<PageRendererProps>) => {
  const { location } = props;
  const intl = useIntl();
  const images = useGetImages();
  const siteMetadata = useSiteMetadata();

  return (
    <>
      <Seo
        lang={intl.locale}
        title={intl.formatMessage({ id: 'pages.404.seo.title' })}
        description={intl.formatMessage({ id: 'pages.404.seo.description' })}
        keywords={intl.formatMessage({ id: 'pages.404.seo.keywords' })}
        url={`${siteMetadata.origin}${location.pathname}`}
        imgSrc={`${siteMetadata.origin}${images.socialImage.src}`}
      />
      <CssBaseline />
      <Box py={6}>
        <Container maxWidth="sm">
          <Box justifyContent="center" py={6}>
            <NotFound />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Page;
