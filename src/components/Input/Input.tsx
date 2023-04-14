interface Props {
  placeholder?: string;
  value: string;
  onChange: (text: string) => void;
}

export default function Input({ placeholder, value, onChange }: Props) {
  return (
    <div className="w-full h-full">
      <input
        value={value}
        className="active:border-green-400"
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
