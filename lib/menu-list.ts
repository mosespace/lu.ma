import {
  Tag,
  Users,
  Settings,
  Bookmark,
  SquarePen,
  LayoutGrid,
} from "lucide-react";

type Submenu = {
  href: string;
  label: string;
  active: boolean;
};

type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: any;
  submenus: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/dashboard",
          label: "Dashboard",
          active: pathname.includes("/dashboard"),
          icon: LayoutGrid,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "Contents",
      menus: [
        {
          href: "",
          label: "Events",
          active: pathname.includes("/dashboard/events"),
          icon: SquarePen,
          submenus: [
            {
              href: "/dashboard/events",
              label: "All Events",
              active: pathname === "/dashboard/events",
            },
            {
              href: "/dashboard/events/new",
              label: "New Event",
              active: pathname === "/dashboard/events/new",
            },
          ],
        },
        {
          href: "/dashboard/categories",
          label: "Categories",
          active: pathname.includes("/dashboard/categories"),
          icon: Bookmark,
          submenus: [],
        },
        {
          href: "/dashboard/tags",
          label: "Tags",
          active: pathname.includes("/dashboard/tags"),
          icon: Tag,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "Settings",
      menus: [
        {
          href: "/dashboard/users",
          label: "Users",
          active: pathname.includes("/dashboard/users"),
          icon: Users,
          submenus: [],
        },
        {
          href: "/dashboard/account",
          label: "Account",
          active: pathname.includes("/dashboard/account"),
          icon: Settings,
          submenus: [],
        },
      ],
    },
  ];
}
