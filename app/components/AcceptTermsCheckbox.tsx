import { useState } from 'react';
import { Checkbox } from "./Checkbox"

interface AcceptTermsCheckboxProps {
  onChange: (checked: boolean) => void;
}

export function AcceptTermsCheckbox({ onChange }: AcceptTermsCheckboxProps) {
  const [checked, setChecked] = useState(false);

  const handleChange = (value: boolean) => {
    setChecked(value);
    onChange(value);
  };

  return (
    <div className="flex items-center space-x-2 mt-4">
      <Checkbox
        id="terms"
        checked={checked}
        onCheckedChange={handleChange}
      />
      <label
        htmlFor="terms"
        className="text-sm font-extralight text-zinc-600 cursor-pointer"
      >
        I accept the terms and conditions
      </label>
    </div>
  );
}

