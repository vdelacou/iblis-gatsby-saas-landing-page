import React, { FC, PropsWithChildren } from 'react';
import Helmet from 'react-helmet';

/*
 * The Seo for each page
 */
export const Seo: FC<SeoProps> = (props: PropsWithChildren<SeoProps>) => {
  const { lang, title, description, imgSrc, url, keywords } = props;
  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      meta={[
        {
          name: 'description',
          content: description,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: description,
        },
        {
          property: 'og:image',
          content: imgSrc,
        },
        {
          property: 'og:image:alt',
          content: title,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:locale',
          content: lang,
        },
        {
          property: 'og:url',
          content: url,
        },
        {
          name: 'keywords',
          content: keywords,
        },
      ]}
    />
  );
};

interface SeoProps {
  /**
   * The current page lang
   */
  lang: string;
  /**
   * The title for SEO
   */
  title: string;
  /**
   * The description for SEO
   */
  description: string;
  /**
   * The keywords for SEO, separated by comma
   */
  keywords: string;
  /**
   * The current page address
   */
  url: string;
  /**
   * social media pciture address
   */
  imgSrc: string;
}
