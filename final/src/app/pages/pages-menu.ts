import { NbMenuItem } from "@nebular/theme";

/* dashboard's language is turkish, therefore titles will also be in turkish.
** to prevent consistency on code, paths are not kept as turkish. 
**/

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: "Yönet",
    group: true,
  },
  {
    title: "Aileler",
    icon: "people-outline",
    children: [
      {
        title: "Aile Listesi",
        link: "/pages/families/family-list",
      },
      {
        title: "Aile Girişi",
        link: "/pages/families/family-adding",
      },
    ],
  },
];
