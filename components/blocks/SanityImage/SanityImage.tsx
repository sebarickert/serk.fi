"use client";

import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";

import { sanityClient } from "@/constants/sanityClient";
import { SanityImageObjectWithAltText } from "@/constants/types";

export const SanityImage = ({
  alt,
  ...image
}: SanityImageObjectWithAltText) => {
  const imageProps = useNextSanityImage(sanityClient, image);

  return <Image {...imageProps} alt={alt} className="min-w-full" />;
};
