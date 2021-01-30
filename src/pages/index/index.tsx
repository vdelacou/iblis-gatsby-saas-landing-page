import { Box, Container, CssBaseline, Typography } from '@material-ui/core';
import { PageRendererProps } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl';
import React, { FC, PropsWithChildren } from 'react';
import { Seo } from '../../components/seo';
import { useGetImages } from './useGetImages';
import { useSiteMetadata } from './useSiteMetadata';

const Page: FC<PageRendererProps> = (props: PropsWithChildren<PageRendererProps>) => {
  const { location } = props;
  const intl = useIntl();
  const images = useGetImages();
  const siteMetadata = useSiteMetadata();

  return (
    <>
      <Seo
        lang={intl.locale}
        title={intl.formatMessage({ id: 'pages.index.seo.title' })}
        description={intl.formatMessage({ id: 'pages.index.seo.description' })}
        keywords={intl.formatMessage({ id: 'pages.index.seo.keywords' })}
        url={`${siteMetadata.origin}${location.pathname}`}
        imgSrc={`${siteMetadata.origin}${images.socialImage.src}`}
      />
      <CssBaseline />
      <Box p={6}>
        <Container maxWidth="sm">
          <Typography variant="h1">{intl.formatMessage({ id: 'pages.index.title' })}</Typography>
        </Container>
      </Box>
    </>
  );
};

export default Page;
