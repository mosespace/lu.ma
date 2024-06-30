import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form"; // Import useForm from react-hook-form

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
      <h2 className='mb-2'>{label}</h2>
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
