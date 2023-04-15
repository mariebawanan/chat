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
    <div className="flex flex-col space-y-4">
      {label && <label className="text-xl font-serif">{label}</label>}
      <select
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
    </div>
  );
}
