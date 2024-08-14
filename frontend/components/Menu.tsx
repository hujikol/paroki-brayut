"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { menuData, MenuData } from "@/lib/data";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

//   const fetchMenuData = async (): Promise<MenuItem[]> => {
//     // Fetch the menu data from an API or other source
//     const response = await fetch("/api/menu");
//     const data = await response.json();
//     return data;
//   };

export default function Menu() {
  const [openStates, setOpenStates] = useState<boolean[]>([]);

  useEffect(() => {
    //   fetchMenuData().then((data) => {
    //     setMenuData(data);
    //     setOpenStates(new Array(data.length).fill(false));
    //   });
  }, []);

  const handleToggle = (index: number) => {
    setOpenStates((prev) => {
      const newStates = [...prev];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  return (
    <div className='flex gap-4'>
      {menuData.map((menuItem, index) => {
        const isOpen = openStates[index];

        return (
          <DropdownMenu
            key={menuItem.title}
            onOpenChange={() => handleToggle(index)}
            modal={false}
          >
            <DropdownMenuTrigger
              className={cn(
                "font-bold hover:bg-[#303F76] hover:text-white overflow-hidden",
                isOpen
                  ? "bg-[#303F76] text-white"
                  : "bg-transparent text-gray-800"
              )}
              asChild
            >
              <Button variant='ghost' className='overflow-hidden'>
                {menuItem.title}
                {isOpen ? (
                  <ChevronUp className='ml-2' size={14} strokeWidth={1.5} />
                ) : (
                  <ChevronDown className='ml-2' size={14} strokeWidth={1.5} />
                )}
              </Button>
            </DropdownMenuTrigger>
            {menuItem.children && (
              <DropdownMenuContent align='start' className='overflow-hidden'>
                <ul className='flex flex-col w-64 gap-1 p-1'>
                  {menuItem.children.map((child) => (
                    <DropdownMenuItem key={child.title}>
                      <Link
                        href={child.href ?? "#"}
                        className='block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                      >
                        <div className='text-sm font-bold leading-none'>
                          {child.title}
                        </div>
                        <div className='text-sm text-muted-foreground'>
                          {child.description}
                        </div>
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
  );
}
