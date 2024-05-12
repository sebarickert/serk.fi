import { groq } from "next-sanity";

export const menuItemsQuery = groq`
    *[_type == 'navigation' && navId == 'main-menu'][0].items[]{
      title,
      "slug": select(defined(slug.link->slug.current) => slug.link->slug.current, !defined(slug.link->slug.current) => "/")
    }
  `;

export const pageQuery = groq`*[_type == "page" && slug.current == $slug][0]`;

export const articleQuery = groq`*[_type == "article" && slug.current == $slug][0]`;

export const showcaseQuery = groq`*[_type == "showcase" && slug.current == $slug][0]`;

export const showcasesQuery = groq`*[_type == 'showcase']`;
export const articlesQuery = groq`*[_type == 'article']`;
