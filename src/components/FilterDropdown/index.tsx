"use client";
import * as React from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FC, useEffect } from "react";
import { Button } from "@/components/ui/button";

type Checked = DropdownMenuCheckboxItemProps["checked"];

interface Props {
  title: string;
  handleChange: (item: string) => void;
  items: string[];
  selectedItems: string[];
}

const FilterDropdown: FC<Props> = ({
  items,
  title,
  handleChange,
  selectedItems,
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{title}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{title}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className={"grid grid-cols-3"}>
          {items.map((item) => {
            return (
              <DropdownMenuCheckboxItem
                key={item}
                checked={selectedItems?.includes(item)}
                onCheckedChange={() => handleChange(item)}
              >
                {item}
              </DropdownMenuCheckboxItem>
            );
          })}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default FilterDropdown;
