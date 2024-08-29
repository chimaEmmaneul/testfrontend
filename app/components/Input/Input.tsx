import { InputProps } from "@/types/types";

const Input = ({
  label,
  type,
  id,
  name,
  value,
  placeholder,
  className,
  onChange,
}: InputProps) => {
  return (
    <div>
      <div>
        <label htmlFor={id} className="block   font-medium text-gray-700">
          {label}
        </label>

        <input
          type={type}
          id={id}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className={`mt-1 w-full rounded-sm focus:outline-none text-sm shadow-sm outline-none border border-neutral-100 py-2 px-4 ${className} `}
        />
      </div>
    </div>
  );
};

export default Input;
