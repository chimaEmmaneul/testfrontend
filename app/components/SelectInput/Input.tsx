type Option = {
  value: string;
  label: string;
};

type SelectInputProps = {
  options: Option[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  label?: string;
  disabled?: boolean;
  name: string;
};

const SelectInput: React.FC<SelectInputProps> = ({
  options,
  value,
  onChange,
  label,
  name,
  disabled = false,
}) => {
  console.log(value, "select");
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <select
        className="block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm disabled:bg-gray-200"
        value={value}
        onChange={onChange}
        disabled={disabled}
        name={name}
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
