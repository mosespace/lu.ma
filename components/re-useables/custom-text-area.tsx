import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type TextAreaInputProps = {
  label: string;
  register: any;
  name: string;
  errors: any;
  placeholder?: string;
  className?: string;
  row?: string;
};

export function CustomTextArea({
  label,
  register,
  name,
  errors,
  placeholder,
  row,
  className = "col-span-full",
}: TextAreaInputProps) {
  return (
    <div className={cn("grid gap-2", className)}>
      <Label htmlFor={`${name}`}> {label}</Label>
      <Textarea
        rows={row}
        {...register(`${name}`, { required: true })}
        id={`${name}`}
        name={`${name}`}
        placeholder={placeholder ? placeholder : ""}
      />
      {errors[`${name}`] && (
        <span className='text-red-600 text-sm'>{label} is required</span>
      )}
    </div>
  );
}
