"use client";

import Image from "next/image";
import Link from "next/link";
import * as React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

interface MenuItem {
  title: string;
  href?: string;
  description?: string;
  children?: MenuItem[];
}

const fetchMenuData = async (): Promise<MenuItem[]> => {
  // Fetch the menu data from an API or other source
  const response = await fetch("/api/menu");
  const data = await response.json();
  return data;
};

export default function Header() {
  const [menuData, setMenuData] = React.useState<MenuItem[]>([
    {
      title: "Home",
      children: [
        {
          title: "Web Development",
          href: "/services/web-development",
          description: "Building modern and responsive websites",
        },
        {
          title: "SEO",
          href: "/services/seo",
          description: "Improving your website's visibility on search engines",
        },
      ],
    },
    {
      title: "About",
      children: [
        {
          title: "Web Development",
          href: "/services/web-development",
          description: "Building modern and responsive websites",
        },
        {
          title: "SEO",
          href: "/services/seo",
          description: "Improving your website's visibility on search engines",
        },
      ],
    },
    {
      title: "Services",
      children: [
        {
          title: "Web Development",
          href: "/services/web-development",
          description: "Building modern and responsive websites",
        },
        {
          title: "SEO",
          href: "/services/seo",
          description: "Improving your website's visibility on search engines",
        },
        {
          title: "Digital Marketing",
          href: "/services/digital-marketing",
          description: "Promoting your business through digital channels",
        },
      ],
    },
  ]);

  const [openStates, setOpenStates] = React.useState<boolean[]>([]);

  React.useEffect(() => {
    fetchMenuData().then((data) => {
      setMenuData(data);
      setOpenStates(new Array(data.length).fill(false));
    });
  }, []);

  const handleToggle = (index: number) => {
    setOpenStates((prev) => {
      const newStates = [...prev];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  return (
    <nav className="flex flex-row justify-between px-56 py-8 w-full bg-white-900 backdrop-filter backdrop-blur-md bg-opacity-80">
      {/* Logo and web title */}
      <Link href="/" passHref>
        <div className="flex flex-row gap-3 cursor-pointer">
          <Image
            className="h-12 w-12 flex-none rounded-full bg-gray-50"
            src="/logo.png"
            alt="Website Logo"
            width={54}
            height={54}
          />
          <div className="flex flex-col font-bold">
            <span>Paroki Brayut</span>
            <span>Santo Yohanes Paulus II</span>
          </div>
        </div>
      </Link>

      {/* Menu Items */}
      <div className="flex gap-4">
        {menuData.map((menuItem, index) => {
          const isOpen = openStates[index];

          return (
            <DropdownMenu
              key={menuItem.title}
              onOpenChange={() => handleToggle(index)}
            >
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" onClick={() => handleToggle(index)}>
                  {menuItem.title}
                  {isOpen ? (
                    <ChevronUp className="ml-2" size={14} strokeWidth={1.5} />
                  ) : (
                    <ChevronDown className="ml-2" size={14} strokeWidth={1.5} />
                  )}
                </Button>
              </DropdownMenuTrigger>
              {menuItem.children && (
                <DropdownMenuContent align="start">
                  <ul className="flex flex-col w-64 gap-3 p-4">
                    {menuItem.children.map((child) => (
                      <DropdownMenuItem key={child.title}>
                        <Link href={child.href ?? "#"} passHref legacyBehavior>
                          <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">
                              {child.title}
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {child.description}
                            </p>
                          </a>
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </ul>
                </DropdownMenuContent>
              )}
            </DropdownMenu>
          );
        })}
      </div>
    </nav>
  );
}
