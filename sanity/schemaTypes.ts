import { article } from "./schemas/documents/article";
import { navigation } from "./schemas/documents/navigation";
import { page } from "./schemas/documents/page";
import { showcase } from "./schemas/documents/showcase";
import { link } from "./schemas/objects/link";
import { navigationItem } from "./schemas/objects/navigationItem";

export const schemaTypes = [
  page,
  article,
  showcase,
  navigation,
  link,
  navigationItem,
];
