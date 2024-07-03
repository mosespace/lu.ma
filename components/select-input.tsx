import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "./ui/label";

type Option = {
  value: string;
  label: string;
};

export default function ShadSelectInput({
  label,
  optionsArray,
  register,
  name,
  selected,
  setSelected,
  className = "sm:col-span-2",
}: {
  label: string;
  optionsArray: Option[];
  register: any;
  name: string;
  selected: string;
  setSelected: any;
  className?: string; // make className optional
}) {
  return (
    <div className={className}>
      <Label className='mb-2'>{label}</Label>
      <Select
        defaultValue={selected}
        onValueChange={(item) => setSelected(item)}
      >
        <SelectTrigger className={className}>
          <SelectValue placeholder='Select...' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {optionsArray.map((item, i: number) => {
              return (
                <SelectItem key={i} value={item.value}>
                  {item.label}
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
