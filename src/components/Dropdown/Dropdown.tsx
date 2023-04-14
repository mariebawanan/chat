import { Option } from "@/types";

interface Props {
  value: string;
  options: Option[];
  onChange: (value: string) => void;
  label?: string;
}

export default function Dropdown({ label, options, value, onChange }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="flex flex-col space-y-2">
      {label && <label>{label}</label>}
      <select value={value} onChange={handleChange}>
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}
