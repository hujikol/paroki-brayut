import {
  ComponentPropsWithoutRef,
  ElementRef,
  forwardRef,
  useEffect,
} from "react";
import Link from "next/link";
import { menuData } from "@/lib/data";

import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { cn } from "@/lib/utils";

//   const fetchMenuData = async (): Promise<MenuItem[]> => {
//     // Fetch the menu data from an API or other source
//     const response = await fetch("/api/menu");
//     const data = await response.json();
//     return data;
//   };

export default function Menu() {
  useEffect(() => {
    //   fetchMenuData().then((data) => {
    //     setMenuData(data);
    //     setOpenStates(new Array(data.length).fill(false));
    //   });
  }, []);

  return (
    <NavigationMenu>
      <NavigationMenuList className='flex gap-4'>
        {menuData.map((menuItem) => {
          return (
            <NavigationMenuItem key={menuItem.title}>
              <NavigationMenuTrigger className='bg-transparent'>
                {menuItem.title}
              </NavigationMenuTrigger>
              {menuItem.children && (
                <NavigationMenuContent className='mt-12 bg-white rounded-md shadow-md border-2 border-gray-100'>
                  <ul className='flex flex-col w-64 gap-1 p-2'>
                    {menuItem.children.map((child) => (
                      <ListItem
                        key={child.title}
                        title={child.title}
                        desc={child.description}
                        href={child.href}
                      />
                    ))}
                  </ul>
                </NavigationMenuContent>
              )}
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = ({ className, title, desc, href, ...props }: any) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href ?? "#"}
          className={cn(
            "block select-none z-50 space-y-1 rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
            {desc}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};
