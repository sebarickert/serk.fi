"use client";

import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";

import { sanityClient } from "@/constants/sanityClient";

export const SanityImage = ({ ...image }) => {
  const imageProps = useNextSanityImage(sanityClient, image);

  return (
    <Image
      {...imageProps}
      // layout="responsive"
      // sizes="(max-width: 800px) 100vw, 800px"
      alt="asdasdas"
    />
  );
};
