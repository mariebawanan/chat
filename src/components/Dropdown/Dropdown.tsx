import { Option } from "@/types";

interface Props {
  value: string;
  options: Option[];
  onChange: (value: string) => void;
  title?: string;
}

export default function Dropdown({ title, options, value, onChange }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <select
      data-testid={title}
      value={value}
      onChange={handleChange}
      className="px-4 py-2 rounded-lg border border-slate-500"
    >
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
}
