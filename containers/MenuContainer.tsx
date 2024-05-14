import { Menu } from "@/blocks/Menu/Menu";
import { sanityClient } from "@/constants/sanityClient";
import { menuItemsQuery } from "@/sanity/queries";
import { NavigationItemDto } from "@/types/NavigationItemDto";

async function getNavigationItems(): Promise<NavigationItemDto[]> {
  return sanityClient.fetch(menuItemsQuery);
}

export const MenuContainer = async () => {
  const items = await getNavigationItems();

  return <Menu items={items} />;
};
