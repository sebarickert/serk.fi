import { Menu } from "@/blocks/Menu/Menu";
import { menuItemsQuery } from "@/sanity/queries";
import { NavigationItemDto } from "@/types/NavigationItemDto";
import { getSanityContent } from "@/utils/getSanityContent";

async function getNavigationItems(): Promise<NavigationItemDto[]> {
  return getSanityContent(menuItemsQuery);
}

export const MenuContainer = async () => {
  const items = await getNavigationItems();

  return <Menu items={items} />;
};
