import { SanityImageObject } from "@sanity/image-url/lib/types/types";

export type SanityImageObjectWithAltText = SanityImageObject & {
  alt: string;
};
