import { groq } from "next-sanity";

export const menuItemsQuery = groq`
    *[_type == 'navigation' && navId == 'main-menu'][0].items[]{
      title,
      "slug": select(defined(slug.link->slug.current) => slug.link->slug.current, !defined(slug.link->slug.current) => "/")
    }
  `;

export const pageQuery = groq`*[_type == "page" && slug.current == $slug][0]{
  ...,
  content[]{
    ...,
    _type == 'showcaseListing' => {
      ...,
      "title": label,
      "showcases": select(length(showcases) > 0 => showcases[]->, *[_type == 'showcase'] | order(published desc))
    },
    _type == 'articleListing' => {
      ...,
      "title": label,
      "articles": select(length(articles) > 0 => articles[]->, *[_type == 'article'] | order(published desc))
    }
  }
}`;

export const articleQuery = groq`*[_type == "article" && slug.current == $slug][0]`;

export const showcaseQuery = groq`*[_type == "showcase" && slug.current == $slug][0]`;
