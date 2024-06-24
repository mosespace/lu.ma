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

type SelectInputProps = {
  label: string;
  optionTitle: string;
  className?: string;
  options: SelectOption[];
  selectedOption: SelectOption | null;
  setSelectedOption: (option: SelectOption | null) => void;
};

export type SelectOption = {
  value: string;
  label: string;
};

export default function ShadSelectInput({
  label,
  className = "sm:col-span-2",
  optionTitle,
  options = [],
  selectedOption,
  setSelectedOption,
}: SelectInputProps) {
  const handleValueChange = (value: string) => {
    const selectedOption =
      options.find((option) => option.value === value) || null;
    setSelectedOption(selectedOption);
  };

  return (
    <div className={className}>
      <label
        htmlFor={label}
        className='block text-sm font-medium leading-6 text-gray-900 dark:text-slate-50 mb-2'
      >
        {label}
      </label>
      <div className='mt-2'>
        <Select onValueChange={handleValueChange}>
          <SelectTrigger className='w-full'>
            <SelectValue placeholder={`${optionTitle}`} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>{optionTitle}</SelectLabel>
              {options.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
